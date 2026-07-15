import{Link}from'react-router-dom';
const rifts=[
{type:'Fire Rift',spawns:'8–12 fire elementals, rapid spawn',counter:'Water tower within 2 tiles',reward:'180 gold + 1 Fire Rune drop',color:'#ff4400'},
{type:'Ice Rift',spawns:'6–10 frost crawlers, slow but armored',counter:'Fire tower within 2 tiles',reward:'150 gold + Freeze resistance item',color:'#88ddff'},
{type:'Shadow Rift',spawns:'10–15 wraiths, stealth on entry',counter:'Light tower within 2 tiles',reward:'200 gold + Shadow Essence drop',color:'#a855f7'},
{type:'Void Rift',spawns:'4–6 void stalkers, True DMG immune',counter:'Light tower within 2 tiles',reward:'250 gold + guaranteed Rare+ item',color:'#6600cc'},
{type:'Storm Rift',spawns:'12–18 wind sprites, extreme speed',counter:'Earth tower within 2 tiles',reward:'120 gold + 2 Souls',color:'#aaccff'},
{type:'Fungal Rift',spawns:'8–14 spore walkers, explode on death',counter:'Fire tower within 2 tiles',reward:'160 gold + Spore Codex page',color:'#22c55e'},
];
export default function Rifts(){return(<div className="page"><div className="container section">
<div style={{marginBottom:'.5rem'}}><Link to="/wiki" style={{color:'var(--muted)',fontSize:'.84rem',textDecoration:'none',fontFamily:'JetBrains Mono,monospace'}}>← Wiki</Link></div>
<div className="section-label">// Advanced System</div>
<h1 className="section-title">Elemental Rifts</h1>
<p className="section-intro">Random portals that tear open mid-wave. Not scheduled — players cannot predict them. You have 15 seconds to respond before the rift becomes a permanent problem.</p>
<div style={{background:'rgba(200,150,12,0.05)',border:'1px solid var(--gold-dim)',borderRadius:4,padding:'1.2rem',marginBottom:'2rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.58rem',letterSpacing:'.16em',color:'var(--gold)',marginBottom:'.4rem'}}>// Lore: Scars Opening</div>
<p style={{fontSize:'.88rem',color:'var(--muted)',lineHeight:1.62}}>Rifts open at places of old resonance damage — the same scars the Fungal Swarm grows from. The specific element of the Rift corresponds to the element of whatever battle caused the original scar. The creatures that pour through are returning to the place they last fought, confused and disoriented. Closing a Rift by placing a counter-element tower is healing the scar. The counter-frequency soothes the tear, and the elemental creatures can be guided back without violence. Aethon appreciates the precision.</p>
</div>
<div style={{background:'rgba(220,38,38,0.05)',border:'1px solid rgba(220,38,38,0.2)',borderRadius:4,padding:'1rem',marginBottom:'2rem',fontSize:'.86rem',color:'var(--muted)'}}>
⚠ If a Rift is NOT closed in 15 seconds, it stays open for the remainder of the wave, continuously spawning mobs at a reduced rate. On Hard from Level 16+, multiple Rifts can be open simultaneously.
</div>
<div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
{rifts.map(r=>(
<div key={r.type} className="card" style={{borderLeft:`3px solid ${r.color}`,borderRadius:'0 4px 4px 0'}}>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'1rem',alignItems:'start'}}>
<div><div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.52rem',color:r.color,letterSpacing:'.12em',textTransform:'uppercase',marginBottom:'.28rem'}}>Rift Type</div><div style={{fontFamily:'Cinzel,serif',fontSize:'.9rem',fontWeight:700,color:'#fff'}}>{r.type}</div></div>
<div><div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.52rem',color:'var(--muted)',letterSpacing:'.12em',textTransform:'uppercase',marginBottom:'.28rem'}}>Spawns</div><div style={{fontSize:'.84rem',color:'var(--text)'}}>{r.spawns}</div></div>
<div><div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.52rem',color:'var(--muted)',letterSpacing:'.12em',textTransform:'uppercase',marginBottom:'.28rem'}}>Counter</div><div style={{fontSize:'.84rem',color:'#4ade80'}}>{r.counter}</div></div>
<div><div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.52rem',color:'var(--muted)',letterSpacing:'.12em',textTransform:'uppercase',marginBottom:'.28rem'}}>Closing Reward</div><div style={{fontSize:'.84rem',color:'var(--gold)'}}>{r.reward}</div></div>
</div>
</div>))}
</div>
</div></div>);}
