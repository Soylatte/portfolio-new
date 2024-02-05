import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import { useEffect, useState } from 'react';
import Contact from './components/contact';

function App() {
  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem('isdark'))
  );

  useEffect(()=> {
    localStorage.setItem('isdark', JSON.stringify(isdark))
  },[isdark])
  return (
    <div className="App bg-#CAEDFF">
      <Router>
      <Navbar />
      <input
      type='checkbox'
      checked={isdark}
      value="synthwave" className="prefixtoggle prefixtheme-controller"
      onChange={()=> setIsdark(!isdark)}/>
      <Routes>
        <Route path='/' />
        <Route path='/skills'/>
        <Route path='/projects'/>
        <Route path='/contact'/>
      </Routes>
      <Hero />
      <Home />
      <Contact />
      <Footer />
      </Router>
      </div>
  );
}

export default App;
