import{Link}from'react-router-dom';
const counters=[
{el:'Fire',color:'#ff4400',strong:['Nature','Ice','Undead'],weak:['Water','Earth'],penalty:'−75% DMG + mob gains +20% speed'},
{el:'Water',color:'#0088ff',strong:['Fire','Earth','Mechanical'],weak:['Electric','Ice'],penalty:'−75% DMG + mob regen +1% HP/s'},
{el:'Earth',color:'#886633',strong:['Electric','Mechanical'],weak:['Air','Water'],penalty:'−75% DMG + mob armor +50%'},
{el:'Air',color:'#aaccff',strong:['Earth','Nature'],weak:['Electric','Ice'],penalty:'−75% DMG + mob pierce resist +40%'},
{el:'Electric',color:'#ffee00',strong:['Water','Air','Mechanical'],weak:['Earth','Nature'],penalty:'−75% DMG + chain lightning self-damages tower'},
{el:'Ice',color:'#88ddff',strong:['Air','Nature','Beast'],weak:['Fire','Dark'],penalty:'−75% DMG + slow reversed (+10% speed)'},
{el:'Dark',color:'#aa44ff',strong:['Light','Celestial'],weak:['Holy','Light'],penalty:'−75% DMG + mob reflects 10% DMG to hero'},
{el:'Light',color:'#ffdd44',strong:['Dark','Undead','Shadow'],weak:['Void','Dark'],penalty:'−75% DMG + mob cleanses all debuffs instantly'},
{el:'Nature',color:'#44aa22',strong:['Water','Earth','Beast'],weak:['Fire','Ice'],penalty:'−75% DMG + poison converts to healing for mob'},
{el:'Void',color:'#cc44ff',strong:['All (30% pierce)'],weak:['Light','Holy (−50%)'],penalty:'−50% DMG (partial only)'},
];
export default function Elements(){return(<div className="page"><div className="container section">
<div style={{marginBottom:'.5rem'}}><Link to="/wiki" style={{color:'var(--muted)',fontSize:'.84rem',textDecoration:'none',fontFamily:'JetBrains Mono,monospace'}}>← Wiki</Link></div>
<div className="section-label">// Game Mechanics</div>
<h1 className="section-title">Elemental Counter System</h1>
<p className="section-intro">The most important mechanic in Realm Siege. Mastering this is the difference between clearing Hard mode and losing on Wave 15.</p>
<div style={{background:'rgba(220,38,38,0.05)',border:'1px solid rgba(220,38,38,0.2)',borderRadius:4,padding:'1.1rem',marginBottom:'2.5rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',letterSpacing:'.16em',color:'#f87171',marginBottom:'.38rem'}}>⚠ HARD MODE PENALTY</div>
<p style={{fontSize:'.86rem',color:'var(--muted)'}}>On Hard mode, wrong elements don't just deal reduced damage — they actively buff the mob. Easy has no penalty. Medium applies ×1.5 instead of ×2.5.</p>
</div>
<div style={{overflowX:'auto',marginBottom:'2rem'}}>
<table className="data-table">
<thead><tr><th>Element</th><th>Strong Against</th><th>Weak Against</th><th>Hard Mode Wrong-Pick Penalty</th></tr></thead>
<tbody>{counters.map(c=>(
<tr key={c.el}>
<td><span style={{fontFamily:'Cinzel,serif',fontWeight:700,color:c.color}}>{c.el}</span></td>
<td style={{color:'#4ade80'}}>{c.strong.join(', ')}</td>
<td style={{color:'#f87171'}}>{c.weak.join(', ')}</td>
<td style={{color:'var(--muted)',fontSize:'.8rem'}}>{c.penalty}</td>
</tr>))}</tbody>
</table>
</div>
<div className="g2">
<div className="card">
<div className="card-title" style={{marginBottom:'.9rem'}}>Hard Mode Tips</div>
<ul style={{display:'flex',flexDirection:'column',gap:'.55rem',listStyle:'none'}}>
{['Always check wave composition before building — mobs preview 2 waves ahead.','Keep gold liquid to place counter towers when faction changes mid-wave.','Void towers pierce 30% vs all — use on mixed-faction waves when unsure.','Multiple factions in one wave means multiple counter types simultaneously.','Light towers are the ONLY reliable counter to Shadow Court mobs.','The Prism Tower fusion hits all 8 adjacent tiles — ideal for mixed waves.'].map((tip,i)=>(
<li key={i} style={{fontSize:'.86rem',color:'var(--muted)',paddingLeft:'1.1rem',position:'relative'}}><span style={{position:'absolute',left:0,color:'var(--gold-dim)'}}>▸</span>{tip}</li>))}
</ul>
</div>
<div className="card">
<div className="card-title" style={{marginBottom:'.9rem'}}>Void Tower — Special Rules</div>
<p style={{fontSize:'.86rem',color:'var(--muted)',lineHeight:1.62,marginBottom:'1rem'}}>Void towers deal 30% True Damage pierce against all elements. They always deal at least 30% of base damage regardless of mob resistance.</p>
<p style={{fontSize:'.86rem',color:'var(--muted)',lineHeight:1.62,marginBottom:'1rem'}}>Light and Holy mobs reduce Void damage by 50%. Void towers are utility picks for mixed waves — not primary damage dealers.</p>
<div style={{background:'rgba(200,150,12,0.06)',border:'1px solid var(--gold-dim)',borderRadius:4,padding:'.75rem',fontSize:'.8rem',color:'var(--gold)'}}>Lore: Varek learned to weaponize the tears in planar membrane. He regrets it. He uses them anyway.</div>
</div>
</div>
</div></div>);}
