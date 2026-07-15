import{useEffect,useState,useRef}from'react';
import{Link}from'react-router-dom';
import{sb}from'../supabase';
import{t,getLang}from'../i18n/translations';

function Particles(){
  const ref=useRef(null);
  useEffect(()=>{
    const c=ref.current;if(!c)return;
    const ctx=c.getContext('2d');
    const resize=()=>{c.width=window.innerWidth;c.height=window.innerHeight;};
    resize();
    const pts=Array.from({length:65},()=>({x:Math.random()*c.width,y:Math.random()*c.height+c.height,s:Math.random()*2+.5,sp:Math.random()*.35+.15,o:Math.random()*.5+.1,col:Math.random()>.5?'#c8960c':'#4e9af1'}));
    let raf;
    function draw(){ctx.clearRect(0,0,c.width,c.height);pts.forEach(p=>{p.y-=p.sp;if(p.y<-10){p.y=c.height+10;p.x=Math.random()*c.width;}ctx.beginPath();ctx.arc(p.x,p.y,p.s,0,Math.PI*2);ctx.fillStyle=p.col;ctx.globalAlpha=p.o;ctx.fill();});ctx.globalAlpha=1;raf=requestAnimationFrame(draw);}
    draw();
    window.addEventListener('resize',resize);
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('resize',resize);};
  },[]);
  return<canvas ref={ref} style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:0}}/>;
}

function Countdown({target,lang}){
  const[time,setTime]=useState({d:'--',h:'--',m:'--',s:'--'});
  useEffect(()=>{
    if(!target)return;
    const tick=()=>{
      const diff=new Date(target)-new Date();
      if(diff<=0){setTime({d:'00',h:'00',m:'00',s:'00'});return;}
      const pad=n=>String(Math.floor(n)).padStart(2,'0');
      setTime({d:pad(diff/86400000),h:pad((diff%86400000)/3600000),m:pad((diff%3600000)/60000),s:pad((diff%60000)/1000)});
    };
    tick();const iv=setInterval(tick,1000);return()=>clearInterval(iv);
  },[target]);
  return(<div style={{marginTop:'2.5rem'}}>
    <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.58rem',letterSpacing:'.28em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'1rem',textAlign:'center'}}>{t('home.cd_label',lang)}</div>
    <div className="countdown">
      {[['d','Days'],['h','Hours'],['m','Min'],['s','Sec']].map(([k,l],i)=>(
        <><>{i>0&&<span key={'sep'+i} className="cd-sep">:</span>}</><div key={k} className="cd-unit"><span className="cd-num">{time[k]}</span><div className="cd-label">{l}</div></div></>
      ))}
    </div>
  </div>);
}

