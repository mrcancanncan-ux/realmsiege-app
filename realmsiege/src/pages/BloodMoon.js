import{Link}from'react-router-dom';
export default function BloodMoon(){return(<div className="page"><div className="container section">
<div style={{marginBottom:'.5rem'}}><Link to="/wiki" style={{color:'var(--muted)',fontSize:'.84rem',textDecoration:'none',fontFamily:'JetBrains Mono,monospace'}}>← Wiki</Link></div>
<div className="section-label">// Advanced System</div>
<h1 className="section-title">Blood Moon Events</h1>
<p className="section-intro">Random, deadly, and extremely rewarding. The Blood Moon is the most dangerous event in Realm Siege — and the best loot source in the game.</p>
<div style={{background:'rgba(220,38,38,0.06)',border:'1px solid rgba(220,38,38,0.3)',borderRadius:4,padding:'1.4rem',marginBottom:'2rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',letterSpacing:'.16em',color:'#f87171',marginBottom:'.55rem'}}>🩸 LORE: AETHON BLEEDING</div>
<p style={{fontSize:'.9rem',color:'var(--text)',lineHeight:1.7}}>The Blood Moon is not a game event. It is Aethon in pain. Every so often in a cycle, the cumulative resonance distortion from combat reaches a threshold that Aethon's passive healing cannot absorb. The excess energy vents through the sky — the red light is Aethon's resonance made visible, pouring upward like heat from a wound.</p>
</div>
<div className="g2" style={{marginBottom:'2rem'}}>
{[['When does it trigger?','Random — no warning except a 5-second red sky animation. On Hard mode: every 6th level. On Medium: every 9th level. On Easy: never.'],['What changes?','ALL mob HP doubles. All mob move speed +35%. The standard item drop table is suspended entirely — every drop that wave is Legendary or above.'],['Can I prepare?','Not specifically. The Tower Engineering skill tree Mastery Node (Rapid Deploy) makes all towers free to build during Blood Moon — the only node that directly counters it.'],['Auto mode?','Blood Moon waves CANNOT be auto-cleared. Auto mode pauses and forces player intervention. This is intentional.']].map(([q,a])=>(
<div key={q} className="card"><div className="card-title" style={{marginBottom:'.55rem'}}>{q}</div><p style={{fontSize:'.88rem',color:'var(--muted)',lineHeight:1.62}}>{a}</p></div>))}
</div>
<div style={{background:'var(--deep)',border:'1px solid var(--border)',borderRadius:4,padding:'1.5rem',marginBottom:'2rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.58rem',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'.75rem'}}>Blood Moon Loot Table</div>
<div style={{display:'flex',flexWrap:'wrap',gap:'.5rem'}}>
{[['Legendary minimum','60%','#ff8800'],['Mythic','30%','#ff4444'],['Artifact','10%','#c8960c']].map(([item,chance,color])=>(
<div key={item} style={{background:color+'12',border:`1px solid ${color}33`,borderRadius:2,padding:'.5rem 1rem',display:'flex',gap:'.7rem',alignItems:'center'}}>
<span style={{fontSize:'.86rem',color:'var(--text)'}}>{item}</span>
<span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.7rem',color}}>{chance}</span>
</div>))}
</div>
<p style={{fontSize:'.82rem',color:'var(--muted)',marginTop:'1rem'}}>A bonus chest equivalent to a boss chest (6 rolls on Hard) drops at wave end, even if it is not Wave 50. Blood Moon tag on items increases their Steam Market value significantly.</p>
</div>
<div className="card">
<div className="card-title" style={{marginBottom:'.75rem'}}>Strategy Guide</div>
<ul style={{display:'flex',flexDirection:'column',gap:'.55rem',listStyle:'none'}}>
{['Do NOT try to turtle — mobs move 35% faster and will overwhelm static defenses.','Pre-place your counter-element towers BEFORE the wave starts if you see the red sky.','Save all hero abilities for the Blood Moon wave.','The Tower Engineering Mastery Node (Rapid Deploy) makes towers free during Blood Moon — build aggressively.','Focus on killing mobs fast — every kill is guaranteed Legendary+.','Blood Moon drops carry a permanent stamp increasing their Steam Market value.'].map((tip,i)=><li key={i} style={{fontSize:'.86rem',color:'var(--muted)',paddingLeft:'1.1rem',position:'relative'}}><span style={{position:'absolute',left:0,color:'var(--red)'}}>🩸</span>{tip}</li>)}
</ul>
</div>
</div></div>);}
