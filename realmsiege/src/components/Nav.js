import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import AuthModal from './AuthModal';
import AdminPanel from './AdminPanel';

export default function Nav() {
  const { user, profile, isAdmin, signOut } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const loc = useLocation();
  const active = (p) => loc.pathname === p || loc.pathname.startsWith(p + '/') ? 'active' : '';

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo">⬡ REALM SIEGE</Link>
        <ul className="nav-links">
          <li><Link to="/" className={active('/')}>Home</Link></li>
          <li><Link to="/wiki" className={active('/wiki')}>Wiki</Link></li>
          <li><Link to="/towers" className={active('/towers')}>Towers</Link></li>
          <li><Link to="/bestiary" className={active('/bestiary')}>Bestiary</Link></li>
          <li><Link to="/items" className={active('/items')}>Items</Link></li>
          <li><Link to="/loot" className={active('/loot')}>Loot Tables</Link></li>
          <li><Link to="/heroes" className={active('/heroes')}>Heroes</Link></li>
          <li><Link to="/devlog" className={active('/devlog')}>Devlog</Link></li>
          {user
            ? <li><button className="nav-btn" onClick={signOut}>{profile?.username || 'Account'} ✕</button></li>
            : <li><button className="nav-btn" onClick={() => setShowAuth(true)}>Sign In</button></li>
          }
          {isAdmin && <li><button className="nav-btn admin" onClick={() => setShowAdmin(v => !v)}>⚙ Admin</button></li>}
        </ul>
      </nav>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      {showAdmin && <AdminPanel onClose={() => setShowAdmin(false)} />}
    </>
  );
}
