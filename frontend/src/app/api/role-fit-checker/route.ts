import { NextResponse } from 'next/server';
import { profileData, type RoleFitResponse } from '@/data/profileData';

interface RoleFitPayload {
  jobDescription?: string;
}

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const MIN_JOB_DESCRIPTION_LENGTH = 50;
const MAX_JOB_DESCRIPTION_LENGTH = 8000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_WINDOW_SECONDS = RATE_LIMIT_WINDOW_MS / 1000;

const SYSTEM_PROMPT = `You are an AI recruiter assistant on Nemanja Radulovic's CV/portfolio website.

Your task is to compare a pasted job description with Nemanja's actual experience, skills, and projects.

Rules:
- Use only the provided profile data.
- Do not invent companies, dates, projects, tools, or achievements.
- Be honest but positive.
- If a requirement is not clearly covered by the profile data, list it under potential gaps.
- Keep the tone professional, concise, and recruiter-friendly.
- Return only valid JSON.
- Do not include markdown.
- Do not include explanations outside the JSON.

Return the response in this JSON format:

{
  "matchScore": number,
  "confidenceLevel": "high" | "medium" | "low",
  "overallSummary": string,
  "strongMatches": string[],
  "potentialGaps": string[],
  "missingContext": string[],
  "recruiterSummary": string,
  "relevantTechnologies": string[],
  "technologyMatches": {
    "matched": string[],
    "adjacent": string[],
    "missing": string[]
  }
}`;

function toSafeString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');

  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }

  return request.headers.get('x-real-ip') || 'unknown';
}

function getRateLimitStore() {
  const scopedGlobal = globalThis as typeof globalThis & {
    __roleFitRateLimitStore?: Map<string, RateLimitEntry>;
  };

  if (!scopedGlobal.__roleFitRateLimitStore) {
    scopedGlobal.__roleFitRateLimitStore = new Map();
  }

  return scopedGlobal.__roleFitRateLimitStore;
}

