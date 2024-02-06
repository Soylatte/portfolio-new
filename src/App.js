import './App.css';
import { BrowserRouter as Router,Routes,Route, useNavigate, useLocation } from 'react-router-dom';
import Hero from './components/hero';
import Navbar from './components/navbar';

import Footer from './components/footer';
import Contact from './components/contact';
import Skills from './components/skills';
import Projects from './components/project';
import { motion } from "framer-motion";

function App() {

  const isSelected = true;

  return (
    <div className="App bg-#CAEDFF">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' />
        <Route path='/skills'/>
        <Route path='/projects'/>
        <Route path='/contact'/>
      </Routes>
      <motion.div
    className="box"
    animate={{ y: 100 }}
    transition={{ type: "spring" }}
  >
      <Hero />
      </motion.div>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </Router>
      </div>

  );
}

export default App;
