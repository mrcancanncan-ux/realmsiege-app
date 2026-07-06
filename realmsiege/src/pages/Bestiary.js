import { useState } from 'react';
import { MOBS } from '../data/gameData';

const FACTIONS = ['All','Undead Legion','Elemental Kin','Beast Horde','Demon Host','Mechanical','Shadow Court','Celestial Guard','Fungal Swarm'];

export default function Bestiary() {
  const [faction, setFaction] = useState('All');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = MOBS.filter(m => {
    if (faction !== 'All' && m.faction !== faction) return false;
    if (search && !m.name.toLowerCase().includes(search.toLowerCase()) && !m.faction.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const factionColors = {
    'Undead Legion': '#8b5cf6',
    'Elemental Kin': '#f97316',
    'Beast Horde': '#84cc16',
    'Demon Host': '#ef4444',
    'Mechanical': '#6b7280',
    'Shadow Court': '#a855f7',
    'Celestial Guard': '#fbbf24',
    'Fungal Swarm': '#22c55e',
  };

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label">// Bestiary</div>
        <h1 className="section-title">Monster Database</h1>
        <p className="section-intro">200+ mob types across 8 factions. Resistances are hidden until you kill enough of each type — filling your Codex reveals everything.</p>

        <div style={{background:'rgba(200,150,12,0.05)',border:'1px solid var(--gold-dim)',borderRadius:4,padding:'1.2rem',marginBottom:'2rem'}}>
          <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',letterSpacing:'.2em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'.4rem'}}>// Codex System</div>
          <p style={{fontSize:'.9rem',color:'var(--muted)'}}>Kill 10 of any mob to reveal its resistances. Kill 100 to unlock a permanent global bonus against that type across all future runs. Complete all entries for a faction to unlock the Faction Mastery bonus.</p>
        </div>

        <div style={{display:'flex',gap:'1rem',marginBottom:'1.5rem',flexWrap:'wrap',alignItems:'center'}}>
          <div className="search-bar" style={{flex:1,minWidth:200,margin:0}}>
            <span className="search-icon">🔍</span>
            <input className="search-input" placeholder="Search monsters..." value={search} onChange={e=>setSearch(e.target.value)} />
          </div>
        </div>

        <div className="tabs" style={{marginBottom:'2rem',flexWrap:'wrap'}}>
          {FACTIONS.map(f => (
            <button key={f} className={`tab${faction===f?' active':''}`} onClick={()=>setFaction(f)}>{f}</button>
          ))}
        </div>

        <div className="grid-auto">
          {filtered.map(mob => (
            <div key={mob.id} className="card" style={{cursor:'pointer',borderColor:selected?.id===mob.id?'var(--gold)':'var(--border)'}} onClick={()=>setSelected(selected?.id===mob.id?null:mob)}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'.5rem'}}>
                <span className="badge" style={{background:factionColors[mob.faction]+'22',color:factionColors[mob.faction],border:`1px solid ${factionColors[mob.faction]}44`,fontSize:'.55rem'}}>{mob.faction}</span>
                <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',color:'var(--muted)'}}>HP: {mob.hp.toLocaleString()}</span>
              </div>
              <div className="card-title" style={{marginBottom:'.4rem'}}>{mob.name}</div>
              <div style={{fontSize:'.85rem',color:'var(--muted)',marginBottom:'.5rem'}}>Speed: {mob.speed}</div>
              <div style={{fontSize:'.85rem',color:'var(--green)'}}>Weak: {mob.weakness}</div>

              {selected?.id === mob.id && (
                <div style={{marginTop:'1rem',paddingTop:'1rem',borderTop:'1px solid var(--border)'}}>
                  <p style={{fontSize:'.9rem',color:'var(--text)',fontStyle:'italic',marginBottom:'1rem',lineHeight:1.5}}>{mob.lore}</p>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'.5rem',marginBottom:'.8rem'}}>
                    {Object.entries(mob.resistances).map(([el,val]) => (
                      <div key={el} style={{display:'flex',justifyContent:'space-between',fontSize:'.8rem',padding:'.3rem .5rem',background:'rgba(255,255,255,0.03)',borderRadius:2}}>
                        <span style={{color:'var(--muted)',textTransform:'capitalize'}}>{el}</span>
                        <span style={{color:val>0?'#4ade80':'#f87171',fontFamily:'JetBrains Mono,monospace'}}>{val>0?'+':''}{val}%</span>
                      </div>
                    ))}
                  </div>
                  <div style={{fontSize:'.85rem',color:'var(--gold)'}}>Drop: {mob.drop} <span style={{color:'var(--muted)'}}>({mob.dropRate})</span></div>
                </div>
              )}
            </div>
          ))}
        </div>
        {filtered.length === 0 && <p style={{color:'var(--muted)',textAlign:'center',padding:'3rem'}}>No monsters match your filter.</p>}
      </div>
    </div>
  );
}
