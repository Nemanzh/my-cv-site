import { NextResponse } from 'next/server';

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  project?: string;
  budget?: string;
  timeline?: string;
}

function toSafeString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    const name = toSafeString(payload.name);
    const email = toSafeString(payload.email);
    const company = toSafeString(payload.company);
    const project = toSafeString(payload.project);
    const budget = toSafeString(payload.budget);
    const timeline = toSafeString(payload.timeline);

    if (!name || !email || !project) {
      return NextResponse.json(
        { ok: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Keep this as server-side lead ingestion point until CRM integration is wired.
    console.log('[lead]', {
      name,
      email,
      company,
      budget,
      timeline,
      project,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Invalid request payload' },
      { status: 400 }
    );
  }
}
