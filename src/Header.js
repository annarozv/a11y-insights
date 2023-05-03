import './App.css';
import HeaderLogo from './images/icon.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header>
        <Link className='header-homelink' to='/' aria-label='Galvenā lapa'>
          <img 
            className='header-icon' 
            src={HeaderLogo} 
            alt='Vietnes logo: cilvēka siluets aplī, cilvēka kreisā roka un kreisā kāja veido P burtu (Piekļūstamība)'
          />
          <span className='header-title'>Piekļūstamības Atziņas</span>   
        </Link>     
        <nav className='Nav-bar'>
          <ul className='Nav-links'>
              <Link className='Nav-link' to='/tutorials'>
                  <li>Pamācības</li>
              </Link>
              <Link className='Nav-link' to='/resources'>
                  <li>Resursi</li>
              </Link>
              <Link className='Nav-link' to='/about'>
                  <li>Par mums</li>
              </Link>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  