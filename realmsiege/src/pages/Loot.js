import{useState}from'react';
import{LOOT_TABLES,BOSSES}from'../data/gameData';
export default function Loot(){
const[tab,setTab]=useState('tables');
const[itemFind,setItemFind]=useState(0);
function adj(base){const p=parseFloat(base);return Math.min(100,p*(1+itemFind/100)).toFixed(1)+'%';}
return(<div className="page"><div className="container section">
<div className="section-label">// Loot Tables</div>
<h1 className="section-title">Drop Rates & Loot</h1>
<p className="section-intro">Every stage, every source, exact percentages. Use the calculator to see how Item Find % affects your drops.</p>
<div className="tabs" style={{marginBottom:'2rem'}}>
{['tables','bosses','calc'].map(t=><button key={t} className={`tab${tab===t?' active':''}`} onClick={()=>setTab(t)}>{t==='tables'?'Drop Tables':t==='bosses'?'Boss Drops':'Drop Calculator'}</button>)}
</div>
{tab==='tables'&&<div>
<div style={{background:'rgba(200,150,12,0.05)',border:'1px solid var(--gold-dim)',borderRadius:4,padding:'1rem',marginBottom:'1.8rem',fontSize:'.84rem',color:'var(--muted)'}}>
💡 <strong style={{color:'var(--text)'}}>Item Find %</strong> from accessories multiplies all drop chances. Blood Moon overrides all tables — minimum Legendary.
</div>
{LOOT_TABLES.map((table,i)=>(
<div key={i} className="card" style={{marginBottom:'1rem'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'.9rem'}}>
<div>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.58rem',color:'var(--gold)',letterSpacing:'.14em'}}>STAGE {table.stage} — {table.region}</div>
<div style={{fontFamily:'Cinzel,serif',fontSize:'.92rem',fontWeight:700,color:'#fff'}}>{table.source}</div>
</div>
{table.stage==='Blood Moon'&&<span className="badge br">Special Event</span>}
{table.stage==='Shadow Run'&&<span className="badge bp">Post-Prestige</span>}
</div>
<div style={{display:'flex',flexWrap:'wrap',gap:'.45rem'}}>
{table.drops.map((drop,j)=>(
<div key={j} style={{background:drop.color+'12',border:`1px solid ${drop.color}33`,borderRadius:2,padding:'.38rem .75rem',display:'flex',gap:'.55rem',alignItems:'center'}}>
<span style={{fontSize:'.8rem',color:'var(--text)'}}>{drop.item}</span>
<span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',color:drop.color}}>{drop.chance}</span>
</div>))}
</div>
</div>))}
</div>}
{tab==='bosses'&&<div className="g2">
{BOSSES.map(boss=>(
<div key={boss.level} className="card">
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'.45rem'}}>
<span className="badge bg">Level {boss.level} Boss</span>
<span className="badge bm">{boss.faction}</span>
</div>
<div className="card-title" style={{marginBottom:'.28rem'}}>{boss.name}</div>
<div style={{fontSize:'.8rem',color:'var(--muted)',marginBottom:'.7rem',fontStyle:'italic'}}>{boss.mechanics}</div>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.52rem',letterSpacing:'.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'.35rem'}}>Phase Abilities</div>
<div style={{fontSize:'.78rem',color:'var(--muted)',marginBottom:'.7rem'}}>
<div>P1: {boss.phase1}</div><div>P2: {boss.phase2}</div><div>P3: {boss.phase3}</div>
</div>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.52rem',letterSpacing:'.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'.35rem'}}>Drops</div>
<div style={{display:'flex',flexDirection:'column',gap:'.28rem',marginBottom:'.75rem'}}>
{boss.drops.map((drop,i)=><div key={i} style={{fontSize:'.8rem',color:'var(--text)',display:'flex',gap:'.35rem'}}><span style={{color:'var(--gold-dim)'}}>▸</span>{drop}</div>)}
</div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'.38rem',fontSize:'.76rem',marginBottom:'.7rem'}}>
<div><span style={{color:'var(--muted)'}}>Weak: </span><span style={{color:'#4ade80'}}>{boss.weaknesses}</span></div>
<div><span style={{color:'var(--muted)'}}>HP: </span><span style={{color:'var(--text)'}}>{boss.hp.toLocaleString()}</span></div>
<div style={{gridColumn:'1/-1'}}><span style={{color:'var(--muted)'}}>Region: </span><span style={{color:'var(--blue-lt)'}}>{boss.region}</span></div>
</div>
<div style={{borderTop:'1px solid var(--border)',paddingTop:'.7rem',fontSize:'.78rem',color:'var(--muted)',fontStyle:'italic',lineHeight:1.55}}>{boss.lore}</div>
</div>))}
</div>}
{tab==='calc'&&<div>
<div className="card" style={{marginBottom:'2rem'}}>
<div className="card-title" style={{marginBottom:'.9rem'}}>Item Find % Calculator</div>
<p style={{fontSize:'.88rem',color:'var(--muted)',marginBottom:'1.4rem'}}>Adjust your total Item Find % from accessories to see how drop chances change in real time.</p>
<div style={{display:'flex',alignItems:'center',gap:'1.4rem'}}>
<label className="form-label" style={{margin:0,whiteSpace:'nowrap'}}>Item Find %:</label>
<input type="range" min={0} max={200} value={itemFind} onChange={e=>setItemFind(Number(e.target.value))} style={{flex:1,accentColor:'var(--gold)'}}/>
<span style={{fontFamily:'JetBrains Mono,monospace',color:'var(--gold)',minWidth:48}}>+{itemFind}%</span>
</div>
</div>
{LOOT_TABLES.slice(0,6).map((table,i)=>(
<div key={i} className="card" style={{marginBottom:'1rem'}}>
<div style={{fontFamily:'Cinzel,serif',fontSize:'.9rem',fontWeight:700,color:'#fff',marginBottom:'.75rem'}}>Stage {table.stage} — {table.source}</div>
<div style={{display:'flex',flexWrap:'wrap',gap:'.45rem'}}>
{table.drops.map((drop,j)=>(
<div key={j} style={{background:drop.color+'12',border:`1px solid ${drop.color}33`,borderRadius:2,padding:'.38rem .75rem'}}>
<div style={{fontSize:'.76rem',color:'var(--text)',marginBottom:'.12rem'}}>{drop.item}</div>
<div style={{display:'flex',gap:'.38rem',alignItems:'center'}}>
<span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',color:'var(--muted)',textDecoration:'line-through'}}>{drop.chance}</span>
<span style={{color:'var(--gold-dim)'}}>→</span>
<span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',color:drop.color}}>{adj(drop.chance)}</span>
</div>
</div>))}
</div>
</div>))}
</div>}
</div></div>);}
