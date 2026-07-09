import { Link } from 'react-router-dom';
export default function Prestige(){
  const tree=[
    {branch:'Legacy Power',nodes:'~35',key:'Tower DMG +2% per prestige, new tower visual tiers unlocked'},
    {branch:'Mob Escalation',nodes:'~25','key':'Mobs +10% HP per prestige BUT gold drop +8% — reward risk takers'},
    {branch:'Loot Mastery',nodes:'~30',key:'+5% item drop, +1 boss chest roll, shift rarity up 1 tier'},
    {branch:'Soul Economy',nodes:'~20',key:'+15% Soul drop rate, Black Market restocks 1 extra item'},
    {branch:'Forge Mastery',nodes:'~25',key:'Craft success +10%, failed crafts refund 50% materials'},
    {branch:'Hero Legacy',nodes:'~20',key:'Bond Bonuses apply run 1 even before heroes re-unlocked'},
    {branch:'Eternal Archive',nodes:'~25',key:'Bestiary bonuses apply run 1 without re-killing to unlock'},
    {branch:'Shard Wealth',nodes:'~20',key:'UNIQUE: Keep up to 10% items/resources on skill tree reset'},
    {branch:'Point Magnifier',nodes:'~20',key:'+5% Prestige Points earned per node — multiplicative stacking'},
  ];
  return(
    <div className="page"><div className="container section">
      <div style={{marginBottom:'.5rem'}}><Link to="/wiki" style={{color:'var(--muted)',fontSize:'.85rem',textDecoration:'none',fontFamily:'JetBrains Mono,monospace'}}>← Wiki</Link></div>
      <div className="section-label">// Advanced System</div>
      <h1 className="section-title">Prestige System</h1>
      <p className="section-intro">Beat the game, reset the skill tree, earn permanent upgrades. Mobs get harder every prestige. So do the rewards.</p>
      <div style={{overflowX:'auto',marginBottom:'2rem'}}>
        <table className="data-table">
          <thead><tr><th>Run #</th><th>Base Points</th><th>Multiplier</th><th>Total (Hard)</th></tr></thead>
          <tbody>
            {[['1st Clear','50','×1.0','50 pts'],['2nd Clear','50','×1.5','75 pts'],['3rd Clear','50','×2.0','100 pts'],['Nth Clear','50','×(1+0.5×N)','Scales indefinitely'],['Medium','×0.7 of Hard','same','35 pts base'],['Easy','×0.4 of Hard','same','20 pts base']].map(([r,b,m,t])=>(
              <tr key={r}><td>{r}</td><td>{b}</td><td>{m}</td><td style={{color:'var(--gold)'}}>{t}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 style={{fontFamily:'Cinzel,serif',fontSize:'1.3rem',color:'#fff',marginBottom:'1rem'}}>Prestige Tree Branches</h2>
      <div className="grid-2" style={{marginBottom:'2rem'}}>
        {tree.map(t=>(
          <div key={t.branch} className="card">
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:'.4rem'}}>
              <div className="card-title">{t.branch}</div>
              <span className="badge badge-muted">{t.nodes} nodes</span>
            </div>
            <div style={{fontSize:'.85rem',color:'var(--muted)'}}>{t.key}</div>
          </div>
        ))}
      </div>
      <div style={{background:'rgba(200,150,12,0.05)',border:'1px solid var(--gold-dim)',borderRadius:4,padding:'1.5rem'}}>
        <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',letterSpacing:'.18em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'.8rem'}}>Post-Prestige Mob Scaling</div>
        <table className="data-table">
          <thead><tr><th>Prestige</th><th>Mob HP Bonus</th><th>Mob DMG Bonus</th><th>New Features</th></tr></thead>
          <tbody>
            {[['P1','+25%','+15%','Boss Altar, Shadow Runs, Lunar Stone tiles'],['P2','+50%','+30%','Champions from Wave 5, Rifts from Wave 1'],['P3','+80%','+50%','Void Crack tiles, Cursed waves permanent'],['P5','+120%','+75%','Faction Invasions every 10 waves from Level 5'],['P10','+200%','+120%','True Endless Mode unlocked past Level 25']].map(([p,h,d,f])=>(
              <tr key={p}><td style={{color:'var(--gold)'}}>{p}</td><td style={{color:'#f87171'}}>{h}</td><td style={{color:'#f87171'}}>{d}</td><td style={{fontSize:'.8rem'}}>{f}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></div>
  );
}
