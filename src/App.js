import './App.css';
import Header from './Header';
import About from './pages/About';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Tutorials from './pages/Tutorials';
import Resources from './pages/Resources';
import Home from './pages/Home';
import Footer from './Footer';
import Sitemap from './pages/Sitemap';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='Main'>
          <Routes>
              <Route exact path='/'  Component={Home} />
              <Route path='/tutorials' Component={Tutorials} />
              <Route path='/resources' Component={Resources} />
              <Route path='/about' Component={About} />
              <Route path='/navigation' Component={Sitemap} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
