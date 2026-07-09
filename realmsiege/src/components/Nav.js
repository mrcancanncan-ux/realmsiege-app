import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { t, getLang, setLang } from '../i18n/translations';
import AuthModal from './AuthModal';
import AdminPanel from './AdminPanel';

export default function Nav({ onLangChange }) {
  const { user, profile, isAdmin, signOut } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [lang, setLangState] = useState(getLang());
  const loc = useLocation();
  const a = (p) => loc.pathname === p || loc.pathname.startsWith(p+'/') ? 'active' : '';

  function switchLang(l) {
    setLang(l); setLangState(l);
    if (onLangChange) onLangChange(l);
  }

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo">⬡ REALM SIEGE</Link>
        <ul className="nav-links">
          <li><Link to="/" className={a('/')}>{t('nav.home')}</Link></li>
          <li><Link to="/lore" className={a('/lore')}>{t('nav.lore')}</Link></li>
          <li><Link to="/wiki" className={a('/wiki')}>{t('nav.wiki')}</Link></li>
          <li><Link to="/towers" className={a('/towers')}>{t('nav.towers')}</Link></li>
          <li><Link to="/bestiary" className={a('/bestiary')}>{t('nav.bestiary')}</Link></li>
          <li><Link to="/items" className={a('/items')}>{t('nav.items')}</Link></li>
          <li><Link to="/loot" className={a('/loot')}>{t('nav.loot')}</Link></li>
          <li><Link to="/heroes" className={a('/heroes')}>{t('nav.heroes')}</Link></li>
          <li><Link to="/devlog" className={a('/devlog')}>{t('nav.devlog')}</Link></li>
          <li style={{display:'flex',gap:'.3rem'}}>
            <button className={`lang-btn${lang==='en'?' active':''}`} onClick={()=>switchLang('en')}>EN</button>
            <button className={`lang-btn${lang==='tr'?' active':''}`} onClick={()=>switchLang('tr')}>TR</button>
          </li>
          {user
            ? <li><button className="nav-btn" onClick={signOut}>{profile?.username || 'Account'} ✕</button></li>
            : <li><button className="nav-btn" onClick={()=>setShowAuth(true)}>{t('nav.signin')}</button></li>
          }
          {isAdmin && <li><button className="nav-btn admin" onClick={()=>setShowAdmin(v=>!v)}>⚙ {t('nav.admin')}</button></li>}
        </ul>
      </nav>
      {showAuth && <AuthModal onClose={()=>setShowAuth(false)} />}
      {showAdmin && <AdminPanel onClose={()=>setShowAdmin(false)} />}
    </>
  );
}
