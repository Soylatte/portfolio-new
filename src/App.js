import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Contact from './components/contact';
import Skills from './components/skills';
import Projects from './components/project';


function App() {


  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' />
        <Route path='/skills' />
        <Route path='/projects' />
        <Route path='/contact' />
      </Routes>
      <Hero />
      <Skills />
      <br/>
      <br />
      <Projects />
      <br />
      <br />
      <br />
      <br />
      <Contact />
      <br/>
      <br/>
      <br/>
      <Footer />
      </Router>

      </div>

  );
}

export default App;
