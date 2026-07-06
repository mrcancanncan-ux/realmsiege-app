import { Link } from 'react-router-dom';

export default function HowToPlay() {
  const steps = [
    { num:'01', title:'Choose Your Difficulty', desc:'Start with Easy to learn the systems. Medium is the intended experience. Hard mode is brutally difficult — mob resistances deal 75% reduced damage if you use the wrong element, and you must sign 2 Ancient Contracts per level.' },
    { num:'02', title:'Place Your Towers', desc:'Click any green tile to place a tower. Towers cost 50 gold to start. You begin with 150 gold. Always check the upcoming wave\'s mob types before placing — fire towers are useless against water mobs.' },
    { num:'03', title:'Learn the Counter System', desc:'This is the core of Realm Siege. Every element has a counter. Using the wrong tower type means 75% reduced damage and a bonus buff to that mob. Check the Bestiary or Counter Guide before each wave composition changes.' },
    { num:'04', title:'Manage Your Economy', desc:'Gold is intentionally scarce on Hard mode. Don\'t spend everything immediately. Keep 200+ gold liquid for emergency placements. Tower upgrades cost gold too — prioritize counters over upgrades early.' },
    { num:'05', title:'Level Your Hero', desc:'Your hero earns XP from kills and wave clears. Every level gives a skill point for the global skill tree. Your hero\'s signature ability can turn around a wave — save it for emergencies, not easy early waves.' },
    { num:'06', title:'Watch for Elemental Rifts', desc:'Random portals appear mid-wave. You have 15 seconds to place a counter-element tower within 2 tiles of the rift. If you close it, you get a reward. If you don\'t, it spawns mobs for the rest of the wave.' },
    { num:'07', title:'Fuse Adjacent Towers', desc:'Place two compatible element towers next to each other to trigger a Fusion Prompt. Fused towers have dramatically higher stats and unique abilities. They cost 150 gold to fuse and the fusion cannot be undone.' },
    { num:'08', title:'Survive the Boss Wave', desc:'Wave 50 of every level is a boss fight. Bosses have 3 phases, each with new abilities. They have an Enrage Timer of 3 minutes — if you don\'t kill them in time, they become much stronger. Save your hero abilities for the boss.' },
    { num:'09', title:'Collect Loot', desc:'Mobs drop items based on their type and your level. Boss chests give the best drops. Always check the drop table for your current stage in the Loot Tables section to know what to expect.' },
    { num:'10', title:'Prestige When Ready', desc:'After beating Level 25 Stage 50, you enter the Prestige screen. Your skill tree resets, but you keep permanent upgrades from the Prestige Tree. Mobs get harder each prestige. So do the rewards.' },
  ];

  return (
    <div className="page">
      <div className="container section">
        <div style={{marginBottom:'.5rem'}}>
          <Link to="/wiki" style={{color:'var(--muted)',fontSize:'.85rem',textDecoration:'none',fontFamily:'JetBrains Mono,monospace'}}>← Wiki</Link>
        </div>
        <div className="section-label">// Beginner Guide</div>
        <h1 className="section-title">How to Play</h1>
        <p className="section-intro">Realm Siege is intentionally difficult. This guide covers the fundamentals — reading it before your first run will save you hours of frustration.</p>

        <div style={{background:'rgba(220,38,38,0.05)',border:'1px solid rgba(220,38,38,0.2)',borderRadius:4,padding:'1.2rem',marginBottom:'3rem'}}>
          <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',letterSpacing:'.2em',color:'#f87171',marginBottom:'.4rem'}}>⚠ DIFFICULTY WARNING</div>
          <p style={{fontSize:'.9rem',color:'var(--muted)'}}>Realm Siege is designed to be extra difficult. The counter system, Ancient Contracts, and scarce economy are intentional design decisions — not bugs to be fixed. Easy mode exists for learning. Hard mode is the intended endgame experience.</p>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
          {steps.map(step => (
            <div key={step.num} style={{display:'grid',gridTemplateColumns:'60px 1fr',gap:'1.5rem',alignItems:'start'}}>
              <div style={{fontFamily:'Cinzel,serif',fontSize:'2rem',fontWeight:900,color:'var(--gold-dim)',lineHeight:1,textAlign:'right'}}>{step.num}</div>
              <div className="card">
                <div className="card-title" style={{marginBottom:'.5rem'}}>{step.title}</div>
                <p style={{fontSize:'.95rem',color:'var(--muted)',lineHeight:1.6}}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop:'3rem',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'1rem'}}>
          <Link to="/towers" style={{textDecoration:'none'}}><div className="card" style={{textAlign:'center'}}><div style={{fontSize:'1.5rem',marginBottom:'.5rem'}}>⚗️</div><div className="card-title">Tower Guide</div></div></Link>
          <Link to="/bestiary" style={{textDecoration:'none'}}><div className="card" style={{textAlign:'center'}}><div style={{fontSize:'1.5rem',marginBottom:'.5rem'}}>👾</div><div className="card-title">Bestiary</div></div></Link>
          <Link to="/loot" style={{textDecoration:'none'}}><div className="card" style={{textAlign:'center'}}><div style={{fontSize:'1.5rem',marginBottom:'.5rem'}}>📦</div><div className="card-title">Loot Tables</div></div></Link>
        </div>
      </div>
    </div>
  );
}
