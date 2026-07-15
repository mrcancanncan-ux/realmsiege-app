import{useState}from'react';
import{HEROES}from'../data/gameData';
export default function Heroes(){
const[sel,setSel]=useState(HEROES[0]);
return(<div className="page"><div className="container section">
<div className="section-label">// Hero Roster</div>
<h1 className="section-title">The 12 Heroes of Ossmere</h1>
<p className="section-intro">All heroes are descendants of the Vael'dri bloodline. One is your active hero who levels up. All unlocked heroes provide passive Bond Bonuses.</p>
<div style={{background:'rgba(200,150,12,0.05)',border:'1px solid var(--gold-dim)',borderRadius:4,padding:'1.1rem',marginBottom:'2.2rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.58rem',letterSpacing:'.18em',color:'var(--gold)',marginBottom:'.35rem'}}>// Bond System</div>
<p style={{fontSize:'.88rem',color:'var(--muted)'}}>Every hero you unlock adds their Bond Bonus permanently — even if inactive. Unlock all 12 for the full combined bonus.</p>
</div>
<div className="hero-layout" style={{display:'grid',gridTemplateColumns:'260px 1fr',gap:'2rem',alignItems:'start'}}>
<div className="hero-sidebar" style={{position:'sticky',top:80,display:'flex',flexDirection:'column',gap:'.35rem'}}>
{HEROES.map(hero=>(
<div key={hero.id} onClick={()=>setSel(hero)} style={{display:'flex',alignItems:'center',gap:'.75rem',padding:'.9rem',borderRadius:4,cursor:'pointer',background:sel?.id===hero.id?'rgba(200,150,12,0.08)':'var(--deep)',border:`1px solid ${sel?.id===hero.id?'var(--gold)':'var(--border)'}`,transition:'all .2s'}}>
<div style={{width:36,height:36,borderRadius:'50%',background:hero.color+'22',border:`2px solid ${hero.color}44`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Cinzel,serif',fontSize:'.68rem',color:hero.color,flexShrink:0}}>{hero.name[0]}</div>
<div>
<div style={{fontFamily:'Cinzel,serif',fontSize:'.86rem',fontWeight:700,color:sel?.id===hero.id?'var(--gold)':'#fff'}}>{hero.name}</div>
<div style={{fontSize:'.72rem',color:hero.color}}>{hero.class}</div>
</div>
</div>))}
</div>
{sel&&(()=>{const c=sel.color;return(<div>
<div className="card" style={{borderColor:c+'44',marginBottom:'1.4rem'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'1.4rem'}}>
<div>
<div style={{fontFamily:'Cinzel,serif',fontSize:'1.7rem',fontWeight:900,color:c}}>{sel.name}</div>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',letterSpacing:'.14em',color:'var(--muted)',marginTop:'.28rem',textTransform:'uppercase'}}>{sel.class} · {sel.region}</div>
</div>
<div style={{width:54,height:54,borderRadius:'50%',background:c+'22',border:`3px solid ${c}55`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Cinzel,serif',fontSize:'1.3rem',fontWeight:900,color:c}}>{sel.name[0]}</div>
</div>
<p style={{fontSize:'.92rem',color:'var(--text)',fontStyle:'italic',lineHeight:1.7,marginBottom:'1.4rem'}}>{sel.lore}</p>
<div style={{background:'rgba(255,255,255,0.03)',borderRadius:4,padding:'.95rem',marginBottom:'.9rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.56rem',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'.38rem'}}>Signature Skill</div>
<div style={{fontSize:'.9rem',color:'var(--text)'}}>{sel.skill}</div>
</div>
<div style={{background:'rgba(255,255,255,0.03)',borderRadius:4,padding:'.95rem',marginBottom:'.9rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.56rem',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'.38rem'}}>Ultimate (Level 100)</div>
<div style={{fontSize:'.9rem',color:'var(--text)'}}>{sel.ultimate}</div>
</div>
<div style={{background:c+'12',border:`1px solid ${c}33`,borderRadius:4,padding:'.95rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.56rem',letterSpacing:'.16em',textTransform:'uppercase',color:c,marginBottom:'.38rem'}}>Bond Bonus (passive when unlocked)</div>
<div style={{fontSize:'.9rem',color:'var(--text)',fontWeight:600}}>{sel.bond}</div>
</div>
</div>
<div className="card">
<div className="card-title" style={{marginBottom:'.9rem'}}>Hero Progression</div>
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'.7rem'}}>
{[['Max Level','100 per run'],['Skill Points','1 per level (1–50)'],['Legendary Ability','Unlocked at Lv75'],['Ultimate Ability','Unlocked at Lv100'],['XP Sources','Mob kills, waves, bosses'],['XP Carry Over','Persists across levels in run'],['Resonance Burst','Kill diverse mob types → 15s power burst'],['Bond Bonuses','All unlocked heroes contribute passively']].map(([l,v])=>(
<div key={l} style={{padding:'.55rem',background:'rgba(255,255,255,0.02)',borderRadius:2}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.52rem',color:'var(--muted)',marginBottom:'.18rem'}}>{l}</div>
<div style={{fontSize:'.86rem',color:'var(--text)'}}>{v}</div>
</div>))}
</div>
</div>
</div>);})()}
</div>
</div></div>);}
