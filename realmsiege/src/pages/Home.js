import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { sb } from '../supabase';

function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = Array.from({length:60},() => ({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height + canvas.height,
      size: Math.random()*2+.5,
      speed: Math.random()*.4+.2,
      opacity: Math.random()*.5+.1,
      color: Math.random() > .5 ? '#c8960c' : '#4e9af1',
    }));
    let raf;
    function draw() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < -10) { p.y = canvas.height+10; p.x = Math.random()*canvas.width; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    draw();
    const resize = () => { canvas.width=window.innerWidth; canvas.height=window.innerHeight; };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  },[]);
  return <canvas ref={canvasRef} style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:0}} />;
}

function Countdown({ target }) {
  const [time, setTime] = useState({ d:'--',h:'--',m:'--',s:'--' });
  useEffect(() => {
    if (!target) return;
    const tick = () => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) { setTime({d:'00',h:'00',m:'00',s:'00'}); return; }
      const pad = n => String(Math.floor(n)).padStart(2,'0');
      setTime({ d:pad(diff/86400000), h:pad((diff%86400000)/3600000), m:pad((diff%3600000)/60000), s:pad((diff%60000)/1000) });
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  },[target]);
  return (
    <div style={{marginTop:'2.5rem'}}>
      <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',letterSpacing:'.3em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'1rem',textAlign:'center'}}>// Next Major Update</div>
      <div className="countdown">
        {[['d','Days'],['h','Hours'],['m','Minutes'],['s','Seconds']].map(([k,label],i) => (
          <>
            {i>0 && <span key={'sep'+i} className="cd-sep">:</span>}
            <div key={k} className="cd-unit">
              <span className="cd-num">{time[k]}</span>
              <div className="cd-label">{label}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

function ProgressSection({ items }) {
  const total = items.length ? Math.round(items.reduce((a,b)=>a+b.percentage,0)/items.length) : 0;
  return (
    <div className="card" style={{padding:'2rem'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'2rem'}}>
        <span style={{fontFamily:'Cinzel,serif',fontWeight:700,color:'#fff'}}>Overall Completion — v0.0.1</span>
        <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'1.6rem',color:'var(--gold)'}}>{total}%</span>
      </div>
      {items.map(item => (
        <div key={item.id} className="prog-item">
          <div className="prog-header">
            <span className="prog-name">{item.name}</span>
            <span className="prog-pct">{item.percentage}%</span>
          </div>
          <div className="prog-track"><div className="prog-fill" style={{width:`${item.percentage}%`}} /></div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [content, setContent] = useState({});
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    sb.from('site_content').select('*').then(({data}) => {
      const c = {}; (data||[]).forEach(r => c[r.id]=r.value); setContent(c);
    });
    sb.from('progress_items').select('*').order('sort_order').then(({data}) => setProgress(data||[]));
    // Scroll reveal
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:.1});
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  },[]);

  const features = [
    {icon:'⚗️',name:'35 Elemental Towers',desc:'10 base elements fuse into 25 unique combinations. Each fusion has abilities impossible to get any other way.'},
    {icon:'🌳',name:'1,000+ Skill Nodes',desc:'Eight major branches. Every run builds a different tree. It resets when you beat the game.'},
    {icon:'📜',name:'Ancient Contracts',desc:'Every level you sign a binding deal. Brutal penalties, massive rewards. On Hard mode, you sign two per level.'},
    {icon:'🩸',name:'Blood Moon Events',desc:'Randomly the sky turns red. All mob HP doubles — but every drop is Legendary or above.'},
    {icon:'♾️',name:'Prestige System',desc:'Beat the game and reset with 200+ permanent upgrades. Mobs get harder every prestige. Rewards scale to match.'},
    {icon:'💰',name:'Steam Market Economy',desc:'Boss chest items are Steam tradeable with provably fair seeds. Blood Moon items carry premium stamps.'},
    {icon:'👁️',name:'The Watcher',desc:'Tracks every run. After 5 runs it generates personalized Omens — passive buffs tailored to your playstyle.'},
    {icon:'🌀',name:'Elemental Rifts',desc:'Random portals mid-wave. Place a counter-element tower in 15 seconds or face continuous mob spawns.'},
    {icon:'😴',name:'Idle + Active',desc:'Runs in the background automatically. Active players clear 40% faster. Your choice, your outcome.'},
  ];

  return (
    <div className="page">
      {/* HERO */}
      <div className="hero">
        <Particles />
        <div className="hero-glow" />
        <div style={{position:'relative',zIndex:1}}>
          <div className="hero-eyebrow">⬡ &nbsp; An Isometric Tower Defense RPG &nbsp; ⬡</div>
          <h1 className="hero-title">REALM<br/>SIEGE</h1>
          <div className="hero-sub">Coming to Steam &nbsp;·&nbsp; PC &nbsp;·&nbsp; 16-bit Pixel Art</div>
          <p className="hero-tagline">A thousand skills. Elemental towers that fuse and evolve. Bosses that curse the land. Mobs that resist you.</p>
          <div className="hero-badges">
            <span className="badge badge-gold">In Development</span>
            <span className="badge badge-muted">Tower Defense</span>
            <span className="badge badge-muted">Idle RPG</span>
            <span className="badge badge-muted">Prestige System</span>
            <span className="badge badge-blue">Steam Market</span>
          </div>
          <div className="hero-cta">
            <a href="#notify" className="btn btn-primary">Get Notified</a>
            <Link to="/wiki" className="btn btn-secondary">Explore Wiki</Link>
          </div>
          <Countdown target={content.countdown_target} />
        </div>
      </div>

      <div className="divider" />

      {/* VERSION STATUS */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <div className="section-label">// Development Status</div>
            <h2 className="section-title">Current Build Progress</h2>
            <p className="section-intro">Live progress updated directly from the developer. No marketing fluff.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'1rem',marginBottom:'2rem'}} className="reveal">
            {[
              ['Current Version', content.version||'—'],
              ['Next Update', content.next_update||'—', content.next_update_desc],
              ['Stage', content.stage||'—', content.stage_desc],
            ].map(([label,val,sub]) => (
              <div key={label} className="card">
                <div className="section-label" style={{marginBottom:'.4rem'}}>{label}</div>
                <div style={{fontFamily:'Cinzel,serif',fontSize:'1.2rem',fontWeight:700,color:'var(--gold)'}}>{val}</div>
                {sub && <div style={{fontSize:'.85rem',color:'var(--muted)',marginTop:'.2rem'}}>{sub}</div>}
              </div>
            ))}
          </div>
          <div className="reveal"><ProgressSection items={progress} /></div>
        </div>
      </section>

      <div className="divider" />

      {/* ROADMAP */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <div className="section-label">// Roadmap</div>
            <h2 className="section-title">What's Being Built</h2>
            <p className="section-intro">Transparent development — every phase, every feature, every milestone.</p>
          </div>
          <div className="roadmap reveal">
            {[
              {ver:'v0.0.1',date:'Now',status:'active',title:'Core Prototype',items:[{t:'Isometric grid system',done:true},{t:'Mob pathfinding',done:true},{t:'Tower placement',done:true},{t:'Tower shooting',done:true},{t:'Gold economy',done:true},{t:'Base HP system',done:true},{t:'HUD & UI',done:false},{t:'Multiple tower types',done:false},{t:'Wave auto-progression',done:false},{t:'Main menu',done:false}]},
              {ver:'v0.1.0',date:'~3 Months',status:'upcoming',title:'Systems Alpha',items:[{t:'All 10 base towers'},{t:'10 fusion towers'},{t:'Elemental counter system'},{t:'3 levels designed'},{t:'Item system'},{t:'Hero system'},{t:'Skill tree prototype'},{t:'Ancient Contracts'}]},
              {ver:'v0.5.0',date:'~8 Months',status:'future',title:'Content Beta',items:[{t:'All 35 towers'},{t:'All 25 levels'},{t:'200+ mob types'},{t:'Full skill tree (1,000 nodes)'},{t:'All 12 heroes'},{t:'Prestige system'},{t:'Blood Moon events'},{t:'AI pixel art'}]},
              {ver:'v1.0.0',date:'~18 Months',status:'future',title:'Steam Early Access',items:[{t:'Full pixel art & animations'},{t:'Sound design & music'},{t:'Steam Market integration'},{t:'Anti-exploit systems'},{t:'Full balancing pass'},{t:'Launch!'}]},
            ].map(phase => (
              <div key={phase.ver} className="rm-phase">
                <div className="rm-meta">
                  <div className="rm-ver">{phase.ver}</div>
                  <div className="rm-date">{phase.date}</div>
                  <span className={`badge badge-${phase.status==='active'?'gold':phase.status==='upcoming'?'blue':'muted'}`}>{phase.status==='active'?'In Progress':phase.status==='upcoming'?'Upcoming':'Planned'}</span>
                </div>
                <div className={`rm-content ${phase.status}`}>
                  <div className="rm-title">{phase.title}</div>
                  <ul className="rm-items">
                    {phase.items.map((item,i) => <li key={i} className={item.done?'done':''}>{item.t}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FEATURES */}
      <section className="section">
        <div className="container">
          <div className="reveal">
            <div className="section-label">// Features</div>
            <h2 className="section-title">What Makes It Different</h2>
            <p className="section-intro">Every system designed to reward mastery and punish carelessness.</p>
          </div>
          <div className="grid-auto reveal">
            {features.map(f => (
              <div key={f.name} className="card">
                <div style={{fontSize:'1.8rem',marginBottom:'.7rem'}}>{f.icon}</div>
                <div className="card-title">{f.name}</div>
                <div className="card-sub">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* NEWSLETTER */}
      <section className="section" id="notify">
        <div className="container">
          <NewsletterBlock />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{borderTop:'1px solid var(--border)',padding:'3rem 2rem',textAlign:'center',position:'relative',zIndex:1}}>
        <div style={{fontFamily:'Cinzel,serif',fontWeight:900,fontSize:'1.4rem',color:'var(--gold)',letterSpacing:'.12em',marginBottom:'.5rem'}}>⬡ REALM SIEGE</div>
        <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',letterSpacing:'.2em',textTransform:'uppercase',color:'var(--muted)'}}>© 2026 Realm Siege · All Rights Reserved · Built with Godot 4 · Coming to Steam</div>
        <div style={{marginTop:'1rem',display:'flex',gap:'1.5rem',justifyContent:'center'}}>
          <Link to="/wiki" style={{color:'var(--muted)',fontSize:'.8rem',textDecoration:'none'}}>Wiki</Link>
          <Link to="/towers" style={{color:'var(--muted)',fontSize:'.8rem',textDecoration:'none'}}>Towers</Link>
          <Link to="/bestiary" style={{color:'var(--muted)',fontSize:'.8rem',textDecoration:'none'}}>Bestiary</Link>
          <Link to="/devlog" style={{color:'var(--muted)',fontSize:'.8rem',textDecoration:'none'}}>Devlog</Link>
        </div>
      </footer>
    </div>
  );
}

function NewsletterBlock() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');

  async function submit(e) {
    e.preventDefault();
    setMsg(''); setErr('');
    if (!email.includes('@')) { setErr('Please enter a valid email.'); return; }
    const { error } = await sb.from('subscribers').insert({ email });
    if (error?.code === '23505') setErr('Already subscribed!');
    else if (error) setErr('Something went wrong.');
    else { setMsg('✓ You\'ll be notified when we launch.'); setEmail(''); }
  }

  return (
    <div className="newsletter reveal">
      <div className="nl-title">Be First to Know</div>
      <p className="nl-sub">Get notified when the Steam page goes live and when major updates drop. No spam.</p>
      <form onSubmit={submit} className="nl-form">
        <input className="form-input nl-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" required />
        <button className="btn btn-primary" type="submit">Notify Me</button>
      </form>
      {msg && <p style={{marginTop:'1rem',fontSize:'.85rem',color:'var(--gold)'}}>{msg}</p>}
      {err && <p style={{marginTop:'1rem',fontSize:'.85rem',color:'var(--red)'}}>{err}</p>}
    </div>
  );
}
