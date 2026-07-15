import{Link}from'react-router-dom';
import{REGIONS}from'../data/gameData';
export default function Regions(){return(<div className="page"><div className="container section">
<div style={{marginBottom:'.5rem'}}><Link to="/wiki" style={{color:'var(--muted)',fontSize:'.84rem',textDecoration:'none',fontFamily:'JetBrains Mono,monospace'}}>← Wiki</Link></div>
<div className="section-label">// World Map</div>
<h1 className="section-title">The Nine Regions of Ossmere</h1>
<p className="section-intro">Realm Siege spans 25 levels across 9 distinct regions. Each introduces new factions, map layouts, and environmental hazards.</p>
<div style={{display:'flex',flexDirection:'column',gap:'.9rem'}}>
{REGIONS.map(r=>(
<div key={r.id} className="card" style={{borderLeft:`3px solid ${r.color}`,borderRadius:'0 4px 4px 0',display:'grid',gridTemplateColumns:'78px 1fr',gap:'1.4rem',alignItems:'center'}}>
<div style={{textAlign:'center'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.55rem',color:r.color,letterSpacing:'.14em',textTransform:'uppercase'}}>Levels</div>
<div style={{fontFamily:'Cinzel,serif',fontSize:'1.15rem',fontWeight:700,color:r.color}}>{r.levels}</div>
</div>
<div>
<div style={{fontFamily:'Cinzel,serif',fontSize:'1.05rem',fontWeight:700,color:'#fff',marginBottom:'.28rem'}}>{r.name}</div>
<div style={{fontSize:'.86rem',color:'var(--muted)',lineHeight:1.58}}>{r.theme}</div>
</div>
</div>))}
</div>
</div></div>);}
