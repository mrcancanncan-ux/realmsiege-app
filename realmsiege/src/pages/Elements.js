import { Link } from 'react-router-dom';

export default function Elements() {
  const counters = [
    { el:'Fire', color:'#ff4400', strong:['Nature','Ice','Undead'], weak:['Water','Earth'], penalty:'−75% DMG + mob gains +20% speed' },
    { el:'Water', color:'#0088ff', strong:['Fire','Earth','Mechanical'], weak:['Electric','Ice'], penalty:'−75% DMG + mob regen +1% HP/s' },
    { el:'Earth', color:'#886633', strong:['Electric','Mechanical'], weak:['Air','Water'], penalty:'−75% DMG + mob armor +50%' },
    { el:'Air', color:'#aaccff', strong:['Earth','Nature'], weak:['Electric','Ice'], penalty:'−75% DMG + mob pierce resist +40%' },
    { el:'Electric', color:'#ffee00', strong:['Water','Air','Mechanical'], weak:['Earth','Nature'], penalty:'−75% DMG + chain lightning self-damages tower' },
    { el:'Ice', color:'#88ddff', strong:['Air','Nature','Beast'], weak:['Fire','Dark'], penalty:'−75% DMG + slow effect reversed (+10% speed)' },
    { el:'Dark', color:'#aa44ff', strong:['Light','Celestial'], weak:['Holy','Light'], penalty:'−75% DMG + mob reflects 10% DMG to hero' },
    { el:'Light', color:'#ffdd44', strong:['Dark','Undead','Shadow'], weak:['Void','Dark'], penalty:'−75% DMG + mob cleanses all debuffs instantly' },
    { el:'Nature', color:'#44aa22', strong:['Water','Earth','Beast'], weak:['Fire','Ice'], penalty:'−75% DMG + poison converts to healing for mob' },
    { el:'Void', color:'#cc44ff', strong:['All (30% pierce)'], weak:['Light','Holy (−50%)'], penalty:'−50% DMG (partial immunity only)' },
  ];

  return (
    <div className="page">
      <div className="container section">
        <div style={{marginBottom:'.5rem'}}>
          <Link to="/wiki" style={{color:'var(--muted)',fontSize:'.85rem',textDecoration:'none',fontFamily:'JetBrains Mono,monospace'}}>← Wiki</Link>
        </div>
        <div className="section-label">// Game Mechanics</div>
        <h1 className="section-title">Elemental Counter System</h1>
        <p className="section-intro">The most important mechanic in Realm Siege. Mastering this is the difference between clearing Hard mode and losing on Wave 15.</p>

        <div style={{background:'rgba(220,38,38,0.05)',border:'1px solid rgba(220,38,38,0.2)',borderRadius:4,padding:'1.2rem',marginBottom:'2.5rem'}}>
          <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',letterSpacing:'.2em',color:'#f87171',marginBottom:'.4rem'}}>⚠ HARD MODE PENALTY</div>
          <p style={{fontSize:'.9rem',color:'var(--muted)'}}>On Hard mode, using the wrong element doesn't just deal reduced damage — it actively buffs the mob. The wrong-pick penalty listed below applies on Hard. Easy and Medium have reduced penalties (no penalty on Easy, ×1.5 on Medium).</p>
        </div>

        <div style={{overflowX:'auto'}}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Element</th>
                <th>Strong Against</th>
                <th>Weak Against</th>
                <th>Wrong-Pick Penalty (Hard)</th>
              </tr>
            </thead>
            <tbody>
              {counters.map(c => (
                <tr key={c.el}>
                  <td><span style={{fontFamily:'Cinzel,serif',fontWeight:700,color:c.color}}>{c.el}</span></td>
                  <td style={{color:'#4ade80'}}>{c.strong.join(', ')}</td>
                  <td style={{color:'#f87171'}}>{c.weak.join(', ')}</td>
                  <td style={{color:'var(--muted)',fontSize:'.85rem'}}>{c.penalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{marginTop:'3rem',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem'}}>
          <div className="card">
            <div className="card-title" style={{marginBottom:'1rem'}}>Tips for Hard Mode</div>
            <ul style={{display:'flex',flexDirection:'column',gap:'.6rem',listStyle:'none'}}>
              {[
                'Always check wave composition before building — mobs are previewed 2 waves ahead.',
                'Keep gold liquid to place counter towers when mob types change mid-wave.',
                'Void towers pierce 30% vs all elements — use them when unsure, but they deal lower overall damage.',
                'Multiple factions in one wave means you need multiple counter types on the field simultaneously.',
                'The Prism Tower fusion hits all 8 adjacent tiles — useful for mixed-faction waves.',
              ].map((tip,i) => (
                <li key={i} style={{fontSize:'.9rem',color:'var(--muted)',paddingLeft:'1.2rem',position:'relative'}}>
                  <span style={{position:'absolute',left:0,color:'var(--gold-dim)'}}>▸</span>{tip}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <div className="card-title" style={{marginBottom:'1rem'}}>Void Tower — Special Rules</div>
            <p style={{fontSize:'.9rem',color:'var(--muted)',lineHeight:1.6,marginBottom:'1rem'}}>Void towers are unique — they deal 30% True Damage pierce against all elements. This means they always deal at least 30% of their base damage regardless of mob resistance.</p>
            <p style={{fontSize:'.9rem',color:'var(--muted)',lineHeight:1.6}}>However, Light and Holy mobs reduce Void damage by 50%. Void towers are utility picks, not primary damage dealers. Use them for mixed-faction waves where you can't counter everything.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
