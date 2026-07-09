import { useState } from 'react';
import { sb } from '../supabase';
import { t } from '../i18n/translations';

export default function AuthModal({ onClose }) {
  const [tab, setTab] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignIn(e) {
    e.preventDefault(); setError(''); setLoading(true);
    const { error } = await sb.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setError(error.message); else onClose();
  }

  async function handleSignUp(e) {
    e.preventDefault(); setError(''); setLoading(true);
    if (!username.trim()) { setError(t('auth.username_required')); setLoading(false); return; }
    const { data, error } = await sb.auth.signUp({ email, password });
    if (error) { setError(error.message); setLoading(false); return; }
    if (data.user) {
      await sb.from('profiles').insert({ id: data.user.id, username: username.trim(), is_admin: false });
      setSuccess(t('auth.confirm_email'));
    }
    setLoading(false);
  }

  return (
    <div className="modal-overlay active" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 style={{fontFamily:'Cinzel,serif',fontSize:'1.2rem',color:'#fff',marginBottom:'.3rem'}}>{t('auth.join')}</h2>
        <p style={{fontSize:'.88rem',color:'var(--muted)',marginBottom:'1.5rem'}}>{t('auth.join_sub')}</p>
        <div className="tabs" style={{marginBottom:'1.5rem'}}>
          <button className={`tab${tab==='signin'?' active':''}`} onClick={()=>setTab('signin')}>{t('auth.signin')}</button>
          <button className={`tab${tab==='signup'?' active':''}`} onClick={()=>setTab('signup')}>{t('auth.signup')}</button>
        </div>
        {tab==='signin' ? (
          <form onSubmit={handleSignIn}>
            <div className="form-group"><label className="form-label">{t('auth.email')}</label><input className="form-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" required /></div>
            <div className="form-group"><label className="form-label">{t('auth.password')}</label><input className="form-input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" required /></div>
            {error && <p className="form-error">{error}</p>}
            <button className="btn btn-primary btn-full" type="submit" disabled={loading}>{loading ? t('auth.signing_in') : t('auth.signin_btn')}</button>
          </form>
        ) : (
          <form onSubmit={handleSignUp}>
            <div className="form-group"><label className="form-label">{t('auth.username')}</label><input className="form-input" value={username} onChange={e=>setUsername(e.target.value)} /></div>
            <div className="form-group"><label className="form-label">{t('auth.email')}</label><input className="form-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></div>
            <div className="form-group"><label className="form-label">{t('auth.password')}</label><input className="form-input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></div>
            {error && <p className="form-error">{error}</p>}
            {success && <p className="form-success">{success}</p>}
            <button className="btn btn-primary btn-full" type="submit" disabled={loading}>{loading ? t('auth.creating') : t('auth.signup_btn')}</button>
          </form>
        )}
      </div>
    </div>
  );
}
