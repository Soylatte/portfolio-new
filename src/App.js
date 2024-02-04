import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';

function App() {
  return (
    <div className="App bg-#CAEDFF">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path='/skills'/>
        <Route path='/projects'/>
        <Route path='/contact'/>
      </Routes>
      <Hero />
      <Home />
      <Footer />
      </Router>
      </div>
  );
}

export default App;
