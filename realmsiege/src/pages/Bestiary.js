import{useState}from'react';
import{MOBS}from'../data/gameData';
const FACTIONS=['All','Undead Legion','Elemental Kin','Beast Horde','Demon Host','Mechanical','Shadow Court','Celestial Guard','Fungal Swarm'];
const FC={'Undead Legion':'#8b5cf6','Elemental Kin':'#f97316','Beast Horde':'#84cc16','Demon Host':'#ef4444','Mechanical':'#6b7280','Shadow Court':'#a855f7','Celestial Guard':'#fbbf24','Fungal Swarm':'#22c55e'};
export default function Bestiary(){
const[faction,setFaction]=useState('All');
const[search,setSearch]=useState('');
const[sel,setSel]=useState(null);
const filtered=MOBS.filter(m=>{
if(faction!=='All'&&m.faction!==faction)return false;
if(search&&!m.name.toLowerCase().includes(search.toLowerCase())&&!m.faction.toLowerCase().includes(search.toLowerCase()))return false;
return true;});
return(<div className="page"><div className="container section">
<div className="section-label">// Bestiary</div>
<h1 className="section-title">Monster Database</h1>
<p className="section-intro">40+ mob types across 8 factions. Kill 10 to reveal resistances. Kill 250 to unlock permanent bonuses against that type across all future runs.</p>
<div style={{background:'rgba(200,150,12,0.05)',border:'1px solid var(--gold-dim)',borderRadius:4,padding:'1.1rem',marginBottom:'1.8rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.58rem',letterSpacing:'.18em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'.4rem'}}>// Codex System</div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))',gap:'.7rem',marginTop:'.4rem'}}>
{[['1st kill','Mob name, faction, basic stats'],['10 kills','Elemental resistances revealed'],['25 kills','CC immunities + lore'],['50 kills','Drop table revealed'],['100 kills','Exact drop rates'],['250 kills','Permanent bonus active']].map(([k,v])=>(
<div key={k} style={{display:'flex',gap:'.55rem',alignItems:'flex-start'}}>
<span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.56rem',color:'var(--gold)',flexShrink:0,marginTop:'.18rem'}}>{k}</span>
<span style={{fontSize:'.8rem',color:'var(--muted)'}}>{v}</span>
</div>))}
</div>
</div>
<div style={{display:'flex',gap:'1rem',marginBottom:'1rem',flexWrap:'wrap',alignItems:'center'}}>
<div className="search-bar" style={{flex:1,minWidth:200,margin:0}}><span className="search-icon">🔍</span><input className="search-input" placeholder="Search monsters..." value={search} onChange={e=>setSearch(e.target.value)}/></div>
</div>
<div className="tabs" style={{flexWrap:'wrap'}}>{FACTIONS.map(f=><button key={f} className={`tab${faction===f?' active':''}`} onClick={()=>setFaction(f)}>{f}</button>)}</div>
<div className="ga">
{filtered.map(mob=>{const col=FC[mob.faction]||'#aaa';return(
<div key={mob.id} className="card" style={{cursor:'pointer',borderColor:sel?.id===mob.id?col:'var(--border)'}} onClick={()=>setSel(sel?.id===mob.id?null:mob)}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'.45rem'}}>
<span className="badge" style={{background:col+'20',color:col,border:`1px solid ${col}44`,fontSize:'.52rem'}}>{mob.faction}</span>
<span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.56rem',color:'var(--muted)'}}>HP {mob.hp.toLocaleString()}</span>
</div>
<div className="card-title" style={{marginBottom:'.28rem'}}>{mob.name}</div>
<div style={{display:'flex',gap:'.35rem',marginBottom:'.38rem',flexWrap:'wrap'}}>
<span className="badge bm">{mob.type}</span>
<span className="badge bm">{mob.speed}</span>
{mob.region&&<span className="badge bb" style={{fontSize:'.5rem'}}>{mob.region}</span>}
</div>
<div style={{fontSize:'.8rem',color:'#4ade80'}}>Weak: {mob.weakness}</div>
{sel?.id===mob.id&&<div style={{marginTop:'.75rem',paddingTop:'.75rem',borderTop:'1px solid var(--border)'}}>
<p style={{fontSize:'.86rem',color:'var(--text)',fontStyle:'italic',marginBottom:'.75rem',lineHeight:1.58}}>{mob.lore}</p>
{Object.keys(mob.resistances).length>0&&<div style={{marginBottom:'.65rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.52rem',letterSpacing:'.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'.35rem'}}>Resistances</div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'.28rem'}}>
{Object.entries(mob.resistances).map(([el,val])=>typeof val==='boolean'?
<div key={el} style={{fontSize:'.76rem',padding:'.22rem .45rem',background:'rgba(255,255,255,0.03)',borderRadius:2,color:'#4ade80'}}>{el}: immune</div>:
<div key={el} style={{display:'flex',justifyContent:'space-between',fontSize:'.76rem',padding:'.22rem .45rem',background:'rgba(255,255,255,0.03)',borderRadius:2}}>
<span style={{color:'var(--muted)',textTransform:'capitalize'}}>{el}</span>
<span style={{color:val>0?'#4ade80':'#f87171',fontFamily:'JetBrains Mono,monospace'}}>{val>0?'+':''}{val}%</span>
</div>)}
</div>
</div>}
<div style={{fontSize:'.8rem',color:'var(--gold)'}}>Drop: {mob.drop} <span style={{color:'var(--muted)'}}>({mob.dropRate})</span></div>
</div>}
</div>);})}
</div>
{filtered.length===0&&<p style={{color:'var(--muted)',textAlign:'center',padding:'3rem'}}>No monsters match.</p>}
</div></div>);}
