import './App.css';
import { BrowserRouter as Router,Routes,Route, useNavigate, useLocation } from 'react-router-dom';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Contact from './components/contact';
import Skills from './components/skills';
import Projects from './components/project';
import { AnimatePresence } from "framer-motion";

function App() {

  return (
    <div className="App">
      <Router>
      <AnimatePresence>
      <Navbar/>
      <Routes>
        <Route path='/' />
        <Route path='/skills'/>
        <Route path='/projects'/>
        <Route path='/contact'/>
      </Routes>
      </AnimatePresence>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </Router>
      </div>

  );
}

export default App;
