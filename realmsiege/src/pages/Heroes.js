import { useState } from 'react';
import { HEROES } from '../data/gameData';

const CLASS_COLORS = {
  Ranger:'#4ade80', Warlock:'#a855f7', Druid:'#22c55e', Pyromancer:'#f97316',
  Assassin:'#64748b', Paladin:'#fbbf24', 'Storm Caller':'#60a5fa', Healer:'#34d399',
  Berserker:'#ef4444', 'Ice Witch':'#93c5fd', 'Void Walker':'#c084fc', 'Light Warden':'#fde68a',
};

export default function Heroes() {
  const [selected, setSelected] = useState(HEROES[0]);

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label">// Hero Roster</div>
        <h1 className="section-title">The 12 Heroes</h1>
        <p className="section-intro">Choose your main hero to level up each run. All unlocked heroes provide passive Bond Bonuses regardless of which you play.</p>

        <div style={{background:'rgba(200,150,12,0.05)',border:'1px solid var(--gold-dim)',borderRadius:4,padding:'1.2rem',marginBottom:'2.5rem'}}>
          <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',letterSpacing:'.2em',color:'var(--gold)',marginBottom:'.4rem'}}>// Bond System</div>
          <p style={{fontSize:'.9rem',color:'var(--muted)'}}>Every hero you unlock adds their Bond Bonus permanently to your run — even if they aren't your active hero. Unlock all 12 for the full combined bonus. Heroes are unlocked progressively as you advance through levels.</p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'300px 1fr',gap:'2rem',alignItems:'start'}}>
          {/* HERO LIST */}
          <div style={{display:'flex',flexDirection:'column',gap:'.5rem',position:'sticky',top:80}}>
            {HEROES.map(hero => {
              const color = CLASS_COLORS[hero.class] || '#fff';
              return (
                <div key={hero.id} onClick={()=>setSelected(hero)}
                  style={{background:selected?.id===hero.id?'rgba(200,150,12,0.08)':'var(--deep)',border:`1px solid ${selected?.id===hero.id?'var(--gold)':'var(--border)'}`,borderRadius:4,padding:'1rem',cursor:'pointer',transition:'all .2s',display:'flex',alignItems:'center',gap:'.8rem'}}>
                  <div style={{width:36,height:36,borderRadius:'50%',background:color+'22',border:`2px solid ${color}44`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Cinzel,serif',fontSize:'.7rem',color,flexShrink:0}}>
                    {hero.name[0]}
                  </div>
                  <div>
                    <div style={{fontFamily:'Cinzel,serif',fontSize:'.9rem',fontWeight:700,color:selected?.id===hero.id?'var(--gold)':'#fff'}}>{hero.name}</div>
                    <div style={{fontSize:'.75rem',color}}>{hero.class}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* HERO DETAIL */}
          {selected && (() => {
            const color = CLASS_COLORS[selected.class] || '#fff';
            return (
              <div>
                <div className="card" style={{borderColor:color+'44',marginBottom:'1.5rem'}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'1.5rem'}}>
                    <div>
                      <div style={{fontFamily:'Cinzel,serif',fontSize:'2rem',fontWeight:900,color}}>{selected.name}</div>
                      <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.7rem',letterSpacing:'.15em',color:'var(--muted)',marginTop:'.3rem',textTransform:'uppercase'}}>{selected.class}</div>
                    </div>
                    <div style={{width:60,height:60,borderRadius:'50%',background:color+'22',border:`3px solid ${color}55`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Cinzel,serif',fontSize:'1.5rem',fontWeight:900,color}}>
                      {selected.name[0]}
                    </div>
                  </div>
                  <p style={{fontSize:'1rem',color:'var(--text)',fontStyle:'italic',lineHeight:1.6,marginBottom:'1.5rem'}}>{selected.lore}</p>

                  <div style={{background:'rgba(255,255,255,0.03)',borderRadius:4,padding:'1.2rem',marginBottom:'1rem'}}>
                    <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'.5rem'}}>Signature Skill</div>
                    <div style={{fontSize:'.95rem',color:'var(--text)'}}>{selected.skill}</div>
                  </div>

                  <div style={{background:color+'12',border:`1px solid ${color}33`,borderRadius:4,padding:'1.2rem'}}>
                    <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color,marginBottom:'.5rem'}}>Bond Bonus (passive when unlocked)</div>
                    <div style={{fontSize:'.95rem',color:'var(--text)',fontWeight:600}}>{selected.bond}</div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-title" style={{marginBottom:'1rem'}}>Hero Progression</div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
                    {[
                      ['Max Level','100 per run'],
                      ['Skill Points','1 per level (1–50)'],
                      ['Legendary Ability','Unlocked at Lv75'],
                      ['Ultimate Ability','Unlocked at Lv100'],
                      ['XP Sources','Mob kills, waves, bosses'],
                      ['XP Carry Over','Persists across levels in run'],
                    ].map(([label,val]) => (
                      <div key={label} style={{padding:'.6rem',background:'rgba(255,255,255,0.02)',borderRadius:2}}>
                        <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',color:'var(--muted)',marginBottom:'.2rem'}}>{label}</div>
                        <div style={{fontSize:'.9rem',color:'var(--text)'}}>{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
