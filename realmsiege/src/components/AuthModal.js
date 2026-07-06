import { useState } from 'react';
import { sb } from '../supabase';
import { useAuth } from '../AuthContext';

export default function AuthModal({ onClose }) {
  const [tab, setTab] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const { refreshProfile } = useAuth();

  async function handleSignIn(e) {
    e.preventDefault();
    setError(''); setLoading(true);
    const { error } = await sb.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setError(error.message);
    else { onClose(); }
  }

  async function handleSignUp(e) {
    e.preventDefault();
    setError(''); setLoading(true);
    if (!username.trim()) { setError('Username required.'); setLoading(false); return; }
    const { data, error } = await sb.auth.signUp({ email, password });
    if (error) { setError(error.message); setLoading(false); return; }
    if (data.user) {
      await sb.from('profiles').insert({ id: data.user.id, username: username.trim(), is_admin: false });
      setSuccess('Account created! Check your email to confirm.');
    }
    setLoading(false);
  }

  return (
    <div className="modal-overlay active" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 style={{ fontFamily:'Cinzel,serif', fontSize:'1.3rem', color:'#fff', marginBottom:'.3rem' }}>Join the Realm</h2>
        <p style={{ fontSize:'.9rem', color:'var(--muted)', marginBottom:'1.5rem' }}>Create an account to comment on devlogs and follow development.</p>
        <div className="tabs" style={{ marginBottom:'1.5rem' }}>
          <button className={`tab${tab==='signin'?' active':''}`} onClick={() => setTab('signin')}>Sign In</button>
          <button className={`tab${tab==='signup'?' active':''}`} onClick={() => setTab('signup')}>Sign Up</button>
        </div>
        {tab === 'signin' ? (
          <form onSubmit={handleSignIn}>
            <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" required /></div>
            <div className="form-group"><label className="form-label">Password</label><input className="form-input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" required /></div>
            {error && <p className="form-error">{error}</p>}
            <button className="btn btn-primary btn-full" type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</button>
          </form>
        ) : (
          <form onSubmit={handleSignUp}>
            <div className="form-group"><label className="form-label">Username</label><input className="form-input" value={username} onChange={e=>setUsername(e.target.value)} placeholder="YourUsername" /></div>
            <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" required /></div>
            <div className="form-group"><label className="form-label">Password</label><input className="form-input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" required /></div>
            {error && <p className="form-error">{error}</p>}
            {success && <p className="form-success">{success}</p>}
            <button className="btn btn-primary btn-full" type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create Account'}</button>
          </form>
        )}
      </div>
    </div>
  );
}
