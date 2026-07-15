import{Link}from'react-router-dom';
const steps=[
{n:'01',t:'Choose Your Difficulty',d:'Easy to learn systems. Medium is the intended experience. Hard is brutal — elemental counter errors deal 75% reduced damage and buff mobs, gold is scarce, and you must sign 2 Ancient Contracts per level.'},
{n:'02',t:'Place Your Towers',d:'Click any green tile to place a tower. Always check the upcoming wave composition before building — fire towers are near-useless against water mobs on Hard mode.'},
{n:'03',t:'Master the Counter System',d:'Every element has a counter. Using the wrong tower type on Hard mode means 75% reduced damage AND a buff to that mob. Check the Bestiary or Elemental Counter guide before each new faction appears.'},
{n:'04',t:'Manage Your Economy',d:'Gold is intentionally scarce on Hard. Keep 200+ gold liquid at all times for emergency placements. Never spend everything on upgrades before a wave you have not scouted.'},
{n:'05',t:'Level Your Hero',d:'Your hero earns XP from kills and wave clears. Every level is a skill point for the global skill tree. Save your hero ability for emergencies — not easy early waves.'},
{n:'06',t:'Watch for Elemental Rifts',d:'Random portals appear mid-wave without warning. You have 15 seconds to place a counter-element tower within 2 tiles. Close it for a reward. Fail and it spawns mobs until the wave ends.'},
{n:'07',t:'Fuse Adjacent Towers',d:'Place two compatible element towers adjacent to trigger a Fusion Prompt. Fused towers have dramatically higher stats and unique abilities. Fusion costs 150 gold and is permanent for the run.'},
{n:'08',t:'Sign Ancient Contracts Wisely',d:'Every level offers Contracts — binding risk/reward deals. On Hard, two are mandatory. Read them carefully. The penalties are real. So are the rewards.'},
{n:'09',t:'Survive the Boss Wave',d:'Wave 50 is a boss with 3 phases and an Enrage Timer of 3 minutes. Save hero abilities for the boss. Do not let adds die near The Devourer. Kill Magnar splits within 10 seconds.'},
{n:'10',t:'Prestige When Ready',d:'Beating Level 25 Wave 50 triggers Prestige. Your skill tree resets but the Prestige Tree grows permanently. Mobs get harder every prestige. The rewards scale with them.'},
];
export default function HowToPlay(){return(<div className="page"><div className="container section">
<div style={{marginBottom:'.5rem'}}><Link to="/wiki" style={{color:'var(--muted)',fontSize:'.84rem',textDecoration:'none',fontFamily:'JetBrains Mono,monospace'}}>← Wiki</Link></div>
<div className="section-label">// Beginner Guide</div>
<h1 className="section-title">How to Play</h1>
<p className="section-intro">Realm Siege is intentionally difficult. Reading this before your first run will save you hours of frustration.</p>
<div style={{background:'rgba(220,38,38,0.05)',border:'1px solid rgba(220,38,38,0.2)',borderRadius:4,padding:'1.1rem',marginBottom:'3rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',letterSpacing:'.16em',color:'#f87171',marginBottom:'.38rem'}}>⚠ DIFFICULTY WARNING</div>
<p style={{fontSize:'.86rem',color:'var(--muted)'}}>Realm Siege is designed to be extra difficult. The counter system, Ancient Contracts, and scarce economy are intentional. Easy mode exists for learning. Hard mode is the intended endgame.</p>
</div>
<div style={{display:'flex',flexDirection:'column',gap:'1.4rem'}}>
{steps.map(step=>(
<div key={step.n} style={{display:'grid',gridTemplateColumns:'58px 1fr',gap:'1.4rem',alignItems:'start'}}>
<div style={{fontFamily:'Cinzel,serif',fontSize:'1.7rem',fontWeight:900,color:'var(--gold-dim)',lineHeight:1,textAlign:'right'}}>{step.n}</div>
<div className="card"><div className="card-title" style={{marginBottom:'.45rem'}}>{step.t}</div><p style={{fontSize:'.9rem',color:'var(--muted)',lineHeight:1.62}}>{step.d}</p></div>
</div>))}
</div>
<div style={{marginTop:'3rem',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem'}}>
{[['⚗️','Tower Guide','/towers'],['👾','Bestiary','/bestiary'],['🌍','Counter System','/wiki/elements']].map(([icon,label,path])=>(
<Link key={path} to={path} style={{textDecoration:'none'}}><div className="card" style={{textAlign:'center'}}><div style={{fontSize:'1.4rem',marginBottom:'.45rem'}}>{icon}</div><div className="card-title">{label}</div></div></Link>))}
</div>
</div></div>);}
