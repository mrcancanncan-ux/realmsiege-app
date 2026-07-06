import { useEffect, useState } from 'react';
import { sb } from '../supabase';
import { useAuth } from '../AuthContext';

export default function Devlog() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, profile } = useAuth();
  const [commentInputs, setCommentInputs] = useState({});

  async function load() {
    const { data } = await sb.from('devlog_entries')
      .select('*, comments(id, content, created_at, user_id, profiles(username))')
      .order('created_at', { ascending: false });
    setEntries(data || []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function postComment(entryId) {
    if (!user) return;
    const content = commentInputs[entryId]?.trim();
    if (!content) return;
    await sb.from('comments').insert({ devlog_id: entryId, user_id: user.id, content });
    setCommentInputs(prev => ({ ...prev, [entryId]: '' }));
    load();
  }

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
  }

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label">// Development Log</div>
        <h1 className="section-title">Devlog</h1>
        <p className="section-intro">Raw, honest updates from development. No marketing, no spin — just what's actually happening.</p>

        {loading ? (
          <div className="loading-text"><div className="spinner" />Loading entries...</div>
        ) : entries.length === 0 ? (
          <div className="card" style={{textAlign:'center',padding:'3rem'}}><p style={{color:'var(--muted)'}}>No devlog entries yet. Check back soon.</p></div>
        ) : (
          <div>
            {entries.map(entry => (
              <div key={entry.id} className="devlog-entry">
                <div className="devlog-header">
                  <div>
                    <div className="devlog-date">{formatDate(entry.created_at)}</div>
                    <div className="devlog-title">{entry.title}</div>
                  </div>
                </div>
                <p style={{fontSize:'1rem',color:'var(--text)',lineHeight:1.7,marginBottom:'1.5rem'}}>{entry.content}</p>

                {/* COMMENTS */}
                <div style={{borderTop:'1px solid var(--border)',paddingTop:'1rem'}}>
                  <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'.8rem'}}>
                    {entry.comments?.length || 0} Comment{entry.comments?.length !== 1 ? 's' : ''}
                  </div>
                  {(entry.comments || []).map(comment => (
                    <div key={comment.id} className="comment">
                      <div className="comment-author">{comment.profiles?.username || 'Anonymous'} · {formatDate(comment.created_at)}</div>
                      <div className="comment-text">{comment.content}</div>
                    </div>
                  ))}
                  {user ? (
                    <div className="comment-form">
                      <input className="form-input" placeholder="Write a comment..." value={commentInputs[entry.id]||''} onChange={e=>setCommentInputs(prev=>({...prev,[entry.id]:e.target.value}))} onKeyDown={e=>e.key==='Enter'&&postComment(entry.id)} />
                      <button className="btn btn-secondary btn-sm" onClick={()=>postComment(entry.id)}>Post</button>
                    </div>
                  ) : (
                    <p style={{fontSize:'.85rem',color:'var(--muted)',marginTop:'.7rem'}}>
                      <span style={{color:'var(--gold)',cursor:'pointer'}} onClick={()=>document.querySelector('.nav-btn')?.click()}>Sign in</span> to leave a comment.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
