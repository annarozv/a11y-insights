import { useEffect } from "react";
import { Link } from "react-router-dom";

function ContentMakers() {
  useEffect(() => {
    document.title = 'Piekļūstamības nodrošināšanas pamācība satura veidotājiem | Piekļūstamības atziņas';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <h1>Piekļūstamības nodrošināšana satura veidotājiem</h1>    
      <section className="Main-fragment">
        <h2>Galvenie aspekti</h2>
        <p>Publicējama satura piekļūstamība ir satura veidotāja atbildība. Arī tos gadījumos, kad tiek izmantotas eksistējošās satura pārvaldības platformas – piemēram, publicējot saturu savā vietnē Wix vai WordPress vai publicējot video YouTube vai Vimeo platformās. Izstrādājot piekļūstamu saturu, galvenie fokusa punkti ir satura <span className="Main-bold">saprotamība</span> un <span className="Main-bold">uztveramība</span>.</p>
        <p><span className="Main-bold">Svarīgi:</span> lai uzzinātu, kā <span className="Main-bold">piekļūstami noformēt</span> izstrādāto saturu, korekti izvēloties krāsas un noformējot tekstu, ieskatieties <Link className="Main-link" to='/designers'>pamācībā dizaineriem</Link>.</p>
      </section>
      <section className="Main-fragment">
        <h2>Semantiski korekta satura struktūra</h2>
        <p>Populārākie autorēšanas rīki kā MS Word, Google Docs vai Notion paredz dažādus virsrakstu līmeņus un citus semantiskus “apvalkus” saturam. Ir svarīgi izmantot šos “apvalkus” satura iezīmēšanai.</p>
        <p><span className="Main-bold">Korekta virsrakstu izmantošana uzlabo navigāciju</span> lietotājiem, kas saturam piekļūst ar palīgtehnoloģiju palīdzību. Tāpēc, izmantojot tikai vizuālās izmaiņas virsrakstiem (piemēram, palielināts burtu izmērs un/vai treknraksts), mēs padarām saturu par mazāk piekļūstamu.</p>
        <p>Piemērs semantiski korektai dažāda līmeņa HTML virsrakstu izmantošanai:</p>
        <pre className="Code-snippet">
          <code>
            <span className="Code-tag">&lt;h1&gt;</span>Galvenais satura virsraksts<span className="Code-tag">&lt;/h1&gt;</span><br/>  <span className="Code-tag">&lt;h2&gt;</span>Nodaļa 1.<span className="Code-tag">&lt;/h2&gt;</span><br/>    <span className="Code-tag">&lt;h3&gt;</span>Nodaļa 1.1.<span className="Code-tag">&lt;/h3&gt;</span><br/>    <span className="Code-tag">&lt;h3&gt;</span>Nodaļa 1.2.<span className="Code-tag">&lt;/h3&gt;</span><br/>  <span className="Code-tag">&lt;h2&gt;</span>Nodaļa 2.<span className="Code-tag">&lt;/h2&gt;</span><br/>
          </code>
        </pre>
        <p>Piemērs nekorektai HTML virsrakstu izmantošanai:</p>
        <pre className="Code-snippet">
          <code>
            <span className="Code-tag">&lt;h1&gt;</span>Galvenais satura virsraksts<span className="Code-tag">&lt;/h1&gt;</span><br/>    <span className="Code-tag">&lt;h3&gt;</span>Nodaļa 1.<span className="Code-tag">&lt;/h3&gt;</span><br/>  <span className="Code-tag">&lt;h2&gt;</span>Nodaļa 2.<span className="Code-tag">&lt;/h2&gt;</span><br/>        <span className="Code-tag">&lt;h5&gt;</span>Nodaļa 3.<span className="Code-tag">&lt;/h5&gt;</span><br/>  <span className="Code-tag">&lt;span&gt;&lt;b&gt;</span>Nodaļa 4.<span className="Code-tag">&lt;/b&gt;&lt;/span&gt;</span><br/>
          </code>
        </pre>
        <p><span className="Main-bold">Interesanti:</span> <code>&lt;h1&gt;</code> līmeņa virsraksta izmantošana tīmekļa lapā ne tikai veicina satura navigācijas konsekvenci un korektumu, bet arī <span className="Main-bold">pozitīvi ietekmē lapas pozīciju meklēšanas rezultātos</span> (SEO).</p>
      </section>
      <section className="Main-fragment">
        <h2>Piekļūstami lapu nosaukumi</h2>
        <p>Katras tīmekļa vietnes lapas nosaukumam (<code>&lt;<span lang="en">title</span>&gt;</code> meta elementam) ir jābūt <span className="Main-bold">unikālam un informatīvam</span>. Tam ir jāapraksta lapas <span className="Main-bold">satura būtība un nolūks</span>, jo lapas nosaukums ir pirmais, ko atskaņo ekrānlasītājs, lietotājam atvērot jaunu lapu.</p>
        <p>Labs piemērs ir šīs lapas nosaukums:</p>
        <p className="Main-example">Piekļūstamības nodrošināšanas pamācība satura veidotājiem | Piekļūstamības atziņas</p>
        <p>Piemērs formāli korektam, bet nepiekļūstamam un neefektīvam šīs lapas nosaukumam:</p>
        <p className="Main-example">Pamācība satura veidotājiem</p>
        <p>Šis nosaukums neaprakstītu lapas satura būtību pietiekami, jo netika pieminēta piekļūstamība, kas ir šīs pamācības centrālā vērtība.</p>
        <p>Protams, lapas nosaukumam nav jābūt arī pārāk garam – ieteikts <span className="Main-bold">optimālais izmērs ir ap 70 simboliem</span>.</p>
        <p><span className="Main-bold">Piezīme:</span> unikāli informatīvi lapu nosaukumi arī <span className="Main-bold">pozitīvi ietekmē SEO</span>.</p>
      </section>
      <section className="Main-fragment">
        <h2>Piekļūstami nosaukumi saitēm</h2>
      </section>
      <section className="Main-fragment">
        <h2>Satura alternatīvas</h2>
        <section className="Main-fragment__nested">
          <h3>Audio un videomateriāliem </h3>
        </section>
        <section className="Main-fragment__nested">
          <h3>ALT teksts attēliem</h3>
        </section>
      </section>
      <section className="Main-fragment">
        <h2>Nepiekļūstamu simbolu izmantošana</h2>
      </section>
      <section className="Main-fragment">
        <h2>Satura nebīstamība</h2>
        <p>Lietotājam ir jābūt iespējai <span className="Main-bold">apturēt vai paslēpt jebkuru kustīgo saturu</span>.</p>
        <p>Īpaši jāuzmanās ir ar bieži mirgojošo saturu, kas var provocēt epilepsijas lēkmes. <span className="Main-bold">Pirms mirgojoša satura parādīšanas ir jāparāda brīdinājums</span>!</p>
      </section>
    </>
  );
}

export default ContentMakers;
