import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = 'Piekļūstamības atziņas';
  }, []);

  return (
    <div className="Home">
      <h1>Informatīvs resurss "Piekļūstamības Atziņas"</h1>
      <div className="Main-fragment">
        <h2>Kas ir Piekļūstamība?</h2>
        <p>Tīmekļa piekļūstamība (angliski <span lang="en"><i>Web Accessibility</i></span>) ir prakse, kuras mērķis ir nodrošināt vienlīdzīgu piekļuvi Vispasaules tīmeklim visiem tā lietotājiem, iekļaujot cilvēkus ar dažāda veida ierobežojumiem, pastāvīgajiem vai īslaicīgajiem.</p>
      </div>
      <div className="Main-fragment">      
        <h2>Kāpēc Piekļūstamība ir svarīga?</h2>
        <p>Apmēram 15% pasaules iedzīvotāju dzīvo ar veselības traucējumiem, kas ietekmē viņu ikdienas dzīvi, iekļaujot mijiedarbību ar informācijas tehnoloģijām. Šie traucējumi var ietekmēt cilvēku maņas (piemēram, redzi un dzirdi), var ietekmēt motorās spējas, ierobežojot kustības, un var ietekmēt kognitīvās spējas, mainot veidu, kā cilvēks uztver apkārtējo pasauli.</p>
        <p>Katrs no mums var saskarties arī ar pārejošiem vai no kaut kādas konkrētās situācijas atkarīgiem ierobežojumiem. Tas var būt ievainojums, kas var “izsist” cilvēku no ierastā ritma uz dažām nedēļām, vai arī transportlīdzekļa vadīšanas process, kurā laikā nav iespējams izmantot rokas mijiedarbībai ar tehnoloģijām.</p>
        <p>Piekļūstamība ir prakse, kas var pasargāt cilvēkus no sociālās izolētības un palīdzēt nodrošināt informācijas tehnoloģiju pasaulē tādu iekļaujošu un nediskriminējošu vidi, kurā katrs lietotājs justos ērti, brīvi un droši.</p>
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
        <p>Lapā <Link className="Main-link" to='/resources'>Inforesursi</Link> ir iespējams atrast saites uz noderīgiem resursiem: Latvijas valsts tiesiskajiem regulējumiem tīmekļa piekļūstamības jomā, tīmekļa satura piekļūstamības nodrošināšanas vadlīnijām un citiem.</p>
        <Link className="Main-link" to="/about">Vairāk informācijas par šo vietni</Link>
      </div>
    </div>
  );
}

export default Home;
