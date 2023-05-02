import { useEffect } from "react";
import { Link } from "react-router-dom";
import Resources from "./Resources";

function About() {
  useEffect(() => {
    document.title = 'Piekļūstamības atziņas | Par mums';
  }, []);

  return (
    <div className="About">
      <div>
        <h1>Par mums</h1>
      </div>
      <div className="Main-fragment">
        <h2>Kas ir “Piekļūstamības atziņas”?</h2>
        <p>“Piekļūstamības atziņas” ir piekļūstams informatīvs tīmekļa resurss, kura mērķis ir vienkāršiem vārdiem paskaidrot, kas ir piekļūstamība tīmeklī, kāpēc tā ir svarīga un kādā veidā to ir iespējams nodrošināt.</p>
        <p>Šis resurss tika izstrādāts kā praktiska daļa bakalaura darba “Tīmekļa vietņu piekļūstamības nodrošināšana” ietvaros. Tīmekļa vietni un tās saturu izstrādāja Latvijas Universitātes Datorikas fakultātes studente Anna Rozvadovska.</p>
      </div>
      <div className="Main-fragment">
        <h2>Kas ir piekļūstamība tīmeklī?</h2>
        <p>Tīmekļa piekļūstamība (angliski <span lang="en"><i>Web Accessibility</i></span>) ir prakse, kuras mērķis ir nodrošināt vienlīdzīgu piekļuvi Vispasaules tīmeklim visiem tīmekļa lietotājiem, iekļaujot cilvēkus ar dažāda veida ierobežojumiem, pastāvīgajiem vai īslaicīgajiem.</p>
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
        <ul className="Main-list">
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
        <p>Lapā <Link className="Main-link" to='/resources'>Resursi</Link> ir iespējams atrast saites uz noderīgiem resursiem, kas attiecas uz Latvijas valsts tiesiskajiem regulējumiem tīmekļa piekļūstamības jomā, kā arī tīmekļa satura piekļūstamības nodrošināšanas vadlīnijas un citus informatīvus resursus.</p>
      </div>
    </div>
  );
}

export default About;
