import{Link}from'react-router-dom';
const S=[
{icon:'🏰',title:'Getting Started',desc:'New to Realm Siege? Learn the basics of tower placement, mob paths, economy, and the counter system.',link:'/wiki/how-to-play',badge:'Beginner',bc:'bgr'},
{icon:'⚗️',title:'Tower Database',desc:'All 35 towers — 10 base elements and 25 fusions. Stats, counters, upgrade tracks, lore.',link:'/towers',badge:'Reference',bc:'bb'},
{icon:'👾',title:'Monster Bestiary',desc:'40+ mob types across 8 factions. Resistances, weaknesses, lore, drop tables.',link:'/bestiary',badge:'Reference',bc:'bb'},
{icon:'⚔️',title:'Item Database',desc:'Every item rarity, stat range, unique effect, and where to find it.',link:'/items',badge:'Reference',bc:'bb'},
{icon:'📦',title:'Loot Tables',desc:'Exact drop rates per stage, boss chest contents, and the Item Find % calculator.',link:'/loot',badge:'Reference',bc:'bb'},
{icon:'🧙',title:'Hero Guides',desc:'All 12 heroes, their abilities, bond bonuses, lore, and optimal builds.',link:'/heroes',badge:'Guide',bc:'bg'},
{icon:'🌍',title:'Elemental Counter System',desc:'The core of Hard mode difficulty. Which elements counter which mobs and what happens when you get it wrong.',link:'/wiki/elements',badge:'Guide',bc:'bg'},
{icon:'📜',title:'Ancient Contracts',desc:'All contracts, their penalties, rewards, and which are worth taking on Hard mode.',link:'/wiki/contracts',badge:'Guide',bc:'bg'},
{icon:'♾️',title:'Prestige System',desc:'How prestige works, point scaling, the permanent tree, and what carries over.',link:'/wiki/prestige',badge:'Advanced',bc:'br'},
{icon:'🩸',title:'Blood Moon Events',desc:'How Blood Moons trigger, what to prepare, and how to maximize loot.',link:'/wiki/blood-moon',badge:'Advanced',bc:'br'},
{icon:'🌀',title:'Elemental Rifts',desc:'Rift types, counter-element strategies, and closing rewards.',link:'/wiki/rifts',badge:'Advanced',bc:'br'},
{icon:'💰',title:'Steam Market Guide',desc:'How tradeable items work, what makes them valuable, and provably fair seeds.',link:'/wiki/steam-market',badge:'Economy',bc:'bp'},
{icon:'📖',title:'World Lore',desc:'The full deep lore of Ossmere — Aethon, The Watcher, the cycle, all faction histories.',link:'/lore',badge:'Lore',bc:'bg'},
{icon:'🗺️',title:'Region Guide',desc:'All 9 regions of Ossmere — Concord Vale to Glimmering Fault.',link:'/wiki/regions',badge:'Guide',bc:'bg'},
];
export default function Wiki(){return(<div className="page"><div className="container section">
<div className="section-label">// Wiki</div>
<h1 className="section-title">Realm Siege Wiki</h1>
<p className="section-intro">Everything you need to know about Ossmere. Updated as development progresses.</p>
<div style={{background:'rgba(78,154,241,0.05)',border:'1px solid rgba(78,154,241,0.2)',borderRadius:4,padding:'1rem',marginBottom:'2.5rem',fontSize:'.84rem',color:'var(--muted)'}}>
ℹ️ <strong style={{color:'var(--text)'}}>Note:</strong> This wiki documents planned game design. Systems marked In Development may change before release.
</div>
<div className="ga">
{S.map(s=>(
<Link key={s.title} to={s.link} style={{textDecoration:'none'}}>
<div className="card" style={{height:'100%'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'.75rem'}}>
<span style={{fontSize:'1.6rem'}}>{s.icon}</span>
<span className={`badge ${s.bc}`}>{s.badge}</span>
</div>
<div className="card-title" style={{marginBottom:'.38rem'}}>{s.title}</div>
<div className="card-sub">{s.desc}</div>
</div>
</Link>))}
</div>
</div></div>);}
