import{useState}from'react';
import{TOWERS}from'../data/gameData';
const ELS=['All','Fire','Water','Earth','Air','Electric','Ice','Dark','Light','Nature','Void'];
const BASE=['Fire','Water','Earth','Air','Electric','Ice','Dark','Light','Nature','Void'];
export default function Towers(){
const[filter,setFilter]=useState('All');
const[tier,setTier]=useState('all');
const[search,setSearch]=useState('');
const[sel,setSel]=useState(null);
const[fA,setFA]=useState('');
const[fB,setFB]=useState('');
const filtered=TOWERS.filter(t=>{
if(tier!=='all'&&t.tier!==tier)return false;
if(filter!=='All'&&!t.element.includes(filter))return false;
if(search&&!t.name.toLowerCase().includes(search.toLowerCase()))return false;
return true;});
const fusion=fA&&fB&&fA!==fB?TOWERS.find(t=>t.tier==='fusion'&&t.element.includes(fA)&&t.element.includes(fB)):null;
return(<div className="page"><div className="container section">
<div className="section-label">// Tower Database</div>
<h1 className="section-title">Elemental Towers</h1>
<p className="section-intro">10 base towers, 25 fusion combinations. Place two compatible adjacent towers to trigger a Fusion Prompt. Master the counter system to survive Hard mode.</p>
<div style={{background:'var(--deep)',border:'1px solid var(--border)',borderRadius:4,padding:'1.8rem',marginBottom:'2.5rem'}}>
<div className="section-label" style={{marginBottom:'1rem'}}>// Fusion Calculator</div>
<p style={{fontSize:'.88rem',color:'var(--muted)',marginBottom:'1.4rem'}}>Select two base elements to see their fusion result.</p>
<div style={{display:'grid',gridTemplateColumns:'1fr 36px 1fr',gap:'1rem',alignItems:'start',marginBottom:'1.4rem'}}>
<div><div className="form-label" style={{marginBottom:'.55rem'}}>Element A</div>
<div style={{display:'flex',flexWrap:'wrap',gap:'.32rem'}}>{BASE.map(el=><button key={el} onClick={()=>setFA(el===fA?'':el)} style={{background:fA===el?'rgba(200,150,12,0.2)':'rgba(255,255,255,0.04)',border:`1px solid ${fA===el?'var(--gold)':'var(--border)'}`,color:fA===el?'var(--gold)':'var(--muted)',padding:'.28rem .6rem',borderRadius:2,cursor:'pointer',fontFamily:'Cinzel,serif',fontSize:'.58rem',letterSpacing:'.08em',transition:'all .2s'}}>{el}</button>)}</div></div>
<div style={{textAlign:'center',fontFamily:'Cinzel,serif',fontSize:'1.4rem',color:'var(--gold-dim)',paddingTop:'1.7rem'}}>+</div>
<div><div className="form-label" style={{marginBottom:'.55rem'}}>Element B</div>
<div style={{display:'flex',flexWrap:'wrap',gap:'.32rem'}}>{BASE.map(el=><button key={el} onClick={()=>setFB(el===fB?'':el)} style={{background:fB===el?'rgba(200,150,12,0.2)':'rgba(255,255,255,0.04)',border:`1px solid ${fB===el?'var(--gold)':'var(--border)'}`,color:fB===el?'var(--gold)':'var(--muted)',padding:'.28rem .6rem',borderRadius:2,cursor:'pointer',fontFamily:'Cinzel,serif',fontSize:'.58rem',letterSpacing:'.08em',transition:'all .2s'}}>{el}</button>)}</div></div>
</div>
<div style={{background:fusion?'rgba(200,150,12,0.06)':'rgba(255,255,255,0.02)',border:`1px solid ${fusion?'var(--gold-dim)':'var(--border)'}`,borderRadius:4,padding:'1.1rem',minHeight:72}}>
{!fA||!fB?<p style={{color:'var(--muted)',fontSize:'.88rem'}}>Select two elements above.</p>
:fA===fB?<p style={{color:'var(--red)',fontSize:'.88rem'}}>Cannot fuse the same element.</p>
:fusion?<div>
<div style={{fontFamily:'Cinzel,serif',fontSize:'1.15rem',fontWeight:700,color:'var(--gold)',marginBottom:'.35rem'}}>{fusion.name}</div>
<div style={{fontSize:'.8rem',color:'var(--muted)',marginBottom:'.45rem'}}>{fusion.recipe}</div>
<div style={{fontSize:'.9rem',color:'var(--text)',marginBottom:'.35rem'}}>{fusion.effect}</div>
{fusion.weakness&&<div style={{fontSize:'.8rem',color:'#f87171'}}>⚠ Weak: {fusion.weakness}</div>}
<div style={{marginTop:'.65rem',fontSize:'.8rem',color:'var(--muted)',fontStyle:'italic',borderTop:'1px solid var(--border)',paddingTop:'.65rem'}}>{fusion.lore}</div>
</div>:<p style={{color:'var(--muted)',fontSize:'.88rem'}}>No fusion for {fA} + {fB}.</p>}
</div>
</div>
<div style={{display:'flex',gap:'1rem',marginBottom:'1rem',flexWrap:'wrap',alignItems:'center'}}>
<div className="search-bar" style={{flex:1,minWidth:200,margin:0}}><span className="search-icon">🔍</span><input className="search-input" placeholder="Search towers..." value={search} onChange={e=>setSearch(e.target.value)}/></div>
<div style={{display:'flex',gap:'.35rem'}}>{['all','base','fusion'].map(t=><button key={t} onClick={()=>setTier(t)} className={`badge ${tier===t?'bg':'bm'}`} style={{cursor:'pointer',padding:'.38rem .85rem'}}>{t==='all'?'All':t==='base'?'Base (10)':'Fusion (25)'}</button>)}</div>
</div>
<div className="tabs">{ELS.map(el=><button key={el} className={`tab${filter===el?' active':''}`} onClick={()=>setFilter(el)}>{el}</button>)}</div>
<div className="ga">
{filtered.map(tower=>(
<div key={tower.id} className="card" style={{cursor:'pointer',borderColor:sel?.id===tower.id?'var(--gold)':'var(--border)'}} onClick={()=>setSel(sel?.id===tower.id?null:tower)}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'.45rem'}}>
<div style={{width:13,height:13,borderRadius:2,background:tower.color,flexShrink:0,marginTop:3}}/>
<span className={`badge ${tower.tier==='fusion'?'bp':'bb'}`}>{tower.tier}</span>
</div>
<div className="card-title" style={{marginBottom:'.22rem'}}>{tower.name}</div>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.56rem',color:'var(--gold)',letterSpacing:'.1em',marginBottom:'.4rem'}}>{tower.element}</div>
<div style={{fontSize:'.8rem',color:'var(--muted)',marginBottom:'.35rem'}}>{tower.effect}</div>
{tower.weakness&&<div style={{fontSize:'.76rem',color:'#f87171'}}>⚠ {tower.weakness}</div>}
{sel?.id===tower.id&&<div style={{marginTop:'.75rem',paddingTop:'.75rem',borderTop:'1px solid var(--border)'}}>
{tower.tier==='base'&&tower.upgrades&&<div style={{marginBottom:'.65rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.52rem',letterSpacing:'.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'.35rem'}}>Upgrade Tracks</div>
{tower.upgrades.map((u,i)=><div key={i} style={{fontSize:'.78rem',color:'var(--text)',marginBottom:'.18rem',display:'flex',gap:'.35rem'}}><span style={{color:'var(--gold-dim)'}}>{['A','B','C'][i]}</span>{u}</div>)}
</div>}
{tower.tier==='fusion'&&tower.recipe&&<div style={{fontSize:'.8rem',color:'var(--muted)',marginBottom:'.45rem'}}>Recipe: <span style={{color:'var(--text)'}}>{tower.recipe}</span></div>}
<div style={{fontSize:'.78rem',color:'var(--muted)',fontStyle:'italic',lineHeight:1.58}}>{tower.lore}</div>
</div>}
</div>))}
</div>
{filtered.length===0&&<p style={{color:'var(--muted)',textAlign:'center',padding:'3rem'}}>No towers match.</p>}
</div></div>);}
