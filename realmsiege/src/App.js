import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Nav from './components/Nav';
import Home from './pages/Home';
import Lore from './pages/Lore';
import Wiki from './pages/Wiki';
import HowToPlay from './pages/HowToPlay';
import Elements from './pages/Elements';
import Towers from './pages/Towers';
import Bestiary from './pages/Bestiary';
import Items from './pages/Items';
import Loot from './pages/Loot';
import Heroes from './pages/Heroes';
import Devlog from './pages/Devlog';
import Regions from './pages/Regions';
import Prestige from './pages/Prestige';
import './styles.css';

function NotFound() {
  return (
    <div className="page" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'100vh',textAlign:'center'}}>
      <div style={{fontFamily:'Cinzel,serif',fontSize:'5rem',fontWeight:900,color:'var(--gold-dim)',lineHeight:1}}>404</div>
      <div style={{fontFamily:'Cinzel,serif',fontSize:'1.4rem',color:'#fff',margin:'1rem 0'}}>Page Not Found</div>
      <p style={{color:'var(--muted)',marginBottom:'2rem'}}>The realm you seek does not exist.</p>
      <a href="/" className="btn btn-secondary">Return Home</a>
    </div>
  );
}

export default function App() {
  const [, setLang] = useState('en');
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav onLangChange={setLang} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lore" element={<Lore />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/wiki/how-to-play" element={<HowToPlay />} />
          <Route path="/wiki/elements" element={<Elements />} />
          <Route path="/wiki/regions" element={<Regions />} />
          <Route path="/wiki/prestige" element={<Prestige />} />
          <Route path="/wiki/contracts" element={<Wiki />} />
          <Route path="/wiki/blood-moon" element={<Wiki />} />
          <Route path="/wiki/rifts" element={<Wiki />} />
          <Route path="/wiki/steam-market" element={<Wiki />} />
          <Route path="/towers" element={<Towers />} />
          <Route path="/bestiary" element={<Bestiary />} />
          <Route path="/items" element={<Items />} />
          <Route path="/loot" element={<Loot />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/devlog" element={<Devlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
