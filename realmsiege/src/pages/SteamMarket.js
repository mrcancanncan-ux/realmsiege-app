import{Link}from'react-router-dom';
export default function SteamMarket(){return(<div className="page"><div className="container section">
<div style={{marginBottom:'.5rem'}}><Link to="/wiki" style={{color:'var(--muted)',fontSize:'.84rem',textDecoration:'none',fontFamily:'JetBrains Mono,monospace'}}>← Wiki</Link></div>
<div className="section-label">// Economy Guide</div>
<h1 className="section-title">Steam Market Guide</h1>
<p className="section-intro">How tradeable items work, what makes them valuable, and how the provably fair system ensures legitimacy.</p>
<div className="g2" style={{marginBottom:'2rem'}}>
{[['Which items are tradeable?','Items of Rare rarity and above earned on Medium or Hard difficulty (or post-Prestige 1 on Easy) are Steam Market tradeable after a 7-day trade hold.'],['What is a provably fair seed?','Every item has a visible generation seed — a unique number tied to your account and timestamp. Anyone can verify the stats were legitimately generated and not manipulated.'],['What is a Perfect Roll?','An item that rolled 90% or above on ALL stats simultaneously receives a Perfect Roll tag. These are the rarest and most valuable items. Displayed in red in inventory.'],['What is a Blood Moon stamp?','Items dropped during a Blood Moon wave carry a permanent Blood Moon stamp. These are visually distinct and command premium prices on the market.']].map(([q,a])=>(
<div key={q} className="card"><div className="card-title" style={{marginBottom:'.55rem'}}>{q}</div><p style={{fontSize:'.86rem',color:'var(--muted)',lineHeight:1.62}}>{a}</p></div>))}
</div>
<div style={{background:'var(--deep)',border:'1px solid var(--border)',borderRadius:4,padding:'1.5rem',marginBottom:'2rem'}}>
<div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.58rem',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'.75rem'}}>Item Value Drivers (highest to lowest)</div>
<div style={{display:'flex',flexDirection:'column',gap:'.55rem'}}>
{[['Rarity tier','Primary driver of base value'],['Perfect Roll tag','Item rolled 90%+ on all stats — rarest possible'],['Blood Moon stamp','Dropped during Blood Moon event — premium'],['Prestige Origin','Higher prestige level = more desirable to collectors'],['Boss Origin tag','Dropped from boss chest — more reliable quality'],['Stat roll quality','% of theoretical maximum — shown in tooltip'],['Provably fair seed','Allows verification = buyer confidence']].map(([k,v])=>(
<div key={k} style={{display:'flex',gap:'1rem',alignItems:'flex-start',padding:'.55rem',background:'rgba(255,255,255,0.02)',borderRadius:2}}>
<span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',color:'var(--gold)',flexShrink:0,marginTop:'.18rem',minWidth:140}}>{k}</span>
<span style={{fontSize:'.84rem',color:'var(--muted)'}}>{v}</span>
</div>))}
</div>
</div>
<div className="card">
<div className="card-title" style={{marginBottom:'.75rem'}}>How to List an Item</div>
<ol style={{display:'flex',flexDirection:'column',gap:'.55rem',paddingLeft:'1.2rem'}}>
{['Earn a Rare+ item on Medium or Hard difficulty','Wait 7 days (Steam standard trade hold)','Open Inventory from the main menu','Click the item and select "List on Steam Market"','Set your price — the game takes a standard 5% Steam listing fee','Item is now visible to all Steam users'].map((step,i)=><li key={i} style={{fontSize:'.86rem',color:'var(--muted)',lineHeight:1.62}}>{step}</li>)}
</ol>
</div>
</div></div>);}
