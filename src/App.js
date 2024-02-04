import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Hero from './components/hero';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path='/skills'/>
        <Route path='/projects'/>
        <Route path='/contact'/>
      </Routes>
      <Hero />
      </Router>
      </div>
  );
}

export default App;
