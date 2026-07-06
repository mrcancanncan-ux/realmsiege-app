import { useState, useEffect } from 'react';
import { sb } from '../supabase';

function Toast({ msg }) {
  return msg ? <div className="toast show">{msg}</div> : null;
}

export default function AdminPanel({ onClose }) {
  const [content, setContent] = useState({});
  const [progress, setProgress] = useState([]);
  const [devlogTitle, setDevlogTitle] = useState('');
  const [devlogContent, setDevlogContent] = useState('');
  const [subscribers, setSubscribers] = useState([]);
  const [toast, setToast] = useState('');
  const [loading, setLoading] = useState(false);

  function showToast(msg) { setToast(msg); setTimeout(() => setToast(''), 2500); }

  useEffect(() => {
    loadAll();
  }, []);

  async function loadAll() {
    const [c, p, s] = await Promise.all([
      sb.from('site_content').select('*'),
      sb.from('progress_items').select('*').order('sort_order'),
      sb.from('subscribers').select('*').order('created_at', { ascending: false }),
    ]);
    const cObj = {};
    (c.data || []).forEach(r => cObj[r.id] = r.value);
    setContent(cObj);
    setProgress(p.data || []);
    setSubscribers(s.data || []);
  }

  async function saveContent() {
    setLoading(true);
    const keys = ['version','next_update','next_update_desc','stage','stage_desc','countdown_target'];
    for (const k of keys) {
      await sb.from('site_content').upsert({ id: k, value: content[k] || '', updated_at: new Date().toISOString() });
    }
    setLoading(false);
    showToast('✓ Content saved!');
  }

  async function saveProgress() {
    setLoading(true);
    for (const item of progress) {
      await sb.from('progress_items').update({ name: item.name, percentage: item.percentage, updated_at: new Date().toISOString() }).eq('id', item.id);
    }
    setLoading(false);
    showToast('✓ Progress saved!');
  }

  async function postDevlog() {
    if (!devlogTitle.trim() || !devlogContent.trim()) { showToast('Fill in both fields.'); return; }
    setLoading(true);
    await sb.from('devlog_entries').insert({ title: devlogTitle, content: devlogContent });
    setDevlogTitle(''); setDevlogContent('');
    setLoading(false);
    showToast('✓ Devlog posted!');
  }

  function updateContent(k, v) { setContent(prev => ({ ...prev, [k]: v })); }
  function updateProgress(id, field, val) { setProgress(prev => prev.map(p => p.id === id ? { ...p, [field]: field === 'percentage' ? Math.max(0,Math.min(100,parseInt(val)||0)) : val } : p)); }

  return (
    <>
      <div className="admin-panel open">
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.5rem' }}>
          <span style={{ fontFamily:'Cinzel,serif', color:'var(--gold)', fontWeight:700, fontSize:'1rem' }}>⚙ Admin Panel</span>
          <button onClick={onClose} style={{ background:'none', border:'none', color:'var(--muted)', cursor:'pointer', fontSize:'1rem' }}>✕</button>
        </div>

        <div className="admin-section">
          <div className="admin-section-title">Version & Status</div>
          {[['version','Current Version'],['next_update','Next Update'],['next_update_desc','Update Description'],['stage','Stage'],['stage_desc','Stage Description'],['countdown_target','Countdown Target (ISO date)']].map(([k,label]) => (
            <div className="form-group" key={k}>
              <label className="form-label">{label}</label>
              <input className="form-input" value={content[k]||''} onChange={e=>updateContent(k,e.target.value)} />
            </div>
          ))}
          <button className="admin-save" onClick={saveContent} disabled={loading}>Save Version Info</button>
        </div>

        <div className="admin-section">
          <div className="admin-section-title">Progress Bars</div>
          {progress.map(item => (
            <div className="pct-row" key={item.id}>
              <input className="form-input" type="text" value={item.name} onChange={e=>updateProgress(item.id,'name',e.target.value)} />
              <input className="form-input" type="number" value={item.percentage} min={0} max={100} onChange={e=>updateProgress(item.id,'percentage',e.target.value)} />
            </div>
          ))}
          <button className="admin-save" onClick={saveProgress} disabled={loading}>Save Progress</button>
        </div>

        <div className="admin-section">
          <div className="admin-section-title">Post Devlog Entry</div>
          <div className="form-group">
            <label className="form-label">Title</label>
            <input className="form-input" value={devlogTitle} onChange={e=>setDevlogTitle(e.target.value)} placeholder="Update title..." />
          </div>
          <div className="form-group">
            <label className="form-label">Content</label>
            <textarea className="form-input" rows={4} value={devlogContent} onChange={e=>setDevlogContent(e.target.value)} placeholder="What happened in development..." />
          </div>
          <button className="admin-save" onClick={postDevlog} disabled={loading}>Post Entry</button>
        </div>

        <div className="admin-section">
          <div className="admin-section-title">Subscribers ({subscribers.length})</div>
          <div style={{ maxHeight:'200px', overflowY:'auto' }}>
            {subscribers.length === 0
              ? <p style={{ fontSize:'.85rem', color:'var(--muted)' }}>No subscribers yet.</p>
              : subscribers.map(s => (
                <div key={s.id} style={{ fontSize:'.8rem', color:'var(--muted)', padding:'.25rem 0', borderBottom:'1px solid rgba(255,255,255,0.04)' }}>{s.email}</div>
              ))
            }
          </div>
        </div>
      </div>
      <Toast msg={toast} />
    </>
  );
}
