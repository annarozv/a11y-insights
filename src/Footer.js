import { Link } from 'react-router-dom';
import './App.css';

function Footer () {
 return (
    <footer>
        <span className='footer-copyright'>© 2023 Anna Rozvadovska</span>
        <Link className='footer-link' to='/navigation'>
            Vietnes karte
        </Link>
    </footer>
 );
}

export default Footer;
