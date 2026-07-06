import { Link } from 'react-router-dom';

export default function Wiki() {
  const sections = [
    { icon:'🏰', title:'Getting Started', desc:'New to Realm Siege? Start here. Learn the basics of tower placement, mob paths, and the economy.', link:'/wiki/how-to-play', badge:'Beginner' },
    { icon:'⚗️', title:'Tower Database', desc:'All 35 towers — 10 base elements and 25 fusion combinations. Stats, counters, upgrade tracks.', link:'/towers', badge:'Reference' },
    { icon:'👾', title:'Monster Bestiary', desc:'200+ mob types across 8 factions. Resistances, weaknesses, lore, and drop tables.', link:'/bestiary', badge:'Reference' },
    { icon:'⚔️', title:'Item Database', desc:'Every item rarity, stat range, unique effect, and where to find it.', link:'/items', badge:'Reference' },
    { icon:'📦', title:'Loot Tables', desc:'Exact drop rates per stage, boss chest contents, and the drop calculator.', link:'/loot', badge:'Reference' },
    { icon:'🧙', title:'Hero Guides', desc:'All 12 heroes, their abilities, bond bonuses, and which builds they support.', link:'/heroes', badge:'Guide' },
    { icon:'🌳', title:'Skill Tree Overview', desc:'All 8 branches of the 1,000+ node skill tree. Key gate nodes and mastery unlocks.', link:'/wiki/skill-tree', badge:'Guide' },
    { icon:'🔮', title:'Elemental Counter System', desc:'The core of Hard mode difficulty. Which elements counter which mobs and the penalties for getting it wrong.', link:'/wiki/elements', badge:'Guide' },
    { icon:'📜', title:'Ancient Contracts', desc:'All available contracts, their penalties, rewards, and which are worth taking on Hard mode.', link:'/wiki/contracts', badge:'Guide' },
    { icon:'♾️', title:'Prestige System', desc:'How prestige works, point scaling, the prestige tree, and what carries over on reset.', link:'/wiki/prestige', badge:'Advanced' },
    { icon:'🩸', title:'Blood Moon Events', desc:'How Blood Moons trigger, what to expect, and how to prepare for one.', link:'/wiki/blood-moon', badge:'Advanced' },
    { icon:'💰', title:'Steam Market Guide', desc:'How tradeable items work, what makes them valuable, and how to read provably fair seeds.', link:'/wiki/steam-market', badge:'Economy' },
  ];

  const badgeClass = { Beginner:'badge-green', Reference:'badge-blue', Guide:'badge-gold', Advanced:'badge-red', Economy:'badge-purple' };

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label">// Wiki</div>
        <h1 className="section-title">Realm Siege Wiki</h1>
        <p className="section-intro">Everything you need to know about the game. Updated as development progresses — some sections are placeholders until those systems are built.</p>

        <div style={{background:'rgba(78,154,241,0.05)',border:'1px solid rgba(78,154,241,0.2)',borderRadius:4,padding:'1rem',marginBottom:'2.5rem',fontSize:'.85rem',color:'var(--muted)'}}>
          ℹ️ <strong style={{color:'var(--text)'}}>Note:</strong> This wiki documents the planned game design. Systems marked as "In Development" may change before release.
        </div>

        <div className="grid-auto">
          {sections.map(s => (
            <Link key={s.title} to={s.link} style={{textDecoration:'none'}}>
              <div className="card" style={{height:'100%'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'.8rem'}}>
                  <span style={{fontSize:'1.8rem'}}>{s.icon}</span>
                  <span className={`badge ${badgeClass[s.badge]||'badge-muted'}`}>{s.badge}</span>
                </div>
                <div className="card-title" style={{marginBottom:'.4rem'}}>{s.title}</div>
                <div className="card-sub">{s.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
