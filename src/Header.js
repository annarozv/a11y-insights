import './App.css';
import HeaderLogo from './images/icon.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link className='Header-homelink' to='/' aria-label='Galvenā lapa'>
        <img 
          className='Header-icon' 
          src={HeaderLogo} 
          alt='Vietnes logo: cilvēka siluets aplī, cilvēka kreisā roka un kreisā kāja veido P burtu (Piekļūstamība)'
        />
        <span className='Header-title'>Piekļūstamības Atziņas</span>   
      </Link>     
      <nav className='Nav-bar'>
        <ul className='Nav-links'>
          <li className='Nav-dropping-link'>
            <Link className='Nav-link' to='/tutorials'>
                Pamācības
            </Link>
          </li>
          <li>
            <Link className='Nav-link' to='/resources'>
                Inforesursi
            </Link>
          </li>
          <li>
            <Link className='Nav-link' to='/about'>
                Par mums
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
  
export default Header;
  