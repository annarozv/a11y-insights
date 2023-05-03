import './App.css';
import Header from './Header';
import About from './pages/About';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tutorials from './pages/Tutorials';
import Resources from './pages/Resources';
import Home from './pages/Home';
import Footer from './Footer';
import Navigation from './pages/Navigation';
import NotFound from './pages/NotFound';
import { useRef } from 'react';
import Developers from './pages/tutorials/Developers';
import Designers from './pages/tutorials/Designers';
import ContentMakers from './pages/tutorials/ContentMakers';
import Testers from './pages/tutorials/Testers';

function App() {
  const refMain = useRef(null);

  const focusMain = () => {
    refMain.current.focus();
  }

  return (
    <Router>
      <div className="App">
        <Link className="Accessible-link" onClick={focusMain}>Pāriet pie galvenās satura daļas</Link>
        <Link className="Accessible-link" to='/navigation'>Vietnes karte</Link>
        <Header />
        <div id='main' tabIndex='0' ref={refMain} className='Main'>
          <Routes>
              <Route exact path='/'  Component={Home} />
              <Route path='/tutorials' Component={Tutorials} />
              <Route path='/designers' Component={Designers} />
              <Route path='/content-makers' Component={ContentMakers} />
              <Route path='/developers' Component={Developers} />
              <Route path='/testers' Component={Testers} />
              <Route path='/resources' Component={Resources} />
              <Route path='/about' Component={About} />
              <Route path='/navigation' Component={Navigation} />
              <Route path='*' Component={NotFound} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