function checkRateLimit(ip: string) {
  const store = getRateLimitStore();
  const now = Date.now();
  const existing = store.get(ip);

  if (!existing || existing.resetAt <= now) {
    store.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { limited: false };
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      limited: true,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  store.set(ip, existing);

  return { limited: false };
}

async function checkUpstashRateLimit(ip: string) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  const key = `role-fit:${ip}`;

  try {
    const incrementResponse = await fetch(`${url}/incr/${encodeURIComponent(key)}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!incrementResponse.ok) {
      throw new Error(`Upstash INCR failed with ${incrementResponse.status}`);
    }

    const incrementData = (await incrementResponse.json()) as { result?: number };
    const count = incrementData.result ?? 1;

    if (count === 1) {
      await fetch(`${url}/expire/${encodeURIComponent(key)}/${RATE_LIMIT_WINDOW_SECONDS}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    if (count <= RATE_LIMIT_MAX_REQUESTS) {
      return { limited: false };
    }

    const ttlResponse = await fetch(`${url}/ttl/${encodeURIComponent(key)}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const ttlData = ttlResponse.ok ? ((await ttlResponse.json()) as { result?: number }) : {};

    return {
      limited: true,
      retryAfterSeconds: Math.max(1, ttlData.result ?? RATE_LIMIT_WINDOW_SECONDS),
    };
  } catch (error) {
    console.error('[role-fit-checker] Upstash rate limit failed', error);
    return null;
  }
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function toCleanStringArray(value: unknown) {
  return isStringArray(value) ? value.map((item) => item.trim()).filter(Boolean) : [];
}

function extractJsonContent(content: string) {
  try {
    JSON.parse(content);
    return content;
  } catch {
    const firstBrace = content.indexOf('{');
    const lastBrace = content.lastIndexOf('}');

    if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
      return content;
    }

    return content.slice(firstBrace, lastBrace + 1);
  }
}

function parseRoleFitResponse(content: string): RoleFitResponse | null {
  try {
    const parsed = JSON.parse(extractJsonContent(content)) as Partial<RoleFitResponse>;
    const confidenceLevel =
      parsed.confidenceLevel === 'high' ||
      parsed.confidenceLevel === 'medium' ||
      parsed.confidenceLevel === 'low'
        ? parsed.confidenceLevel
        : 'medium';
    const technologyMatches = parsed.technologyMatches;

    if (
      typeof parsed.matchScore !== 'number' ||
      typeof parsed.overallSummary !== 'string' ||
      !isStringArray(parsed.strongMatches) ||
      !isStringArray(parsed.potentialGaps) ||
      typeof parsed.recruiterSummary !== 'string' ||
      !isStringArray(parsed.relevantTechnologies) ||
      !technologyMatches ||
      !isStringArray(technologyMatches.matched) ||
      !isStringArray(technologyMatches.adjacent) ||
      !isStringArray(technologyMatches.missing)
    ) {
      return null;
    }

    return {
      matchScore: Math.max(0, Math.min(100, Math.round(parsed.matchScore))),
      confidenceLevel,
      overallSummary: parsed.overallSummary.trim(),
      strongMatches: toCleanStringArray(parsed.strongMatches),
      potentialGaps: toCleanStringArray(parsed.potentialGaps),
      missingContext: toCleanStringArray(parsed.missingContext),
      recruiterSummary: parsed.recruiterSummary.trim(),
      relevantTechnologies: toCleanStringArray(parsed.relevantTechnologies),
      technologyMatches: {
        matched: toCleanStringArray(technologyMatches.matched),
        adjacent: toCleanStringArray(technologyMatches.adjacent),
        missing: toCleanStringArray(technologyMatches.missing),
      },
    };
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rateLimit = (await checkUpstashRateLimit(ip)) ?? checkRateLimit(ip);

    if (rateLimit.limited) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Too many requests. Please try again in a few minutes.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimit.retryAfterSeconds),
          },
        },
      );
    }

    let payload: RoleFitPayload;

    try {
      payload = (await request.json()) as RoleFitPayload;
    } catch {
      return NextResponse.json(
        { ok: false, message: 'Invalid request payload.' },
        { status: 400 },
      );
    }

    const jobDescription = toSafeString(payload.jobDescription);

    if (!jobDescription) {
      return NextResponse.json(
        { ok: false, message: 'Job description is required.' },
        { status: 400 },
      );
    }

    if (jobDescription.length < MIN_JOB_DESCRIPTION_LENGTH) {
      return NextResponse.json(
        {
          ok: false,
          message: `Job description must be at least ${MIN_JOB_DESCRIPTION_LENGTH} characters.`,
        },
        { status: 400 },
      );
    }

    if (jobDescription.length > MAX_JOB_DESCRIPTION_LENGTH) {
      return NextResponse.json(
        {
          ok: false,
          message: `Job description must be at most ${MAX_JOB_DESCRIPTION_LENGTH} characters.`,
        },
        { status: 400 },
      );
    }

    if (!process.env.OPENROUTER_API_KEY) {
      console.error('[role-fit-checker] Missing OPENROUTER_API_KEY');

      return NextResponse.json(
        {
          ok: false,
          message: 'AI analysis is temporarily unavailable.',
        },
        { status: 500 },
      );
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.SITE_URL || 'http://localhost:3000',
        'X-Title': process.env.SITE_NAME || 'Nemanja Radulovic Portfolio',
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || 'openrouter/free',
        response_format: {
          type: 'json_object',
        },
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          {
            role: 'user',
            content: JSON.stringify({
              profileData,
              jobDescription,
            }),
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[role-fit-checker] OpenRouter request failed', response.status, errorText);

      return NextResponse.json(
        { ok: false, message: 'OpenRouter request failed.' },
        { status: 502 },
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{
        message?: {
          content?: string;
        };
      }>;
    };

    const content = data.choices?.[0]?.message?.content?.trim();

    if (!content) {
      return NextResponse.json(
        { ok: false, message: 'AI response was empty.' },
        { status: 502 },
      );
    }

    const parsed = parseRoleFitResponse(content);

    if (!parsed) {
      console.error('[role-fit-checker] Failed to parse AI JSON', content);

      return NextResponse.json(
        { ok: false, message: 'AI response could not be parsed.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, result: parsed });
  } catch (error) {
    console.error('[role-fit-checker] Unexpected error', error);

    return NextResponse.json(
      { ok: false, message: 'Unexpected server error.' },
      { status: 500 },
    );
  }
}
