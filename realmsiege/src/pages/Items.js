import { useState } from 'react';
import { ITEMS } from '../data/gameData';

const RARITIES = ['All','Rare','Epic','Legendary','Mythic','Artifact'];
const TYPES = ['All','Weapon','Armor','Accessory','Tower Rune'];

const RARITY_COLORS = {
  Common: '#aaaaaa', Uncommon: '#44cc44', Rare: '#4488ff',
  Epic: '#aa44ff', Legendary: '#ff8800', Mythic: '#ff4444', Artifact: '#c8960c',
};

export default function Items() {
  const [rarity, setRarity] = useState('All');
  const [type, setType] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = ITEMS.filter(i => {
    if (rarity !== 'All' && i.rarity !== rarity) return false;
    if (type !== 'All' && i.type !== type) return false;
    if (search && !i.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label">// Item Database</div>
        <h1 className="section-title">Items & Equipment</h1>
        <p className="section-intro">From Common drops to Artifact-tier game-changers. Steam Market tradeable items are Rare and above on Medium/Hard.</p>

        {/* RARITY GUIDE */}
        <div style={{display:'flex',gap:'.5rem',flexWrap:'wrap',marginBottom:'2rem'}}>
          {Object.entries(RARITY_COLORS).map(([r,c]) => (
            <span key={r} className="badge" style={{background:c+'18',color:c,border:`1px solid ${c}44`}}>{r}</span>
          ))}
        </div>

        {/* CRAFTING INFO */}
        <div style={{background:'var(--deep)',border:'1px solid var(--border)',borderRadius:4,padding:'1.5rem',marginBottom:'2rem'}}>
          <div className="section-label" style={{marginBottom:'.8rem'}}>// Forge Crafting</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'.5rem'}}>
            {[
              ['3 Common','1 Uncommon','100%'],
              ['3 Uncommon','1 Rare','80%'],
              ['3 Rare','1 Epic','60%'],
              ['3 Epic','1 Legendary','40%'],
              ['3 Legendary','1 Mythic','20%'],
              ['3 Mythic','1 Artifact','8%'],
            ].map(([input,output,chance]) => (
              <div key={input} style={{display:'flex',alignItems:'center',gap:'.5rem',padding:'.5rem',background:'rgba(255,255,255,0.02)',borderRadius:2}}>
                <span style={{fontSize:'.8rem',color:'var(--muted)'}}>{input}</span>
                <span style={{color:'var(--gold-dim)'}}>→</span>
                <span style={{fontSize:'.8rem',color:'var(--text)'}}>{output}</span>
                <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',color:'var(--gold)',marginLeft:'auto'}}>{chance}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FILTERS */}
        <div style={{display:'flex',gap:'1rem',marginBottom:'1.5rem',flexWrap:'wrap',alignItems:'center'}}>
          <div className="search-bar" style={{flex:1,minWidth:200,margin:0}}>
            <span className="search-icon">🔍</span>
            <input className="search-input" placeholder="Search items..." value={search} onChange={e=>setSearch(e.target.value)} />
          </div>
        </div>
        <div className="tabs"><span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',color:'var(--muted)',padding:'.7rem',alignSelf:'center'}}>Rarity:</span>{RARITIES.map(r=><button key={r} className={`tab${rarity===r?' active':''}`} onClick={()=>setRarity(r)}>{r}</button>)}</div>
        <div className="tabs" style={{marginBottom:'2rem'}}><span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',color:'var(--muted)',padding:'.7rem',alignSelf:'center'}}>Type:</span>{TYPES.map(t=><button key={t} className={`tab${type===t?' active':''}`} onClick={()=>setType(t)}>{t}</button>)}</div>

        <div className="grid-auto">
          {filtered.map(item => {
            const color = RARITY_COLORS[item.rarity] || '#fff';
            return (
              <div key={item.id} className="card" style={{borderColor:color+'44'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'.5rem'}}>
                  <span className="badge" style={{background:color+'18',color,border:`1px solid ${color}44`,fontSize:'.55rem'}}>{item.rarity}</span>
                  <span className="badge badge-muted" style={{fontSize:'.55rem'}}>{item.type}</span>
                </div>
                <div className="card-title" style={{color,marginBottom:'.6rem'}}>{item.name}</div>
                <div style={{display:'flex',flexDirection:'column',gap:'.2rem',marginBottom:'.7rem'}}>
                  {item.stats.map((s,i) => (
                    <div key={i} style={{fontSize:'.8rem',color:'var(--text)',display:'flex',alignItems:'center',gap:'.4rem'}}>
                      <span style={{color:'var(--gold-dim)'}}>+</span>{s}
                    </div>
                  ))}
                </div>
                {item.unique && (
                  <div style={{background:'rgba(200,150,12,0.06)',border:'1px solid var(--gold-dim)',borderRadius:2,padding:'.5rem .7rem',marginBottom:'.7rem',fontSize:'.8rem',color:'var(--gold)'}}>
                    ✦ {item.unique}
                  </div>
                )}
                <div style={{fontSize:'.8rem',color:'var(--muted)',fontStyle:'italic'}}>Drop: {item.drop}</div>
              </div>
            );
          })}
        </div>
        {filtered.length === 0 && <p style={{color:'var(--muted)',textAlign:'center',padding:'3rem'}}>No items match your filter.</p>}
      </div>
    </div>
  );
}
