import { Link } from 'react-router-dom';

function Footer () {
 return (
    <footer>
        <span className='Footer-copyright'>© 2023 Anna Rozvadovska</span>
        <Link className='Footer-link' to='/navigation'>
            Vietnes karte
        </Link>
    </footer>
 );
}

export default Footer;
