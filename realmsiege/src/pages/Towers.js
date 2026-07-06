import { useState } from 'react';
import { TOWERS } from '../data/gameData';

const ELEMENTS = ['All','Fire','Water','Earth','Air','Electric','Ice','Dark','Light','Nature','Void'];

export default function Towers() {
  const [filter, setFilter] = useState('All');
  const [tier, setTier] = useState('all');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [fusionA, setFusionA] = useState('');
  const [fusionB, setFusionB] = useState('');

  const filtered = TOWERS.filter(t => {
    if (tier !== 'all' && t.tier !== tier) return false;
    if (filter !== 'All' && !t.element.includes(filter)) return false;
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.element.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const BASE_ELEMENTS = ['Fire','Water','Earth','Air','Electric','Ice','Dark','Light','Nature','Void'];

  function getFusion() {
    if (!fusionA || !fusionB || fusionA === fusionB) return null;
    return TOWERS.find(t => t.tier === 'fusion' && t.element.includes(fusionA) && t.element.includes(fusionB));
  }

  const fusionResult = getFusion();

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label">// Tower Database</div>
        <h1 className="section-title">Elemental Towers</h1>
        <p className="section-intro">10 base towers, 25 fusion combinations. Master the counter system to survive Hard mode.</p>

        {/* FUSION CALCULATOR */}
        <div style={{background:'var(--deep)',border:'1px solid var(--border)',borderRadius:4,padding:'2rem',marginBottom:'3rem'}}>
          <div className="section-label" style={{marginBottom:'1rem'}}>// Fusion Calculator</div>
          <p style={{fontSize:'.9rem',color:'var(--muted)',marginBottom:'1.5rem'}}>Select two base elements to see their fusion result.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr auto 1fr',gap:'1rem',alignItems:'center',marginBottom:'1.5rem'}}>
            <div>
              <div className="form-label">Element A</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'.4rem'}}>
                {BASE_ELEMENTS.map(el => (
                  <button key={el} onClick={() => setFusionA(el === fusionA ? '' : el)}
                    style={{background:fusionA===el?'rgba(200,150,12,0.2)':'rgba(255,255,255,0.04)',border:`1px solid ${fusionA===el?'var(--gold)':'var(--border)'}`,color:fusionA===el?'var(--gold)':'var(--muted)',padding:'.3rem .7rem',borderRadius:2,cursor:'pointer',fontFamily:'Cinzel,serif',fontSize:'.65rem',letterSpacing:'.1em',transition:'all .2s'}}>
                    {el}
                  </button>
                ))}
              </div>
            </div>
            <div style={{textAlign:'center',fontFamily:'Cinzel,serif',fontSize:'1.5rem',color:'var(--gold-dim)'}}>+</div>
            <div>
              <div className="form-label">Element B</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'.4rem'}}>
                {BASE_ELEMENTS.map(el => (
                  <button key={el} onClick={() => setFusionB(el === fusionB ? '' : el)}
                    style={{background:fusionB===el?'rgba(200,150,12,0.2)':'rgba(255,255,255,0.04)',border:`1px solid ${fusionB===el?'var(--gold)':'var(--border)'}`,color:fusionB===el?'var(--gold)':'var(--muted)',padding:'.3rem .7rem',borderRadius:2,cursor:'pointer',fontFamily:'Cinzel,serif',fontSize:'.65rem',letterSpacing:'.1em',transition:'all .2s'}}>
                    {el}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div style={{background:fusionResult?'rgba(200,150,12,0.06)':'rgba(255,255,255,0.02)',border:`1px solid ${fusionResult?'var(--gold-dim)':'var(--border)'}`,borderRadius:4,padding:'1.2rem',minHeight:80}}>
            {!fusionA || !fusionB ? (
              <p style={{color:'var(--muted)',fontSize:'.9rem'}}>Select two elements to see the fusion result.</p>
            ) : fusionA === fusionB ? (
              <p style={{color:'var(--red)',fontSize:'.9rem'}}>Cannot fuse the same element.</p>
            ) : fusionResult ? (
              <div>
                <div style={{fontFamily:'Cinzel,serif',fontSize:'1.2rem',fontWeight:700,color:'var(--gold)',marginBottom:'.5rem'}}>{fusionResult.name}</div>
                <div style={{fontSize:'.85rem',color:'var(--muted)',marginBottom:'.4rem'}}>{fusionA} + {fusionB} Fusion</div>
                <div style={{fontSize:'.95rem',color:'var(--text)'}}>{fusionResult.effect}</div>
                {fusionResult.weakness && <div style={{fontSize:'.85rem',color:'var(--red)',marginTop:'.4rem'}}>⚠ Weak against: {fusionResult.weakness}</div>}
              </div>
            ) : (
              <p style={{color:'var(--muted)',fontSize:'.9rem'}}>No fusion found for {fusionA} + {fusionB}.</p>
            )}
          </div>
        </div>

        {/* FILTERS */}
        <div style={{display:'flex',gap:'1rem',marginBottom:'1.5rem',flexWrap:'wrap',alignItems:'center'}}>
          <div className="search-bar" style={{flex:1,minWidth:200,margin:0}}>
            <span className="search-icon">🔍</span>
            <input className="search-input" placeholder="Search towers..." value={search} onChange={e=>setSearch(e.target.value)} />
          </div>
          <div style={{display:'flex',gap:'.4rem'}}>
            {['all','base','fusion'].map(t => (
              <button key={t} onClick={()=>setTier(t)} className={`badge ${tier===t?'badge-gold':'badge-muted'}`} style={{cursor:'pointer',border:'none',padding:'.4rem .9rem'}}>
                {t === 'all' ? 'All' : t === 'base' ? 'Base (10)' : 'Fusion (25)'}
              </button>
            ))}
          </div>
        </div>
        <div className="tabs" style={{marginBottom:'1.5rem'}}>
          {ELEMENTS.map(el => (
            <button key={el} className={`tab${filter===el?' active':''}`} onClick={()=>setFilter(el)}>{el}</button>
          ))}
        </div>

        {/* TOWER GRID */}
        <div className="grid-auto">
          {filtered.map(tower => (
            <div key={tower.id} className="card" style={{cursor:'pointer',borderColor:selected?.id===tower.id?'var(--gold)':'var(--border)'}} onClick={()=>setSelected(selected?.id===tower.id?null:tower)}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'.5rem'}}>
                <div style={{width:14,height:14,borderRadius:2,background:tower.color,flexShrink:0,marginTop:3}} />
                <span className={`badge ${tower.tier==='fusion'?'badge-purple':'badge-blue'}`}>{tower.tier}</span>
              </div>
              <div className="card-title" style={{marginBottom:'.3rem'}}>{tower.name}</div>
              <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',color:'var(--gold)',letterSpacing:'.1em',marginBottom:'.5rem'}}>{tower.element}</div>
              <div style={{fontSize:'.85rem',color:'var(--muted)',marginBottom:'.5rem'}}>{tower.effect}</div>
              {tower.weakness && <div style={{fontSize:'.8rem',color:'#f87171'}}>⚠ {tower.weakness}</div>}
              {selected?.id === tower.id && (
                <div style={{marginTop:'1rem',paddingTop:'1rem',borderTop:'1px solid var(--border)'}}>
                  <div style={{fontSize:'.85rem',color:'var(--muted)',marginBottom:'.3rem'}}><strong style={{color:'var(--text)'}}>Primary DMG:</strong> {tower.damage}</div>
                  <div style={{fontSize:'.8rem',color:'var(--muted)',marginTop:'.5rem',fontStyle:'italic'}}>Click towers adjacent on the grid to trigger fusion prompt.</div>
                </div>
              )}
            </div>
          ))}
        </div>
        {filtered.length === 0 && <p style={{color:'var(--muted)',textAlign:'center',padding:'3rem'}}>No towers match your filter.</p>}
      </div>
    </div>
  );
}
