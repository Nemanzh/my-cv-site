import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';
export const alt = 'Nemanzh Software Studio';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background: 'linear-gradient(135deg, #0f172a 0%, #111827 45%, #020617 100%)',
          color: '#e5e7eb',
          fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 9999,
              backgroundColor: '#22c55e',
            }}
          />
          <div style={{ fontSize: 28, color: '#22d3ee', letterSpacing: 1.5 }}>
            nemanzh@softwarestudio
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.06 }}>
            Nemanzh Software
            <br />
            Studio
          </div>
          <div style={{ fontSize: 30, color: '#93c5fd', maxWidth: 950, lineHeight: 1.25 }}>
            Modern web products, custom business systems, and Microsoft-first backend platforms
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
