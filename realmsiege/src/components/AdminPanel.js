import{useState,useEffect}from'react';
import{sb}from'../supabase';
export default function AdminPanel({onClose}){
const[content,setContent]=useState({});
const[progress,setProgress]=useState([]);
const[dlTitle,setDlTitle]=useState('');
const[dlContent,setDlContent]=useState('');
const[subs,setSubs]=useState([]);
const[toast,setToast]=useState('');
function showToast(m){setToast(m);setTimeout(()=>setToast(''),2500);}
useEffect(()=>{loadAll();},[]);
async function loadAll(){
const[c,p,s]=await Promise.all([sb.from('site_content').select('*'),sb.from('progress_items').select('*').order('sort_order'),sb.from('subscribers').select('*').order('created_at',{ascending:false})]);
const co={};(c.data||[]).forEach(r=>co[r.id]=r.value);setContent(co);setProgress(p.data||[]);setSubs(s.data||[]);}
async function saveContent(){
for(const k of['version','next_update','next_update_desc','stage','stage_desc','countdown_target']){
await sb.from('site_content').upsert({id:k,value:content[k]||'',updated_at:new Date().toISOString()});}
showToast('✓ Saved!');}
async function saveProgress(){
for(const item of progress){await sb.from('progress_items').update({name:item.name,percentage:item.percentage,updated_at:new Date().toISOString()}).eq('id',item.id);}
showToast('✓ Progress saved!');}
async function postDevlog(){
if(!dlTitle.trim()||!dlContent.trim()){showToast('Fill both fields.');return;}
await sb.from('devlog_entries').insert({title:dlTitle,content:dlContent});
setDlTitle('');setDlContent('');showToast('✓ Posted!');}
return(<>
<div className="admin-panel open">
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'1.4rem'}}>
    <span style={{fontFamily:'Cinzel,serif',color:'var(--gold)',fontWeight:700}}>⚙ Admin</span>
    <button onClick={onClose} style={{background:'none',border:'none',color:'var(--muted)',cursor:'pointer',fontSize:'1rem'}}>✕</button>
  </div>
  <div className="admin-sec">
    <div className="admin-sec-title">Version & Status</div>
    {[['version','Version'],['next_update','Next Update'],['next_update_desc','Update Description'],['stage','Stage'],['stage_desc','Stage Description'],['countdown_target','Countdown Target (ISO date)']].map(([k,label])=>(
      <div className="form-group" key={k}>
        <label className="form-label">{label}</label>
        <input className="form-input" value={content[k]||''} onChange={e=>setContent(p=>({...p,[k]:e.target.value}))}/>
      </div>
    ))}
    <button className="admin-save" onClick={saveContent}>Save</button>
  </div>
  <div className="admin-sec">
    <div className="admin-sec-title">Progress Bars</div>
    {progress.map(item=>(
      <div className="pct-row" key={item.id}>
        <input className="form-input" type="text" value={item.name} onChange={e=>setProgress(p=>p.map(i=>i.id===item.id?{...i,name:e.target.value}:i))}/>
        <input className="form-input" type="number" value={item.percentage} min={0} max={100} onChange={e=>setProgress(p=>p.map(i=>i.id===item.id?{...i,percentage:Math.max(0,Math.min(100,parseInt(e.target.value)||0))}:i))}/>
      </div>
    ))}
    <button className="admin-save" onClick={saveProgress}>Save Progress</button>
  </div>
  <div className="admin-sec">
    <div className="admin-sec-title">Post Devlog</div>
    <div className="form-group"><label className="form-label">Title</label><input className="form-input" value={dlTitle} onChange={e=>setDlTitle(e.target.value)}/></div>
    <div className="form-group"><label className="form-label">Content</label><textarea className="form-input" rows={4} value={dlContent} onChange={e=>setDlContent(e.target.value)}/></div>
    <button className="admin-save" onClick={postDevlog}>Post</button>
  </div>
  <div className="admin-sec">
    <div className="admin-sec-title">Subscribers ({subs.length})</div>
    <div style={{maxHeight:'180px',overflowY:'auto'}}>
      {subs.map(s=><div key={s.id} style={{fontSize:'.76rem',color:'var(--muted)',padding:'.2rem 0',borderBottom:'1px solid rgba(255,255,255,0.04)'}}>{s.email}</div>)}
    </div>
  </div>
</div>
{toast&&<div className="toast show">{toast}</div>}
</>);}