export default function Home({lang}){
  const L=lang||getLang();
  const T=k=>t(k,L);
  const[content,setContent]=useState({});
  const[progress,setProgress]=useState([]);
  const[email,setEmail]=useState('');
  const[msg,setMsg]=useState('');
  const[err,setErr]=useState('');

  useEffect(()=>{
    sb.from('site_content').select('*').then(({data})=>{const c={};(data||[]).forEach(r=>c[r.id]=r.value);setContent(c);});
    sb.from('progress_items').select('*').order('sort_order').then(({data})=>setProgress(data||[]));
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.1});
    setTimeout(()=>document.querySelectorAll('.reveal').forEach(el=>obs.observe(el)),100);
    return()=>obs.disconnect();
  },[]);

  async function subscribe(e){
    e.preventDefault();setMsg('');setErr('');
    if(!email.includes('@')){setErr('Please enter a valid email.');return;}
    const{error}=await sb.from('subscribers').insert({email});
    if(error?.code==='23505')setErr(T('home.nl_dupe'));
    else if(error)setErr(T('home.nl_err'));
    else{setMsg(T('home.nl_ok'));setEmail('');}
  }

  const total=progress.length?Math.round(progress.reduce((a,b)=>a+b.percentage,0)/progress.length):0;

  const features=[
    {icon:'⚗️',name:'35 Elemental Towers',desc:'10 base elements fuse into 25 unique combinations. Each fusion has abilities impossible to get any other way.'},
    {icon:'🌳',name:'1,000+ Skill Nodes',desc:'Eight major branches. Every run builds a different tree. It resets when you beat the game.'},
    {icon:'📜',name:'Ancient Contracts',desc:'Every level you sign a binding deal. Brutal penalties, massive rewards. On Hard you sign two per level.'},
    {icon:'🩸',name:'Blood Moon Events',desc:'Randomly the sky turns red. All mob HP doubles — but every drop that wave is Legendary or above.'},
    {icon:'♾️',name:'Prestige System',desc:'Beat the game and reset with 200+ permanent upgrades. Mobs get harder every prestige.'},
    {icon:'💰',name:'Steam Market Economy',desc:'Boss chest items are Steam tradeable with provably fair seeds. Blood Moon items carry premium stamps.'},
    {icon:'👁️',name:'The Watcher',desc:'Tracks every run across 12,000 years of cycles. Sends personalized Omens based on your history.'},
    {icon:'🌀',name:'Elemental Rifts',desc:'Random portals mid-wave. Place a counter-element tower in 15 seconds or face continuous mob spawns.'},
    {icon:'😴',name:'Idle + Active Modes',desc:'Runs in the background automatically. Active players clear 40% faster. Your choice, your outcome.'},
  ];

  return(<div className="page">
    <div className="hero-section">
      <Particles/>
      <div className="hero-glow"/>
      <div style={{position:'relative',zIndex:1}}>
        <div className="hero-eyebrow">⬡ &nbsp; {T('home.eyebrow')} &nbsp; ⬡</div>
        <h1 className="hero-title">REALM<br/>SIEGE</h1>
        <div className="hero-sub">{T('home.subtitle')}</div>
        <p className="hero-tagline">{T('home.tagline')}</p>
        <div className="hero-badges">
          <span className="badge bg">{T('home.in_dev')}</span>
          <span className="badge bm">Tower Defense</span>
          <span className="badge bm">Idle RPG</span>
          <span className="badge bm">Prestige System</span>
          <span className="badge bb">Steam Market</span>
        </div>
        <div className="hero-cta">
          <a href="#notify" className="btn btn-p">{T('home.cta1')}</a>
          <Link to="/wiki" className="btn btn-s">{T('home.cta2')}</Link>
        </div>
        <Countdown target={content.countdown_target} lang={L}/>
      </div>
    </div>

    <div className="divider"/>
    <section className="section">
      <div className="container">
        <div className="reveal">
          <div className="section-label">{T('home.status_label')}</div>
          <h2 className="section-title">{T('home.status_title')}</h2>
          <p className="section-intro">{T('home.status_intro')}</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'1rem',marginBottom:'2rem'}} className="reveal">
          {[[T('home.version'),content.version||'—'],[T('home.next_update'),content.next_update||'—',content.next_update_desc],[T('home.stage'),content.stage||'—',content.stage_desc]].map(([label,val,sub])=>(
            <div key={label} className="card">
              <div className="section-label" style={{marginBottom:'.38rem'}}>{label}</div>
              <div style={{fontFamily:'Cinzel,serif',fontSize:'1.1rem',fontWeight:700,color:'var(--gold)'}}>{val}</div>
              {sub&&<div style={{fontSize:'.82rem',color:'var(--muted)',marginTop:'.18rem'}}>{sub}</div>}
            </div>
          ))}
        </div>
        <div className="card reveal" style={{padding:'2rem'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'1.4rem'}}>
            <span style={{fontFamily:'Cinzel,serif',fontWeight:700,color:'#fff',fontSize:'.92rem'}}>{T('home.progress_title') || 'Overall Completion'}</span>
            <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'1.5rem',color:'var(--gold)'}}>{total}%</span>
          </div>
          {progress.map(item=>(
            <div key={item.id} className="prog-item">
              <div className="prog-header"><span className="prog-name">{item.name}</span><span className="prog-pct">{item.percentage}%</span></div>
              <div className="prog-track"><div className="prog-fill" style={{width:`${item.percentage}%`}}/></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="divider"/>
    <section className="section">
      <div className="container">
        <div className="reveal">
          <div className="section-label">{T('home.road_label')}</div>
          <h2 className="section-title">{T('home.road_title')}</h2>
          <p className="section-intro">{T('home.road_intro')}</p>
        </div>
        <div className="reveal">
          {[
            {ver:'v0.0.1',date:'Now',status:'active',title:'Core Prototype',items:[{t:'Isometric grid system',d:true},{t:'Mob pathfinding',d:true},{t:'Tower placement + shooting',d:true},{t:'Gold & HP economy',d:true},{t:'HUD display',d:true},{t:'Multiple tower types',d:false},{t:'Wave auto-progression',d:false},{t:'Main menu',d:false}]},
            {ver:'v0.1.0',date:'~3 Months',status:'upcoming',title:'Systems Alpha',items:[{t:'All 10 base towers'},{t:'10 fusion towers'},{t:'Elemental counter system'},{t:'3 levels designed'},{t:'Item system + heroes'},{t:'Skill tree prototype'},{t:'Ancient Contracts'}]},
            {ver:'v0.5.0',date:'~8 Months',status:'future',title:'Content Beta',items:[{t:'All 35 towers'},{t:'All 25 levels'},{t:'200+ mob types'},{t:'Full 1,000-node skill tree'},{t:'All 12 heroes + prestige'},{t:'Blood Moon, Rifts, Shrines'}]},
            {ver:'v1.0.0',date:'~18 Months',status:'future',title:'Steam Early Access',items:[{t:'Full pixel art + animations'},{t:'Sound design + music'},{t:'Steam Market integration'},{t:'Anti-exploit systems'},{t:'Full balance pass + launch'}]},
          ].map(phase=>(
            <div key={phase.ver} className="rm-phase">
              <div className="rm-meta">
                <div className="rm-ver">{phase.ver}</div>
                <div className="rm-date">{phase.date}</div>
                <span className={`badge ${phase.status==='active'?'bg':phase.status==='upcoming'?'bb':'bm'}`}>{phase.status==='active'?'In Progress':phase.status==='upcoming'?'Upcoming':'Planned'}</span>
              </div>
              <div className={`rm-content ${phase.status}`}>
                <div className="rm-title">{phase.title}</div>
                <ul className="rm-items">{phase.items.map((item,i)=><li key={i} className={item.d?'done':''}>{item.t}</li>)}</ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="divider"/>
    <section className="section">
      <div className="container">
        <div className="reveal">
          <div className="section-label">{T('home.feat_label')}</div>
          <h2 className="section-title">{T('home.feat_title')}</h2>
          <p className="section-intro">{T('home.feat_intro')}</p>
        </div>
        <div className="ga reveal">
          {features.map(f=>(
            <div key={f.name} className="card">
              <div style={{fontSize:'1.6rem',marginBottom:'.65rem'}}>{f.icon}</div>
              <div className="card-title">{f.name}</div>
              <div className="card-sub">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="divider"/>
    <section className="section" id="notify">
      <div className="container">
        <div className="nl reveal">
          <div className="nl-title">{T('home.nl_title')}</div>
          <p className="nl-sub">{T('home.nl_sub')}</p>
          <form onSubmit={subscribe} className="nl-form">
            <input className="form-input nl-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder={T('home.nl_ph')} required/>
            <button className="btn btn-p" type="submit">{T('home.nl_btn')}</button>
          </form>
          {msg&&<p style={{marginTop:'1rem',fontSize:'.85rem',color:'var(--gold)'}}>{msg}</p>}
          {err&&<p style={{marginTop:'1rem',fontSize:'.85rem',color:'var(--red)'}}>{err}</p>}
        </div>
        <div style={{background:'linear-gradient(135deg,rgba(30,58,95,0.4),rgba(13,18,32,0.6))',border:'1px solid rgba(78,154,241,0.2)',borderRadius:4,padding:'2.5rem',textAlign:'center',marginTop:'2rem'}} className="reveal">
          <div style={{fontFamily:'Cinzel,serif',fontSize:'1.05rem',fontWeight:700,color:'#fff',marginBottom:'.45rem'}}>{T('home.steam_title')}</div>
          <p style={{color:'var(--muted)',fontSize:'.9rem',marginBottom:'1.4rem'}}>{T('home.steam_sub')}</p>
          <a href="#" className="btn btn-s">{T('home.steam_btn')}</a>
        </div>
      </div>
    </section>

    <footer>
      <div className="footer-logo">⬡ REALM SIEGE</div>
      <div className="footer-copy">{T('footer.copy')}</div>
      <div className="footer-links">
        {[['Lore','/lore'],['Wiki','/wiki'],['Towers','/towers'],['Bestiary','/bestiary'],['Items','/items'],['Heroes','/heroes'],['Devlog','/devlog']].map(([l,p])=>(
          <Link key={p} to={p}>{l}</Link>
        ))}
      </div>
    </footer>
  </div>);
}
