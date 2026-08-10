import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'innorag Technologies - Retrieve |> Augment |> Generate';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <span
            style={{
              fontSize: 110,
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#ffffff',
              backgroundColor: '#000000',
              borderRadius: 20,
              padding: '0 28px 10px 28px',
              marginRight: 10,
            }}
          >
            i
          </span>
          <span style={{ fontSize: 110, fontWeight: 700, color: '#ffffff' }}>nnorag</span>
          <span style={{ fontSize: 110, fontWeight: 700, color: '#ea580c' }}>.</span>
        </div>
        <div style={{ display: 'flex', marginTop: 40, fontSize: 44, color: '#94a3b8' }}>
          <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Retrieve</span>
          <span style={{ color: '#ea580c', margin: '0 18px' }}>|&gt;</span>
          <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Augment</span>
          <span style={{ color: '#ea580c', margin: '0 18px' }}>|&gt;</span>
          <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Generate</span>
        </div>
        <div style={{ display: 'flex', marginTop: 48, fontSize: 30, color: '#64748b' }}>
          CleverBrio &nbsp;&middot;&nbsp; Ambitous &nbsp;&middot;&nbsp; Founders Console
        </div>
      </div>
    ),
    { ...size }
  );
}
