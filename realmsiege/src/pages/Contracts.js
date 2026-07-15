import{Link}from'react-router-dom';
const contracts=[
{name:'Iron Oath',penalty:'No tower can be placed in upper half of map',reward:'Gold income ×3.0 entire level',difficulty:'Hard'},
{name:'Soul Tithe',penalty:'Every mob kill costs 1 Soul instead of awarding gold',reward:'All item drops upgrade 1 rarity tier',difficulty:'Hard'},
{name:'Rushing Tide',penalty:'All mobs move 50% faster this level',reward:'Every mob kill grants 1 Soul',difficulty:'Medium'},
{name:'Colossus Pact',penalty:'Wave 50 boss HP ×300%',reward:'Boss chest has 5 extra loot rolls',difficulty:'Medium'},
{name:'Blind Faith',penalty:'Mob resistances hidden — Bestiary unavailable this level',reward:'Skill Points ×2 from all sources',difficulty:'Hard'},
{name:'Blood Price',penalty:'Hero cannot use abilities for first 20 waves',reward:'Hero gains permanent +30% DMG rest of run',difficulty:'Hard'},
{name:'Twin Curse',penalty:'Two random towers lose 50% effectiveness permanently',reward:'+2 Build Slots this level',difficulty:'Medium'},
{name:'Void Bargain',penalty:'Every 10 waves, 1 random tower is destroyed with no refund',reward:'All Void and Dark towers deal ×2 DMG',difficulty:'Hard'},
{name:'Forsaken Ground',penalty:'Special tiles provide no bonus this level',reward:'Every special tile drops 200 gold instead',difficulty:'Medium'},
{name:'The Long Game',penalty:'Waves 1–25 have 2× normal mob count',reward:'Waves 26–50 have 50% fewer mobs',difficulty:'Hard'},
];
const dc={'Hard':'br','Medium':'bg'};
export default function Contracts(){return(<div className="page"><div className="container section">
<div style={{marginBottom:'.5rem'}}><Link to="/wiki" style={{color:'var(--muted)',fontSize:'.84rem',textDecoration:'none',fontFamily:'JetBrains Mono,monospace'}}>← Wiki</Link></div>
<div className="section-label">// Game System</div>
<h1 className="section-title">Ancient Contracts</h1>
<p className="section-intro">Binding risk/reward deals offered at the start of each level. On Hard mode, two are mandatory. Read them carefully. The penalties are real. So are the rewards.</p>
<div style={{background:'rgba(200,150,12,0.05)',border:'1px solid var(--gold-dim)',borderRadius:4,padding:'1.2rem',marginBottom:'2rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.58rem',letterSpacing:'.16em',color:'var(--gold)',marginBottom:'.4rem'}}>// Lore: The Old Agreements</div>
<p style={{fontSize:'.88rem',color:'var(--muted)',lineHeight:1.62}}>Ancient Contracts are literal agreements made with Aethon. Between cycles, as Aethon heals the realm, it encodes certain arrangements into the resonance fabric of specific locations. These arrangements are offers — Aethon cannot speak in language, but it can create situations of profound imbalance that heroes with Vael'dri blood can feel the moment they enter a new level. The mandatory Contracts on Hard mode exist because Aethon is more insistent in later cycles. It has seen the patterns. It knows which behaviors lead to failure.</p>
</div>
<div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
{contracts.map(c=>(
<div key={c.name} className="card">
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'.75rem'}}>
<div style={{fontFamily:'Cinzel,serif',fontSize:'1rem',fontWeight:700,color:'#fff'}}>{c.name}</div>
<span className={`badge ${dc[c.difficulty]||'bm'}`}>{c.difficulty}</span>
</div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
<div style={{background:'rgba(220,38,38,0.06)',border:'1px solid rgba(220,38,38,0.2)',borderRadius:2,padding:'.75rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.52rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#f87171',marginBottom:'.35rem'}}>Penalty</div>
<div style={{fontSize:'.84rem',color:'var(--text)'}}>{c.penalty}</div>
</div>
<div style={{background:'rgba(22,163,74,0.06)',border:'1px solid rgba(22,163,74,0.2)',borderRadius:2,padding:'.75rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.52rem',letterSpacing:'.14em',textTransform:'uppercase',color:'#4ade80',marginBottom:'.35rem'}}>Reward</div>
<div style={{fontSize:'.84rem',color:'var(--text)'}}>{c.reward}</div>
</div>
</div>
</div>))}
</div>
</div></div>);}
