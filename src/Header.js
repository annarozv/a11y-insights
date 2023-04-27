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
        <nav className='nav-bar'>
          <ul className='nav-links'>
              <Link to='/tutorials'>
                  <li className='nav-link'>Pamācības</li>
              </Link>
              <Link to='/resources'>
                  <li className='nav-link'>Resursi</li>
              </Link>
              <Link to='/about'>
                  <li className='nav-link'>Par mums</li>
              </Link>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  