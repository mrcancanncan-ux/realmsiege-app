import { REGIONS } from '../data/gameData';
import { Link } from 'react-router-dom';
export default function Regions(){
  return(
    <div className="page"><div className="container section">
      <div style={{marginBottom:'.5rem'}}><Link to="/wiki" style={{color:'var(--muted)',fontSize:'.85rem',textDecoration:'none',fontFamily:'JetBrains Mono,monospace'}}>← Wiki</Link></div>
      <div className="section-label">// World Map</div>
      <h1 className="section-title">The Nine Regions of Ossmere</h1>
      <p className="section-intro">Realm Siege spans 25 levels across 9 distinct regions. Each region introduces new factions, new map layouts, and new environmental hazards.</p>
      <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
        {REGIONS.map((r)=>(
          <div key={r.id} className="card" style={{borderLeft:`3px solid ${r.color}`,borderRadius:'0 4px 4px 0',display:'grid',gridTemplateColumns:'80px 1fr',gap:'1.5rem',alignItems:'center'}}>
            <div style={{textAlign:'center'}}>
              <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.58rem',color:r.color,letterSpacing:'.15em',textTransform:'uppercase'}}>Levels</div>
              <div style={{fontFamily:'Cinzel,serif',fontSize:'1.2rem',fontWeight:700,color:r.color}}>{r.levels}</div>
            </div>
            <div>
              <div style={{fontFamily:'Cinzel,serif',fontSize:'1.1rem',fontWeight:700,color:'#fff',marginBottom:'.3rem'}}>{r.name}</div>
              <div style={{fontSize:'.88rem',color:'var(--muted)',lineHeight:1.6}}>{r.theme}</div>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
}
