import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = 'Piekļūstamības atziņas | Informatīvs resurss';
  }, []);

  return (
    <>
      <h1>Informatīvs resurss "Piekļūstamības Atziņas"</h1>
      <section className="Main-fragment">
        <h2>Kas ir tīmekļa piekļūstamība?</h2>
        <p><span className="Main-bold">Tīmekļa piekļūstamība</span> (angliski <span lang="en"><i>Web Accessibility</i></span>) ir prakse, kuras mērķis ir nodrošināt vienlīdzīgu piekļuvi Vispasaules tīmeklim visiem tā lietotājiem, iekļaujot cilvēkus ar dažāda veida ierobežojumiem, pastāvīgajiem vai īslaicīgajiem.</p>
        <p>Galvenie tīmekļa piekļūstamības pamatprincipi ir: <span className="Main-bold">uztveramība</span>, <span className="Main-bold">darbināmība</span>, <span className="Main-bold">saprotamība</span> un <span className="Main-bold">robustums</span>.</p>
      </section>
      <section className="Main-fragment">      
        <h2>Kāpēc piekļūstamība ir svarīga?</h2>
        <p>Apmēram 15% pasaules iedzīvotāju dzīvo ar <span className="Main-bold">veselības traucējumiem</span>, kas ietekmē viņu ikdienas dzīvi, iekļaujot mijiedarbību ar informācijas tehnoloģijām. Šie traucējumi var ietekmēt cilvēku maņas (piemēram, redzi un dzirdi), var ietekmēt motorās spējas, ierobežojot kustības, un var ietekmēt kognitīvās spējas, mainot veidu, kā cilvēks uztver apkārtējo pasauli.</p>
        <p>Katrs no mums var saskarties arī ar <span className="Main-bold">pārejošiem vai no kaut kādas konkrētās situācijas atkarīgiem ierobežojumiem</span>. Tas var būt ievainojums, kas var “izsist” cilvēku no ierastā ritma uz dažām nedēļām, vai arī transportlīdzekļa vadīšanas process, kurā laikā nav iespējams izmantot rokas mijiedarbībai ar tehnoloģijām.</p>
        <p>Piekļūstamība ir prakse, kas var <span className="Main-bold">pasargāt cilvēkus no sociālās izolētības</span> un palīdzēt nodrošināt informācijas tehnoloģiju pasaulē tādu iekļaujošu un nediskriminējošu vidi, kurā <span className="Main-bold">katrs lietotājs justos ērti, brīvi un droši</span>.</p>
      </section>
      <section className="Main-fragment">
        <h2>Kāpēc tieši “atziņas”?</h2>
        <p><span className="Main-bold">Atziņa</span> (angliski <span lang="en"><i>Insight</i></span>) ir dziļš secinājums, uzskats vai atzinums par kaut kādu parādību, kas ir rādies novērojumu vai pētījumu rezultātā.</p>
        <p>Šī informatīva resursa mērķis ir <span className="Main-bold">sniegt atziņas</span> par tīmekļa piekļūstamību.</p>
      </section>    
      <section className="Main-fragment">
        <h2>Ko šeit ir iespējams atrast?</h2>
        <p>
          Šajā tīmekļa vietnē ir iespējams atrast <Link className="Main-link" to='/tutorials'>pamācības</Link> jeb rekomendācijas:
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
      </section>
    </>
  );
}

export default Home;
