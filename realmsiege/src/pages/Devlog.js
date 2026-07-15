import{useEffect,useState}from'react';
import{sb}from'../supabase';
import{useAuth}from'../AuthContext';
export default function Devlog(){
const[entries,setEntries]=useState([]);
const[loading,setLoading]=useState(true);
const{user}=useAuth();
const[inputs,setInputs]=useState({});
async function load(){
const{data}=await sb.from('devlog_entries').select('*, comments(id,content,created_at,user_id,profiles(username))').order('created_at',{ascending:false});
setEntries(data||[]);setLoading(false);}
useEffect(()=>{load();},[]);
async function postComment(id){
if(!user)return;
const content=inputs[id]?.trim();if(!content)return;
await sb.from('comments').insert({devlog_id:id,user_id:user.id,content});
setInputs(p=>({...p,[id]:''}));load();}
function fmt(iso){return new Date(iso).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});}
return(<div className="page"><div className="container section">
<div className="section-label">// Development Log</div>
<h1 className="section-title">Devlog</h1>
<p className="section-intro">Raw, honest updates from development. No marketing, no spin — just what's actually happening in Ossmere.</p>
{loading?<div className="loading"><div className="spinner"/>Loading...</div>
:entries.length===0?<div className="card" style={{textAlign:'center',padding:'3rem'}}><p style={{color:'var(--muted)'}}>No entries yet. Check back soon.</p></div>
:entries.map(entry=>(
<div key={entry.id} className="devlog-entry">
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'.45rem'}}>
<div><div className="devlog-date">{fmt(entry.created_at)}</div><div className="devlog-title">{entry.title}</div></div>
</div>
<p style={{fontSize:'.92rem',color:'var(--text)',lineHeight:1.75,marginBottom:'1.4rem'}}>{entry.content}</p>
<div style={{borderTop:'1px solid var(--border)',paddingTop:'.9rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.56rem',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'.65rem'}}>{entry.comments?.length||0} Comment{entry.comments?.length!==1?'s':''}</div>
{(entry.comments||[]).map(c=>(
<div key={c.id} className="comment">
<div className="comment-author">{c.profiles?.username||'Anonymous'} · {fmt(c.created_at)}</div>
<div className="comment-text">{c.content}</div>
</div>))}
{user?<div className="comment-form">
<input className="form-input" placeholder="Write a comment..." value={inputs[entry.id]||''} onChange={e=>setInputs(p=>({...p,[entry.id]:e.target.value}))} onKeyDown={e=>e.key==='Enter'&&postComment(entry.id)}/>
<button className="btn btn-s btn-sm" onClick={()=>postComment(entry.id)}>Post</button>
</div>:<p style={{fontSize:'.8rem',color:'var(--muted)',marginTop:'.65rem'}}>Sign in to leave a comment.</p>}
</div>
</div>))}
</div></div>);}
