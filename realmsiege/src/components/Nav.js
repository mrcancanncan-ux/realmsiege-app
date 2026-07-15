import{useState}from'react';
import{Link,useLocation}from'react-router-dom';
import{useAuth}from'../AuthContext';
import{t,getLang,setLang}from'../i18n/translations';
import AuthModal from'./AuthModal';
import AdminPanel from'./AdminPanel';
export default function Nav({onLang}){
const{user,profile,isAdmin,signOut}=useAuth();
const[showAuth,setShowAuth]=useState(false);
const[showAdmin,setShowAdmin]=useState(false);
const[lang,setL]=useState(getLang());
const loc=useLocation();
const a=p=>loc.pathname===p||loc.pathname.startsWith(p+'/')?'active':'';
function sw(l){setLang(l);setL(l);if(onLang)onLang(l);}
const T=k=>t(k,lang);
return(<>
<nav className="nav">
  <Link to="/" className="nav-logo">⬡ REALM SIEGE</Link>
  <ul className="nav-links">
    <li><Link to="/" className={a('/')}>{T('nav.home')}</Link></li>
    <li><Link to="/lore" className={a('/lore')}>{T('nav.lore')}</Link></li>
    <li><Link to="/wiki" className={a('/wiki')}>{T('nav.wiki')}</Link></li>
    <li><Link to="/towers" className={a('/towers')}>{T('nav.towers')}</Link></li>
    <li><Link to="/bestiary" className={a('/bestiary')}>{T('nav.bestiary')}</Link></li>
    <li><Link to="/items" className={a('/items')}>{T('nav.items')}</Link></li>
    <li><Link to="/loot" className={a('/loot')}>{T('nav.loot')}</Link></li>
    <li><Link to="/heroes" className={a('/heroes')}>{T('nav.heroes')}</Link></li>
    <li><Link to="/devlog" className={a('/devlog')}>{T('nav.devlog')}</Link></li>
    <li style={{display:'flex',gap:'.28rem'}}>
      <button className={`lang-btn${lang==='en'?' active':''}`} onClick={()=>sw('en')}>EN</button>
      <button className={`lang-btn${lang==='tr'?' active':''}`} onClick={()=>sw('tr')}>TR</button>
    </li>
    {user
      ?<li><button className="nav-btn" onClick={signOut}>{profile?.username||'Account'} ✕</button></li>
      :<li><button className="nav-btn" onClick={()=>setShowAuth(true)}>{T('nav.signin')}</button></li>}
    {isAdmin&&<li><button className="nav-btn admin" onClick={()=>setShowAdmin(v=>!v)}>⚙ {T('nav.admin')}</button></li>}
  </ul>
</nav>
{showAuth&&<AuthModal onClose={()=>setShowAuth(false)} lang={lang}/>}
{showAdmin&&<AdminPanel onClose={()=>setShowAdmin(false)}/>}
</>);}
