import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = 'image/png';
export const alt = 'Nemanzh Software Studio';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px',
          background: 'linear-gradient(120deg, #111827 0%, #0b1220 60%, #030712 100%)',
          color: '#f3f4f6',
          fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        }}
      >
        <div style={{ fontSize: 24, color: '#67e8f9', letterSpacing: 1.2 }}>
          Nemanzh Software Studio
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.08 }}>
            Next.js and .NET
            <br />
            Product Engineering
          </div>
          <div style={{ fontSize: 27, color: '#c4b5fd', lineHeight: 1.22 }}>
            From idea to production: full-stack apps, APIs, integrations, and long-term maintenance
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
