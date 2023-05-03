import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = 'Piekļūstamības atziņas';
  }, []);

  return (
    <div className="Home">
      <>
        <h1>Informatīvs resurss "Piekļūstamības Atziņas"</h1>
        <div className="Main-fragment">
          <h2>Kas ir piekļūstamība Tīmeklī?</h2>
          <p>Tīmekļa piekļūstamība (angliski <span lang="en"><i>Web Accessibility</i></span>) ir prakse, kuras mērķis ir nodrošināt vienlīdzīgu piekļuvi Vispasaules tīmeklim visiem Tīmekļa lietotājiem, iekļaujot cilvēkus ar dažāda veida ierobežojumiem, pastāvīgajiem vai īslaicīgajiem.</p>
        </div>
        <div className="Main-fragment">
          <h2>Kāpēc tieši “Atziņas”?</h2>
          <p>Atziņa (angliski <span lang="en"><i>Insight</i></span>) ir dziļš secinājums, uzskats vai atzinums par kaut kādu parādību, kas ir rādies novērojumu vai pētījumu rezultātā.</p>
          <p>Šī informatīva resursa mērķis ir sniegt <i>atziņas</i> par tīmekļa piekļūstamību.</p>
        </div>    
        <div className="Main-fragment">
          <h2>Ko šeit ir iespējams atrast?</h2>
          <p>
            Šajā tīmekļa vietnē ir iespējams atrast pamācības jeb rekomendācijas:
          </p> 
          <ul className="Main-list" role="list">
            <li>
              <Link className="Main-link" to='/designers'>Tīmekļa vietņu dizaineriem</Link>
            </li>
            <li> 
              <Link className="Main-link" to='/content-makers'>Tīmekļa satura veidotājiem</Link>
            </li> 
            <li>
              <Link className="Main-link" to='/developers'>Programmētājiem</Link> 
            </li>
            <li>
              <Link className="Main-link" to='/testers'>Testētājiem</Link>
            </li>
          </ul> 
          <p>
            Pamācības ir ilustrētās ar piemēriem – attēliem un koda fragmentiem.
          </p>
          <p>Lapā <Link className="Main-link" to='/resources'>Resursi</Link> ir iespējams atrast saites uz noderīgiem resursiem: Latvijas valsts tiesiskajiem regulējumiem tīmekļa piekļūstamības jomā, tīmekļa satura piekļūstamības nodrošināšanas vadlīnijām un citiem.</p>
        </div>
      </>
    </div>
  );
}

export default Home;
