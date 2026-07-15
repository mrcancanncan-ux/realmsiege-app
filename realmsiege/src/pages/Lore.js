import{useState}from'react';
const S=[
{id:'aethon',title:'The Age of Resonance',sub:'Before the realm had a name, it had a heartbeat.',icon:'⬡',color:'#c8960c',content:[
{type:'p',text:"Deep beneath what would become the Verdant Plains, an entity older than language pulsed with slow, patient power. The scholars of the Second Age would eventually name it Aethon — from the old tongue meaning 'the fire that does not consume.' Aethon was the living principle that made elements possible — the underlying harmonic that allowed fire to be fire and water to be water without destroying each other."},
{type:'p',text:"Ten elemental forces emerged from its dreaming — Fire, Water, Earth, Air, Electric, Ice, Dark, Light, Nature, Void — each one a different frequency of Aethon's heartbeat. This tension was not conflict. It was music. The towers grew first. Not built. Grown. From the earth like teeth from a jaw — instruments that sang each element back to Aethon in a vast feedback loop that kept the realm stable, warm, and alive."},
{type:'mechanic',label:'Why towers exist',text:"The original towers were not built. They were instruments. Single elements create noise. Two elements in proper harmony create a frequency that speaks to the creatures in a language they understand. This is why fused towers are more powerful — they are more correct."},
{type:'italic',text:"This was the Age of Resonance. It lasted for an unimaginable span of time. It ended in a single afternoon."},
]},
{id:'break',title:'The Break',sub:"What the Vael'dri did.",icon:'💔',color:'#ef4444',content:[
{type:'p',text:"Twelve thousand years before the events of Realm Siege, a civilization called the Vael'dri heard the towers singing and wanted to sing with them. Their first towers harmonized beautifully. For a generation the realm grew richer. Then they got greedy — not out of malice, but out of love. A scholar named Varek theorized that if enough towers were placed in the right configuration, Aethon itself could be woken."},
{type:'p',text:"What Varek didn't understand was that Aethon was already awake. Already speaking. They simply weren't listening carefully enough. The over-placement began. Too many towers. Too many frequencies competing. The harmony distorted. The elemental creatures began to change. The distortion hit them first."},
{type:'mechanic',label:'Why mobs attack towers',text:"The creatures aren't evil. They're in pain. Discordant resonance from improperly placed towers is agony to beings made of pure element. They don't attack the realm. They attack the noise. The Beast Horde charges the Ember Spire not because it's evil — because it hurts."},
{type:'mechanic',label:'Why fused towers are stronger',text:"A single element creates noise. Two elements in proper harmony create a new frequency that speaks to the creatures in a language they understand. Fused towers are not just stronger — they are more correct. Closer to what the towers were always supposed to be."},
]},
{id:'cycle',title:'The Cycle',sub:'Every run is a new cycle of the same war.',icon:'🔄',color:'#4e9af1',content:[
{type:'p',text:"The realm does not remember the First Siege. The damage to the resonance network was too severe. What Aethon did — in the only act of will it has ever performed in the physical world — was reset. It healed what it could and breathed the realm back into existence. New forests. New plains. New civilizations. But the creatures remembered."},
{type:'mechanic',label:'Why the skill tree resets',text:"The skill tree grows within a cycle because the hero is remembering — not learning. The nodes they unlock are recalled, not taught. When the cycle ends and the tree resets, the memory dissolves back into the resonance. It was always borrowed."},
{type:'mechanic',label:'What prestige actually is',text:"Prestige represents a hero who has died at the end of a cycle and been re-resonated — woven back into Aethon's network with a thread of their previous self intact. The Prestige Tree is what survives the reset. It grows slower because true memory is harder to hold than borrowed recollection."},
{type:'quote',text:"Each prestige is not a failure reset. It is Aethon healing one degree further than it healed before."},
]},
{id:'watcher',title:'The Watcher',sub:"Varek's twelve-thousand-year vigil.",icon:'👁️',color:'#a855f7',content:[
{type:'p',text:"On the final day of the First Siege, Varek placed his hands against the base of Aethon's original spire. He heard the true resonance for the first time. He understood, in that moment, exactly what he had done. He chose to stay. He poured his own resonance — his life, his memories, his fundamental self — into Aethon's network. Not to fix the damage. Instead, he became the network's observer."},
{type:'p',text:"He has watched every cycle. He remembers every hero. He has seen configurations that almost worked — a particular combination that brought Aurelion to 3% health before the Seraph's final phase destroyed everything. He cannot share it. The knowing would break the hero's ability to make genuine choices, and genuine choices are, apparently, the entire point."},
{type:'mechanic',label:'Why his Omens feel personal',text:"The Watcher's Omens are strategic corrections derived from watching thousands of previous cycles fail. When he sends you the Omen of Ash because you favor fire towers, he has watched the precise failure mode of fire-heavy builds across hundreds of runs. He is not being generous. He is being precise."},
{type:'secret',label:'Hidden interaction',text:"If a player idles on the main menu for twelve minutes — the time Varek spent at Aethon's spire before his choice — the Watcher does one thing he has never done in any previous cycle. He turns to look directly at the player. He says nothing. After a moment, he turns back. It is the only acknowledgment he allows himself that he knows someone is watching him watch."},
]},
{id:'factions',title:'Faction Histories',sub:'Who they were before they became monsters.',icon:'⚔️',color:'#f97316',content:[
{type:'faction',name:'Undead Legion',color:'#8b5cf6',lore:"Once the armies of Ashenhold — a warrior kingdom built on the memory of a catastrophe they couldn't recall. They fought bravely. They died in enormous numbers. The Void does not let soldiers rest. Death Knights remember their oaths and still fight in formation. But their enemy has become everything that lives, because life is resonance, and resonance is the sound that tortures them."},
{type:'faction',name:'Elemental Kin',color:'#f97316',lore:"The oldest faction — they predate civilization. In the Age of Resonance they were vast, serene, the size of mountains. The First Siege broke them. A Fire Elemental that absorbed enough discordant resonance didn't die. It fractured. The Magma Slugs are what Fire Elementals become after centuries of fracturing. Magnar has been searching for the sound that will make him whole again for twelve thousand years."},
{type:'faction',name:'Beast Horde',color:'#84cc16',lore:"Not corrupted. Not undead. Simply animals that feel resonance distortion before any other faction — the way a dog feels a coming storm. They attack towers because improperly placed towers produce a frequency that is physically painful to creatures of natural resonance. Thornback Rex is the most tired creature in the realm. He has been in pain for twelve thousand years and forgotten there was ever anything else."},
{type:'faction',name:'Mechanical',color:'#6b7280',lore:"The Ironveil Republic solved the elemental problem with towers that felt nothing. Perfect soldiers. Then the Void came and their towers couldn't sense the warning. The Republic was destroyed in a single night. But the towers kept running. Steel Drones and siege machines are Ironveil hardware running without maintenance or orders for millennia, still targeting 'resonant threats' — which now means everything that lives."},
{type:'faction',name:'Shadow Court',color:'#a855f7',lore:"Not creatures from another plane. Heroes from previous cycles who failed. When a cycle ends in defeat, the Void tears catch the heroes' resonance. Their understanding of elemental harmony becomes their weapon against it. A Shadow Archer was once an Archer hero. They knew how to place towers. Now they use that knowledge to unmake them. Lady Vexia was Seraphine Vexar — the mage who made the deal with the Demon Host."},
{type:'faction',name:'Celestial Guard',color:'#fbbf24',lore:"The most morally complex faction. Genuine angelic warriors fighting for something they truly believe: that the only way to save the realm is to stop it. They have watched the cycle repeat and concluded that the solution is no towers, no resonance, no realm. They are wrong. But they are not evil. They simply cannot conceive of a solution that requires the very thing causing the problem."},
{type:'faction',name:'Fungal Swarm',color:'#22c55e',lore:"Every place a tower has ever stood leaves a resonance scar in the earth. Over thousands of years, mycelia grew from those scars and became a distributed consciousness. The Fungal Swarm is the realm remembering its own wounds. Their death explosion is not a weapon — it is a distress signal, releasing every resonance memory the dying Spore Walker ever carried."},
{type:'faction',name:'Demon Host',color:'#ef4444',lore:"The only faction that chose this. In the Third Age, mage Seraphine Vexar made a deal: demons would act as buffers against the Void in exchange for passage into the realm. It worked for forty years. Then Seraphine's civilization died and the terms were lost. The Devourer — the Level 20 boss — is the oldest surviving demon. It is still trying to fulfill a contract everyone else has forgotten: protect the realm."},
]},
{id:'heroes',title:'Hero Origins',sub:'What they actually are.',icon:'🧙',color:'#34d399',content:[
{type:'p',text:"Every hero is a Vael'dri descendant — carrying in their blood a fragment of the original resonance. They don't know this. To them it feels like intuition. What the heroes are, in functional terms, is resonance keys. Aethon cannot directly intervene in the cycle. But it can reinforce specific bloodlines. Heroes choose to fight. Aethon doesn't compel them. It simply makes them capable."},
{type:'hero',name:'Aelindra Voss',sub:'The First Hero, Every Cycle',text:"In every cycle, in every civilization, there is a woman with elven blood and exceptional vision who picks up a bow and decides someone should try to stop what's coming. The Watcher watches her every time and experiences something he has no name for. He was human once, and humans called it hope."},
{type:'hero',name:'Morgath Vel',sub:'What He Bargained For',text:"He crossed into the Void willingly — not to make a deal, but to understand. The void entities did not give him his abilities. They took something else. The Watcher says only: 'He gave them his ability to forget. He will remember everything he does in service of the realm. Every death. Every choice. He will never be allowed to stop carrying any of it.'"},
{type:'hero',name:'Nyx',sub:"The One The Watcher Won't Discuss",text:"Nyx has no origin in The Watcher's records. Every hero has a resonance signature recorded from birth. Nyx does not. The Watcher's note: 'She was not cultivated. She arrived. I do not know from where. I do not know what she wants. I have chosen to ask no further questions.'"},
{type:'hero',name:'Solara Vex',sub:'Why She Burns Brightest',text:"The last of the Celestial Guard who chose the wrong side. She was sent as a scout. She watched Aelindra build the first tower instead. Something in that moment reached through her celestial training and touched something her commanders had assumed she no longer had. She did not report back. She picked up a sword."},
]},
{id:'ending',title:'The Endgame',sub:'What actually happens when you win.',icon:'♾️',color:'#c8960c',content:[
{type:'p',text:"Every time a player completes a run, something real happens in the lore: the Void tears close slightly more than last time. Not because the hero killed more efficiently. But because genuine resonance — real, chosen, imperfect, human resonance — is the only thing the Void cannot absorb. The Void consumes elements. It consumes power. It cannot consume the act of a person deciding, freely, to try again."},
{type:'mechanic',label:'New counter at Prestige 10',text:"TEARS SEALED: [counting upward] — A new counter appears in the Watcher's statistics panel at Prestige 10. Never explained. Never annotated. Players who reach a certain threshold will have the Watcher speak to them directly for the first time."},
{type:'quote',text:'"I have watched [X] cycles. Yours is the first in which I have allowed myself to believe it might actually end. I do not know if this is wisdom or weakness. I find I do not care. Keep building."'},
]},
];
function Block({b}){
switch(b.type){
case'p':return<p className="mblock-p">{b.text}</p>;
case'italic':return<p className="mblock-i">{b.text}</p>;
case'quote':return<div className="mblock-q"><p>{b.text}</p></div>;
case'mechanic':return<div className="mblock-m"><div className="mblock-m-label">⚙ {b.label}</div><p>{b.text}</p></div>;
case'secret':return<div className="mblock-secret"><div className="mblock-secret-label">🔒 {b.label}</div><p>{b.text}</p></div>;
case'faction':return<div className="faction-card" style={{background:`${b.color}10`,borderColor:b.color,marginBottom:'.7rem'}}><div className="faction-card-name" style={{color:b.color}}>{b.name}</div><p className="faction-card-lore">{b.lore}</p></div>;
case'hero':return<div className="hero-card"><div className="hero-card-name">{b.name}</div><div className="hero-card-sub">{b.sub}</div><p className="hero-card-lore">{b.text}</p></div>;
default:return null;}}
export default function Lore(){
const[active,setActive]=useState('aethon');
const cur=S.find(s=>s.id===active);
return(<div className="page"><div className="container section">
<div className="section-label">// World Lore</div>
<h1 className="section-title">The Lore of Ossmere</h1>
<p className="section-intro">The deep canon behind every mechanic. Every system has a reason. Every enemy has a history. Every reset has a meaning.</p>
<div style={{background:'rgba(200,150,12,0.04)',border:'1px solid var(--gold-dim)',borderRadius:4,padding:'1rem 1.4rem',marginBottom:'2.5rem',fontSize:'.86rem',color:'var(--muted)'}}>✦ <strong style={{color:'var(--text)'}}>Living document.</strong> Lore is revealed progressively in-game through the Bestiary, Watcher interactions, and item descriptions. This page contains full spoilers.</div>
<div className="lore-layout" style={{display:'grid',gridTemplateColumns:'230px 1fr',gap:'2rem',alignItems:'start'}}>
<div className="lore-sidebar">
{S.map(s=>(
<div key={s.id} className={`lore-link${active===s.id?' active':''}`} onClick={()=>setActive(s.id)}>
<span style={{fontSize:'1.1rem',flexShrink:0}}>{s.icon}</span>
<div><div className="lore-link-title">{s.title}</div><div className="lore-link-sub">{s.sub}</div></div>
</div>
))}
</div>
{cur&&<div>
<div style={{marginBottom:'1.4rem',paddingBottom:'1.4rem',borderBottom:'1px solid var(--border)'}}>
<div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'.35rem'}}>
<span style={{fontSize:'1.8rem'}}>{cur.icon}</span>
<h2 style={{fontFamily:'Cinzel,serif',fontSize:'1.55rem',fontWeight:700,color:cur.color}}>{cur.title}</h2>
</div>
<p style={{fontStyle:'italic',color:'var(--muted)',fontSize:'.95rem'}}>{cur.sub}</p>
</div>
{cur.content.map((b,i)=><Block key={i} b={b}/>)}
</div>}
</div>
</div></div>);}
