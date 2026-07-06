import { useState } from 'react';
import { LOOT_TABLES, BOSSES } from '../data/gameData';

export default function Loot() {
  const [itemFind, setItemFind] = useState(0);
  const [tab, setTab] = useState('tables');

  function adjustedChance(base) {
    const pct = parseFloat(base.replace('%',''));
    const adjusted = Math.min(100, pct * (1 + itemFind/100));
    return adjusted.toFixed(1) + '%';
  }

  const RARITY_COLORS = { Common:'#aaa', Uncommon:'#44cc44', Rare:'#4488ff', Epic:'#aa44ff', Legendary:'#ff8800', Mythic:'#ff4444', Artifact:'#c8960c' };

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label">// Loot Tables</div>
        <h1 className="section-title">Drop Rates & Loot</h1>
        <p className="section-intro">Every stage, every source, every percentage. Use the calculator to see how Item Find % affects your drops.</p>

        <div className="tabs" style={{marginBottom:'2rem'}}>
          <button className={`tab${tab==='tables'?' active':''}`} onClick={()=>setTab('tables')}>Drop Tables</button>
          <button className={`tab${tab==='bosses'?' active':''}`} onClick={()=>setTab('bosses')}>Boss Drops</button>
          <button className={`tab${tab==='calculator'?' active':''}`} onClick={()=>setTab('calculator')}>Drop Calculator</button>
        </div>

        {tab === 'tables' && (
          <div>
            <div style={{background:'rgba(200,150,12,0.05)',border:'1px solid var(--gold-dim)',borderRadius:4,padding:'1rem',marginBottom:'2rem',fontSize:'.85rem',color:'var(--muted)'}}>
              💡 <strong style={{color:'var(--text)'}}>Item Find %</strong> from accessories multiplies all drop chances. Blood Moon drops ignore normal tables entirely — all drops are Legendary minimum.
            </div>
            {LOOT_TABLES.map((table, i) => (
              <div key={i} className="card" style={{marginBottom:'1rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'1rem'}}>
                  <div>
                    <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',color:'var(--gold)',letterSpacing:'.15em'}}>STAGE {table.stage}</div>
                    <div style={{fontFamily:'Cinzel,serif',fontSize:'1rem',fontWeight:700,color:'#fff'}}>{table.source}</div>
                  </div>
                  {table.stage === 'Blood Moon' && <span className="badge badge-red">Special Event</span>}
                </div>
                <div style={{display:'flex',flexWrap:'wrap',gap:'.5rem'}}>
                  {table.drops.map((drop, j) => {
                    const rarityName = drop.item.split(' ')[0];
                    const color = RARITY_COLORS[rarityName] || '#aaa';
                    return (
                      <div key={j} style={{background:color+'12',border:`1px solid ${color}33`,borderRadius:2,padding:'.4rem .8rem',display:'flex',gap:'.6rem',alignItems:'center'}}>
                        <span style={{fontSize:'.85rem',color:'var(--text)'}}>{drop.item}</span>
                        <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.7rem',color}}>{drop.chance}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'bosses' && (
          <div className="grid-2">
            {BOSSES.map(boss => (
              <div key={boss.level} className="card">
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'.5rem'}}>
                  <span className="badge badge-gold">Level {boss.level} Boss</span>
                  <span className="badge badge-muted">{boss.faction}</span>
                </div>
                <div className="card-title" style={{marginBottom:'.3rem'}}>{boss.name}</div>
                <div style={{fontSize:'.85rem',color:'var(--muted)',marginBottom:'1rem'}}>{boss.mechanics}</div>
                <div className="section-label" style={{marginBottom:'.5rem'}}>Drops</div>
                <div style={{display:'flex',flexDirection:'column',gap:'.3rem',marginBottom:'1rem'}}>
                  {boss.drops.map((drop, i) => (
                    <div key={i} style={{fontSize:'.85rem',color:'var(--text)',display:'flex',alignItems:'center',gap:'.4rem'}}>
                      <span style={{color:'var(--gold-dim)'}}>▸</span>{drop}
                    </div>
                  ))}
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'.5rem',fontSize:'.8rem'}}>
                  <div><span style={{color:'var(--muted)'}}>Weak: </span><span style={{color:'#4ade80'}}>{boss.weaknesses}</span></div>
                  <div><span style={{color:'var(--muted)'}}>HP: </span><span style={{color:'var(--text)'}}>{boss.hp.toLocaleString()}</span></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'calculator' && (
          <div>
            <div className="card" style={{marginBottom:'2rem'}}>
              <div className="card-title" style={{marginBottom:'1rem'}}>Item Find % Calculator</div>
              <p style={{fontSize:'.9rem',color:'var(--muted)',marginBottom:'1.5rem'}}>Adjust your total Item Find % from accessories to see how drop chances change.</p>
              <div style={{display:'flex',alignItems:'center',gap:'1.5rem',marginBottom:'1rem'}}>
                <label className="form-label" style={{margin:0}}>Item Find %:</label>
                <input type="range" min={0} max={200} value={itemFind} onChange={e=>setItemFind(Number(e.target.value))} style={{flex:1,accentColor:'var(--gold)'}} />
                <span style={{fontFamily:'JetBrains Mono,monospace',color:'var(--gold)',minWidth:50}}>+{itemFind}%</span>
              </div>
            </div>
            {LOOT_TABLES.slice(0,4).map((table, i) => (
              <div key={i} className="card" style={{marginBottom:'1rem'}}>
                <div style={{fontFamily:'Cinzel,serif',fontSize:'1rem',fontWeight:700,color:'#fff',marginBottom:'.8rem'}}>Stage {table.stage} — {table.source}</div>
                <div style={{display:'flex',flexWrap:'wrap',gap:'.5rem'}}>
                  {table.drops.map((drop, j) => {
                    const rarityName = drop.item.split(' ')[0];
                    const color = RARITY_COLORS[rarityName] || '#aaa';
                    return (
                      <div key={j} style={{background:color+'12',border:`1px solid ${color}33`,borderRadius:2,padding:'.4rem .8rem'}}>
                        <div style={{fontSize:'.8rem',color:'var(--text)',marginBottom:'.15rem'}}>{drop.item}</div>
                        <div style={{display:'flex',gap:'.4rem',alignItems:'center'}}>
                          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',color:'var(--muted)',textDecoration:'line-through'}}>{drop.chance}</span>
                          <span style={{color:'var(--gold-dim)'}}>→</span>
                          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.7rem',color}}>{adjustedChance(drop.chance)}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
