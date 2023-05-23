import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  useEffect(() => {
      document.title = 'Vietnes karte | Piekļūstamības atziņas';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="Navigation">
      <h1>Vietnes karte</h1>
      <ul className="Main-list" role="navigation">
        <li>
          <Link className="Main-link" to='/'>Sākumlapa</Link>
        </li>
        <li>
          <Link className="Main-link" to='/tutorials'>Piekļūstamības nodrošināšanas ieteikumi</Link>
          <ul className="Main-list Main-list__nested">
            <li>
              <Link className="Main-link" to='/designers'>Piekļūstamības nodrošināšanas ieteikumi dizaineriem</Link>
            </li>
            <li>
              <Link className="Main-link" to='/content-makers'>Piekļūstamības nodrošināšanas ieteikumi satura veidotājiem</Link>
            </li>
            <li>
              <Link className="Main-link" to='/developers'>Piekļūstamības nodrošināšanas ieteikumi programmētājiem</Link>
            </li>
            <li>
              <Link className="Main-link" to='/testers'>Piekļūstamības nodrošināšanas ieteikumi testētājiem</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="Main-link" to='/resources'>Inforesursi</Link>
        </li>
        <li>
          <Link className="Main-link" to='/about'>Par mums</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
