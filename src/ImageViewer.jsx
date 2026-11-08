import React from 'react';

export default function ImageViewer({ src, onClose }) {
  if (!src) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', zIndex: 10000, padding: '20px'
    }}>
      <button 
        onClick={onClose}
        style={{
          position: 'absolute', top: '20px', right: '20px', backgroundColor: 'transparent',
          color: '#fff', border: 'none', fontSize: '24px', cursor: 'pointer', fontWeight: 'bold'
        }}
      >
        ✕
      </button>
      <img 
        src={src} 
        alt="Original View" 
        style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '8px' }} 
      />
      <a 
        href={src} 
        download="image.jpg" 
        target="_blank" 
        rel="noreferrer"
        style={{
          marginTop: '20px', backgroundColor: '#fff', color: '#000', padding: '10px 20px',
          borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px'
        }}
      >
        이미지 다운로드
      </a>
    </div>
  );
}