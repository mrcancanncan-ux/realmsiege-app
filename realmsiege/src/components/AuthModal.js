import{useState}from'react';
import{sb}from'../supabase';
import{t}from'../i18n/translations';
export default function AuthModal({onClose,lang}){
const[tab,setTab]=useState('signin');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[username,setUsername]=useState('');
const[err,setErr]=useState('');
const[ok,setOk]=useState('');
const[loading,setLoading]=useState(false);
const T=k=>t(k,lang);
async function signIn(e){e.preventDefault();setErr('');setLoading(true);
const{error}=await sb.auth.signInWithPassword({email,password});
setLoading(false);if(error)setErr(error.message);else onClose();}
async function signUp(e){e.preventDefault();setErr('');setLoading(true);
if(!username.trim()){setErr(T('auth.username_req'));setLoading(false);return;}
const{data,error}=await sb.auth.signUp({email,password});
if(error){setErr(error.message);setLoading(false);return;}
if(data.user){await sb.from('profiles').insert({id:data.user.id,username:username.trim(),is_admin:false});setOk(T('auth.confirm'));}
setLoading(false);}
return(<div className="modal-overlay active" onClick={e=>e.target===e.currentTarget&&onClose()}>
<div className="modal">
  <button className="modal-close" onClick={onClose}>✕</button>
  <h2 style={{fontFamily:'Cinzel,serif',fontSize:'1.15rem',color:'#fff',marginBottom:'.28rem'}}>{T('auth.join')}</h2>
  <p style={{fontSize:'.86rem',color:'var(--muted)',marginBottom:'1.4rem'}}>{T('auth.join_sub')}</p>
  <div className="tabs" style={{marginBottom:'1.4rem'}}>
    <button className={`tab${tab==='signin'?' active':''}`} onClick={()=>setTab('signin')}>{T('auth.signin')}</button>
    <button className={`tab${tab==='signup'?' active':''}`} onClick={()=>setTab('signup')}>{T('auth.signup')}</button>
  </div>
  {tab==='signin'?(<form onSubmit={signIn}>
    <div className="form-group"><label className="form-label">{T('auth.email')}</label><input className="form-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" required/></div>
    <div className="form-group"><label className="form-label">{T('auth.password')}</label><input className="form-input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" required/></div>
    {err&&<p className="form-err">{err}</p>}
    <button className="btn btn-p btn-full" type="submit" disabled={loading}>{loading?T('auth.signing_in'):T('auth.signin')}</button>
  </form>):(<form onSubmit={signUp}>
    <div className="form-group"><label className="form-label">{T('auth.username')}</label><input className="form-input" value={username} onChange={e=>setUsername(e.target.value)}/></div>
    <div className="form-group"><label className="form-label">{T('auth.email')}</label><input className="form-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></div>
    <div className="form-group"><label className="form-label">{T('auth.password')}</label><input className="form-input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></div>
    {err&&<p className="form-err">{err}</p>}
    {ok&&<p className="form-ok">{ok}</p>}
    <button className="btn btn-p btn-full" type="submit" disabled={loading}>{loading?T('auth.creating'):T('auth.signup')}</button>
  </form>)}
</div></div>);}
