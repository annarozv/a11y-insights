import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  useEffect(() => {
      document.title = 'Piekļūstamības atziņas | Vietnes karte';
      }, []);

 return (
  <div className="Navigation">
    <h1>Vietnes karte</h1>
    <ul className="Main-list" role="list">
      <li>
        <Link className="Main-link" to='/'>Sākumlapa</Link>
      </li>
      <li>
        <Link className="Main-link" to='/tutorials'>Pamācības</Link>
        <ul className="Main-list Main-list__nested" role="list">
          <li>
            <Link className="Main-link" to='/designers'>Pamācības dizaineriem</Link>
          </li>
          <li>
            <Link className="Main-link" to='/content-makers'>Pamācības satura veidotājiem</Link>
          </li>
          <li>
            <Link className="Main-link" to='/developers'>Pamācības programmētājiem</Link>
          </li>
          <li>
            <Link className="Main-link" to='/testers'>Pamācības testētājiem</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link className="Main-link" to='/resources'>Resursi</Link>
      </li>
      <li>
        <Link className="Main-link" to='/about'>Par mums</Link>
      </li>
    </ul>
  </div>
 );
}

export default Navigation;
