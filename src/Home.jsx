import React, { useState, useEffect } from 'react';
import { translations } from './i18n';
import NoticePopup from './NoticePopup';
import ImageViewer from './ImageViewer';
import { 
  Globe, ShieldCheck, Download, Settings, Archive, 
  FileText, MessageSquare, AlertTriangle, Trash2, Plus, Check, ChevronRight 
} from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState('ko');
  const [showNotice, setShowNotice] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [imageSrc, setImageSrc] = useState(null);
  
  const t = translations[lang] || translations.ko;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', color: '#111', fontFamily: 'sans-serif', paddingBottom: '40px' }}>
      {showNotice && (
        <NoticePopup lang={lang} onCheck={() => setShowNotice(false)} />
      )}

      {/* 상단 네비게이션 */}
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #eaeaea', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>LINEUP HUB</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <select 
            value={lang} 
            onChange={(e) => setLang(e.target.value)}
            style={{ padding: '6px 10px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', backgroundColor: '#fff' }}
          >
            <option value="ko">🇰🇷 한국어</option>
            <option value="en">🇺🇸 English</option>
            <option value="zh">🇨🇳 中文</option>
            <option value="ja">🇯🇵 日本語</option>
            <option value="es">🇪🇸 Español</option>
          </select>
        </div>
      </header>

      {/* 메인 컨텐츠 영역 */}
      <main style={{ maxWidth: '600px', margin: '20px auto', padding: '0 16px' }}>
        
        {/* 관리자 검수 배너 */}
        <div style={{ backgroundColor: '#111', color: '#fff', padding: '16px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <ShieldCheck size={24} color="#4ade80" />
          <div>
            <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#4ade80' }}>SECURE SYSTEM</div>
            <div style={{ fontSize: '14px' }}>{t.adminCheck}</div>
          </div>
        </div>

        {/* 메뉴 버튼들 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
          <button 
            onClick={() => setActiveTab('archive')}
            style={{ padding: '20px', backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}
          >
            <Archive size={20} color="#000" />
            <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{t.archive}</span>
          </button>

          <button 
            onClick={() => setActiveTab('pledge')}
            style={{ padding: '20px', backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}
          >
            <FileText size={20} color="#000" />
            <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{t.pledge}</span>
          </button>

          <button 
            onClick={() => setActiveTab('board')}
            style={{ padding: '20px', backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}
          >
            <MessageSquare size={20} color="#000" />
            <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{t.board}</span>
          </button>

          <button 
            onClick={() => setActiveTab('settings')}
            style={{ padding: '20px', backgroundColor: '#fff', border: '1px solid #eaeaea', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}
          >
            <Settings size={20} color="#000" />
            <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{t.settings}</span>
          </button>
        </div>

        {/* 홈 화면 추가 가이드 박스 */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #eaeaea', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>📱 {t.addHome}</h3>
          <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#666' }}>브라우저 메뉴에서 '홈 화면에 추가'를 누르면 진짜 앱처럼 편하게 사용할 수 있습니다.</p>
          <button 
            onClick={() => setImageSrc('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800')}
            style={{ backgroundColor: '#f0f0f0', border: 'none', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            예시 이미지 원본 보기
          </button>
        </div>

      </main>

      {/* 이미지 뷰어 모달 */}
      <ImageViewer src={imageSrc} onClose={() => setImageSrc(null)} />
    </div>
  );
}