import { Link } from "react-router-dom";

function SubHeader() {
  return (
    <nav className='Nav-sub'>
        <ul className='Nav-sub-links'>
          <li>
            <Link className="Nav-sub-link" to='/designers'>Dizaineriem</Link>
          </li>
          <li> 
            <Link className="Nav-sub-link" to='/content-makers'>Satura veidotājiem</Link>
          </li> 
          <li>
            <Link className="Nav-sub-link" to='/developers'>Programmētājiem</Link> 
          </li>
          <li>
            <Link className="Nav-sub-link" to='/testers'>Testētājiem</Link>
          </li>
        </ul>
      </nav>
  );
}

export default SubHeader;
