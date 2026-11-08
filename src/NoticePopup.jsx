import React from 'react';
import { translations } from './i18n';

export default function NoticePopup({ lang, onClose, onCheck }) {
  const t = translations[lang] || translations.ko;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#fff', borderRadius: '16px', padding: '24px',
        maxWidth: '400px', width: '100%', boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
      }}>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#111' }}>⚠️ 공지사항 및 필독 안내</h3>
        <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
          {t.noticeDesc}
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={onCheck}
            style={{
              flex: 1, backgroundColor: '#000', color: '#fff', border: 'none',
              padding: '12px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer'
            }}
          >
            {t.noticeCheck}
          </button>
        </div>
      </div>
    </div>
  );
}