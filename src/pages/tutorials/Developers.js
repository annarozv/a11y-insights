import { useEffect } from "react";
import { Link } from "react-router-dom";

function Developers() {
  useEffect(() => {
    document.title = 'Piekļūstamības nodrošināšanas pamācība programmētājiem | Piekļūstamības atziņas';
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, []);

  return (
    <>
      <h1>Piekļūstamības nodrošināšana programmētājiem</h1>
      <section className="Main-fragment">
        <h2>Galvenie aspekti</h2>
        <p>Programmētāja galvenie fokusa punkti, nodrošinot piekļūstamību tīmekļa vietnēm, ir <span className="Main-bold">satura darbināmība un robustums</span>. </p>
        <p><span className="Main-bold">Darbināmība</span> jeb operējamība nozīmē, ka lietotājiem netiks pieprasītas tādas darbības, kurus daļa no tiem nevarētu veikt piekļūstamības barjeru dēļ.</p>
        <p><span className="Main-bold">Robustums</span>, savukārt, attiecas uz satura struktūras un koda korektumu, un, attiecīgi, uz iespēju saturam piekļūt ar palīgtehnoloģiju palīdzību. </p>       
      </section>
      <section className="Main-fragment">
        <h2>Koda un struktūras korektums</h2>
        <p></p>
      </section>
      <section className="Main-fragment">
        <h2>ARIA atribūti</h2>
        <p></p>
        <section className="Main-fragment__nested">
          <h3>ARIA Lomas</h3>
        </section>
        <section className="Main-fragment__nested">
          <h3>ARIA Īpašības</h3>
        </section>
        <section className="Main-fragment">
          <h3>ARIA Stāvokļi</h3>
        </section>
      </section>
      <section className="Main-fragment">
        <h2>Pielāgojamība</h2>
        <p></p>
      </section>
      <section className="Main-fragment">
        <h2>Ievades veidi</h2>
        <p></p>
      </section>
      <section className="Main-fragment">
        <h2>Formas, ievadlauki un kļūdu apstrāde</h2>
        <p></p>
      </section>
      <section className="Main-fragment">
        <h2>Laika ierobežojumi jeb taimeri</h2>
        <p></p>
      </section>
      <section className="Main-fragment">
        <h2>Navigācija</h2>
        <p>Katrai tīmekļa vietnei ir nepieciešama <span className="Main-bold">skaidra un paredzama navigācija</span>. Šajā tīmekļa vietnē navigācijas panelis augšā ir pieejams katrā vietnes lapā. Tas ļauj izvairīties no situācijas, kur lietotājs varētu uzrasties “strupceļā”.</p>
        <p>Šajā tīmekļa vietnē ir pieejama arī <Link className='Main-link' to='/navigation'>Vietnes karte</Link> – hierarhisks saraksts ar visām vietnes lapām.</p>
      </section>
      <hr role="presentation"/>
      <ul className="Main-list Main-list__final">
        <li> 
          <Link className="Main-link" to='/designers'>Piekļūstamības nodrošināšana dizaineriem</Link>
        </li> 
        <li> 
          <Link className="Main-link" to='/content-makers'>Piekļūstamības nodrošināšana satura veidotājiem</Link>
        </li> 
        <li>
          <Link className="Main-link" to='/testers'>Piekļūstamības nodrošināšana testētājiem</Link>
        </li>
      </ul>
    </>
  );
}

export default Developers;
