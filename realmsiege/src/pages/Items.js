import{useState}from'react';
import{ITEMS}from'../data/gameData';
const RC={'Common':'#aaa','Uncommon':'#44cc44','Rare':'#4488ff','Epic':'#aa44ff','Legendary':'#ff8800','Mythic':'#ff4444','Artifact':'#c8960c'};
const RARITIES=['All','Rare','Epic','Legendary','Mythic','Artifact'];
const TYPES=['All','Weapon','Armor','Accessory','Tower Rune'];
export default function Items(){
const[rarity,setRarity]=useState('All');
const[type,setType]=useState('All');
const[search,setSearch]=useState('');
const filtered=ITEMS.filter(i=>{
if(rarity!=='All'&&i.rarity!==rarity)return false;
if(type!=='All'&&i.type!==type)return false;
if(search&&!i.name.toLowerCase().includes(search.toLowerCase()))return false;
return true;});
return(<div className="page"><div className="container section">
<div className="section-label">// Item Database</div>
<h1 className="section-title">Items & Equipment</h1>
<p className="section-intro">From Common drops to Artifact-tier game-changers. Rare+ items on Medium/Hard are Steam Market tradeable.</p>
<div style={{display:'flex',gap:'.45rem',flexWrap:'wrap',marginBottom:'1.5rem'}}>
{Object.entries(RC).map(([r,c])=><span key={r} className="badge" style={{background:c+'18',color:c,border:`1px solid ${c}44`}}>{r}</span>)}
</div>
<div style={{background:'var(--deep)',border:'1px solid var(--border)',borderRadius:4,padding:'1.4rem',marginBottom:'2rem'}}>
<div className="section-label" style={{marginBottom:'.75rem'}}>// Forge Crafting</div>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(175px,1fr))',gap:'.45rem'}}>
{[['3 Common','1 Uncommon','100%'],['3 Uncommon','1 Rare','80%'],['3 Rare','1 Epic','60%'],['3 Epic','1 Legendary','40%'],['3 Legendary','1 Mythic','20%'],['3 Mythic','1 Artifact','8%']].map(([inp,out,ch])=>(
<div key={inp} style={{display:'flex',alignItems:'center',gap:'.45rem',padding:'.45rem',background:'rgba(255,255,255,0.02)',borderRadius:2}}>
<span style={{fontSize:'.76rem',color:'var(--muted)'}}>{inp}</span>
<span style={{color:'var(--gold-dim)'}}>→</span>
<span style={{fontSize:'.76rem',color:'var(--text)'}}>{out}</span>
<span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',color:'var(--gold)',marginLeft:'auto'}}>{ch}</span>
</div>))}
</div>
</div>
<div style={{display:'flex',gap:'1rem',marginBottom:'1rem',flexWrap:'wrap',alignItems:'center'}}>
<div className="search-bar" style={{flex:1,minWidth:200,margin:0}}><span className="search-icon">🔍</span><input className="search-input" placeholder="Search items..." value={search} onChange={e=>setSearch(e.target.value)}/></div>
</div>
<div className="tabs">{RARITIES.map(r=><button key={r} className={`tab${rarity===r?' active':''}`} onClick={()=>setRarity(r)}>{r}</button>)}</div>
<div className="tabs" style={{marginBottom:'2rem'}}>{TYPES.map(tp=><button key={tp} className={`tab${type===tp?' active':''}`} onClick={()=>setType(tp)}>{tp}</button>)}</div>
<div className="ga">
{filtered.map(item=>{const c=RC[item.rarity]||'#fff';return(
<div key={item.id} className="card" style={{borderColor:c+'44'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'.45rem'}}>
<span className="badge" style={{background:c+'18',color:c,border:`1px solid ${c}44`,fontSize:'.52rem'}}>{item.rarity}</span>
<span className="badge bm" style={{fontSize:'.52rem'}}>{item.type}</span>
</div>
<div className="card-title" style={{color:c,marginBottom:'.45rem'}}>{item.name}</div>
<div style={{display:'flex',flexDirection:'column',gap:'.18rem',marginBottom:'.55rem'}}>
{item.stats.map((s,i)=><div key={i} style={{fontSize:'.78rem',color:'var(--text)',display:'flex',gap:'.35rem'}}><span style={{color:'var(--gold-dim)'}}>+</span>{s}</div>)}
</div>
{item.unique&&<div style={{background:'rgba(200,150,12,0.06)',border:'1px solid var(--gold-dim)',borderRadius:2,padding:'.45rem .65rem',marginBottom:'.55rem',fontSize:'.76rem',color:'var(--gold)'}}>✦ {item.unique}</div>}
<div style={{fontSize:'.76rem',color:'var(--muted)',marginBottom:'.28rem',fontStyle:'italic',lineHeight:1.5}}>{item.lore}</div>
<div style={{fontSize:'.72rem',color:'var(--muted)'}}>Drop: {item.drop}</div>
</div>);})}
</div>
{filtered.length===0&&<p style={{color:'var(--muted)',textAlign:'center',padding:'3rem'}}>No items match.</p>}
</div></div>);}
