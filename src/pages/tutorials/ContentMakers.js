import { useEffect } from "react";
import { Link } from "react-router-dom";
import AltExample from '../../images/ALT_text.jpg';

function ContentMakers() {
  useEffect(() => {
    document.title = 'Piekļūstamības nodrošināšanas ieteikumi satura veidotājiem | Piekļūstamības atziņas';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <h1>Piekļūstamības nodrošināšanas ieteikumi satura veidotājiem</h1>    
      <section className="Main-fragment">
        <h2>Galvenie aspekti</h2>
        <p>Publicējamā satura piekļūstamība ir <span className="Main-bold">satura veidotāja atbildība</span>. Arī tos gadījumos, kad tiek izmantotas eksistējošās satura pārvaldības platformas – piemēram, publicējot saturu savā vietnē Wix vai WordPress vidē vai publicējot video YouTube vai Vimeo platformās. </p>
        <p>Izstrādājot piekļūstamu saturu, galvenie fokusa punkti ir satura <span className="Main-bold">saprotamība</span> un <span className="Main-bold">uztveramība</span>.</p>
        <p><span className="Main-bold">Svarīgi:</span> lai uzzinātu, kā <span className="Main-bold">piekļūstami noformēt</span> izstrādāto saturu, korekti izvēloties krāsas un noformējot tekstu, ieskatieties <Link className="Main-link" to='/designers'>Piekļūstamības nodrošināšanas pamācībā dizaineriem</Link>.</p>
      </section>
      <section className="Main-fragment">
        <h2>Uztverams saturs</h2>
        <p><span className="Main-bold">Iespēja atšķirt priekšplāna saturu no fona satura</span> gan vizuālajiem, gan tekstuālajiem, gan video un audio materiāliem ir kritiski svarīga satura uztveramībai.</p>
        <p>Ja, piemēram, videomateriāls satur fona mūziku, tai <span className="Main-bold">nedrīkstētu traucēt</span> uztvert galveno video saturu, vai arī ir jāparedz iespēja izslēgt fona mūziku.</p>
        <p>Noformējot tekstu vai attēlus un citus vizuālos materiālus, ir jāņem vērā krāsu <span className="Main-bold">kontrasta koeficients</span> (skatīt <Link className="Main-link" to='/designers'>Piekļūstamības nodrošināšana dizaineriem</Link>).</p>
      </section>
      <section className="Main-fragment">
        <h2>Semantiski korekta satura struktūra</h2>
        <p>Populārākie autorēšanas rīki kā MS Word, Google Docs vai Notion paredz dažādus virsrakstu līmeņus un citus semantiskus “apvalkus” saturam. Ir svarīgi izmantot šos “apvalkus” satura iezīmēšanai.</p>
        <p><span className="Main-bold">Korekta virsrakstu izmantošana uzlabo navigāciju</span>, it īpaši tiem lietotājiem, kas saturam piekļūst ar palīgtehnoloģiju palīdzību. Tāpēc, izmantojot tikai vizuālās izmaiņas virsrakstiem (piemēram, palielināts burtu izmērs un/vai treknraksts), mēs padarām saturu par mazāk piekļūstamu.</p>
        <p>Piemērs <span className="Main-bold">semantiski korektai</span> dažāda līmeņa HTML virsrakstu izmantošanai:</p>
        <pre className="Code-snippet">
          <code>
            <span className="Code-tag">&lt;h1&gt;</span>Galvenais satura virsraksts<span className="Code-tag">&lt;/h1&gt;</span><br/>  <span className="Code-tag">&lt;h2&gt;</span>Nodaļa 1.<span className="Code-tag">&lt;/h2&gt;</span><br/>    <span className="Code-tag">&lt;h3&gt;</span>Nodaļa 1.1.<span className="Code-tag">&lt;/h3&gt;</span><br/>    <span className="Code-tag">&lt;h3&gt;</span>Nodaļa 1.2.<span className="Code-tag">&lt;/h3&gt;</span><br/>  <span className="Code-tag">&lt;h2&gt;</span>Nodaļa 2.<span className="Code-tag">&lt;/h2&gt;</span><br/>
          </code>
        </pre>
        <p>Piemērs <span className="Main-bold">nekorektai</span> HTML virsrakstu izmantošanai:</p>
        <pre className="Code-snippet" aria-label="Koda bloks">
          <code>
            <span className="Code-tag">&lt;h1&gt;</span>Galvenais satura virsraksts<span className="Code-tag">&lt;/h1&gt;</span><br/>    <span className="Code-tag">&lt;h3&gt;</span>Nodaļa 1.<span className="Code-tag">&lt;/h3&gt;</span><br/>  <span className="Code-tag">&lt;h2&gt;</span>Nodaļa 2.<span className="Code-tag">&lt;/h2&gt;</span><br/>        <span className="Code-tag">&lt;h5&gt;</span>Nodaļa 3.<span className="Code-tag">&lt;/h5&gt;</span><br/>  <span className="Code-tag">&lt;span&gt;&lt;b&gt;</span>Nodaļa 4.<span className="Code-tag">&lt;/b&gt;&lt;/span&gt;</span><br/>
          </code>
        </pre>
        <p><span className="Main-bold">Interesanti:</span> <code>&lt;h1&gt;</code> līmeņa virsraksta izmantošana tīmekļa lapā ne tikai veicina satura navigācijas konsekvenci un korektumu, bet arī <span className="Main-bold">pozitīvi ietekmē lapas pozīciju meklēšanas rezultātos (SEO)</span>.</p>
      </section>
      <section className="Main-fragment">
        <h2>Satura alternatīvas</h2>
        <p><span className="Main-bold">Ne visi lietotāji saturam piekļūst vienādi</span> jeb vizuāli un ar ierastajām ierīcēm. Ir lietotāji, kas izmanto ekrānlasītāju vai citas palīgtehnoloģijas, ir lietotāji, kuriem ir svarīgi pārvaldīt saturu ar balss ievadi. Eksistē ļoti daudz veidu, kā cilvēki mijiedarbojas ar tīmekļa saturu, tāpēc <span className="Main-bold">katram satura komponentam ir jābūt piekļūstamam dažādos kontekstos</span>.</p>
        <p>Ja to nav iespējams nodrošināt pilnībā, ir jānodrošina <span className="Main-bold">satura alternatīvu pieejamība</span>. Tas var būt satura tekstuālais apraksts nepiekļūstamam komponentam vai arī iespēja lejupielādēt saturu kā piekļūstamu PDF dokumentu.</p>
        <p><span className="Main-bold">Universālākās vienmēr ir tekstuālās alternatīvas</span> netekstuālajam saturam, jo tās ir visvienkāršāk automātiski pārvērst citā formātā.</p>
        <section className="Main-fragment__nested">
          <h3>Audio un videomateriāliem</h3>
          <p>Lai padarītu audioierakstus par piekļūstamiem, tiem ir jāpievieno <span className="Main-bold">transkripti</span>. Videomateriāliem ir jāpievieno <span className="Main-bold">subtitri vai uzraksti</span> (angliski <span lang="en"><i>captions</i></span>).</p>
          <p><span className="Main-bold">Ieguvēji ir ne tikai lietotāji ar īpašām vajadzībām</span> – arī citiem lietotājiem šie materiāli var būt noderīgi. Piemērs ir lietotāji, kas mēģinās piekļūt saturam trokšņainajā vietā vai lietotāji, kas apgūst svešvalodas un mēģina patērēt saturu svešvalodās.</p>
        </section>
        <section className="Main-fragment">
          <h3>ALT teksts attēliem</h3>
          <p>Attēla alternatīvais (ALT) teksts ir <span className="Main-bold">īss un kodolīgs attēla satura apraksts vienā teikumā</span>, kas palīdz paskaidrot attēla saturu lietotājiem, kuri nevar to uztvert vizuāli.</p>
          <p><code>alt</code> ir HTML taga <code>&lt;img&gt;</code> atribūts:</p>
          <pre className="Code-snippet" aria-label="Koda bloks">
            <code>
              <span className="Code-tag">&lt;img</span> src="audums.jpg" alt="Saburzīts melns organzas audums tuvplānā"<span className="Code-tag">&gt;</span>
            </code>
          </pre>
          <p>Apskatīsim šo attēlu kā piemēru: </p>
          <figure className="Main-figure">
            <img className="Main-img" src={AltExample} alt="Saburzīts melns organzas audums tuvplānā"></img>
            <figcaption className="Main-img-caption">Attēls ALT teksta piemēriem</figcaption>
          </figure>
          <p>Attēla pašreizējais ALT teksts apraksta objektu, kas tiek parādīts un objekta stāvokli, <span className="Main-bold">dodot priekštatu par attēlu</span>:</p>
          <p className="Main-example">Saburzīts melns organzas audums tuvplānā</p>
          <p>Parasti pāris vārdos <span className="Main-bold">nav</span> iespējams pietiekami detalizēti aprakstīt attēla būtību:</p>
          <p className="Main-example">Melns audums</p>
          <p><span className="Main-bold">Ātrās atziņas</span> par ALT tekstiem:</p>          
          <ul className="Main-list">
            <li>Pārāk garš teksts <span className="Main-bold">nav</span> jāraksta</li>
            <li>Optimālais garums ir <span className="Main-bold">ap 140 simboliem</span></li>
            <li><span className="Main-bold">Nav</span> nepieciešams iekļaut vārdu <span className="Main-bold">“attēls”</span> vai <span className="Main-bold">“foto”</span></li>
            <li>ALT teksts <span className="Main-bold">nav</span> nepieciešams tīri dekoratīvajiem attēliem</li>
          </ul>
          <p><span className="Main-bold">Piezīme:</span> ALT teksts ir teksts, kas var palīdzēt katram tīmekļa lietotājam – tas tiek parādīts gadījumā, kad attēlu nav iespējams ielādēt.</p>
          <p><span className="Main-bold">Piezīme:</span> ALT teksti <span className="Main-bold">pozitīvi ietekmē SEO</span>.</p>
        </section>
      </section>
      <section className="Main-fragment">
        <h2>Piekļūstami lapu nosaukumi</h2>
        <p>Katras tīmekļa vietnes lapas nosaukumam (<code>&lt;<span lang="en">title</span>&gt;</code> meta elementam) ir jābūt <span className="Main-bold">unikālam un informatīvam</span>. Tam ir jāapraksta lapas <span className="Main-bold">satura būtība un nolūks</span>.</p>
        <p>Lapas nosaukums ir pirmais, ko atskaņo ekrānlasītājs, lietotājam atvērot jaunu lapu.</p>
        <p>Labs piemērs ir šīs lapas nosaukums:</p>
        <p className="Main-example">Piekļūstamības nodrošināšanas pamācība satura veidotājiem | Piekļūstamības atziņas</p>
        <p>Piemērs formāli korektam, bet nepiekļūstamam un neefektīvam šīs lapas nosaukumam:</p>
        <p className="Main-example">Pamācība satura veidotājiem</p>
        <p>Šis nosaukums neaprakstītu lapas satura būtību pietiekami, jo netiek pieminēta piekļūstamība, kas ir šīs pamācības centrālā vērtība.</p>
        <p>Protams, lapas nosaukumam nav jābūt arī pārāk garam – ieteikts <span className="Main-bold">optimālais izmērs ir ap 70 simboliem</span>.</p>
        <p><span className="Main-bold">Piezīme:</span> unikāli informatīvi lapu nosaukumi arī <span className="Main-bold">pozitīvi ietekmē SEO</span>.</p>
      </section>
      <section className="Main-fragment">
        <h2>Piekļūstami nosaukumi saitēm</h2>
        <p>Ievietojot saturā saites jeb linkus uz citām lapām vai citiem satura fragmentiem, ir jāpārliecinās, ka saites nosaukums jeb tā daļa, kas tiek rādīta tekstā, ir piekļūstama. </p>
        <p>Piekļūstams saites nosaukums ir tāds nosaukums, kas, līdzīgi piekļūstamiem lapu nosaukumiem, <span className="Main-bold">sniedz informāciju par to saturu, uz kuru norāda saite</span>.</p>
        <p>Piemērs informatīvajam saites nosaukumam:</p>
        <p className="Main-example Main-center">Skatīt <Link className="Content-example-link" to='/developers'><u>piekļūstamības nodrošināšanas pamācību programmētājiem</u></Link></p>
        <p>Kategoriski <span className="Main-bold">nav ieteikts</span> ierakstīt saites tekstuālajā daļā šādu tekstu:</p>
        <p className="Main-example Main-center"><Link className="Content-badlink" aria-label="Sliktas prakses piemērs saites nosaukuma pievienošanai"><u>Spied šeit</u></Link> vai <Link className="Content-badlink" aria-label="Sliktas prakses piemērs saites nosaukuma pievienošanai"><u>Šeit</u></Link></p>
        <p>Lietotāji, kas izmanto ekrānlasītāju, <span className="Main-bold">nevarēs uzzināt, uz ko norāda saite</span>. Tas ne tikai pasliktina piekļūstamību, bet arī no Google meklēšanas mehānismu puses var tikt uztverts kā mēstuļošana jeb spams.</p>
        <p><span className="Main-bold">Patīkams pārsteigums:</span> arī piekļūstami nosaukumi saitēm <span className="Main-bold">uzlabo SEO</span>.</p>
      </section>
      <section className="Main-fragment">
        <h2>Nepiekļūstamu simbolu izmantošana</h2>
        <p>Ir situācijas, kad mums ir vēlme saturā izmantot simbolus – piemēram, Unicode simbolus:</p>
        <p className="Main-example Main-center Content-hearts" aria-label="Trīs sirsniņas">&#9825;&#9825;&#9825;</p>
        <p>Diemžēl tie <span className="Main-bold">nav piekļūstami</span> lietotājiem, kuri izmanto ekrānlasītājus.</p> 
        <p>Labākajā gadījumā tie tiks ignorēti, bet, visticamāk, lietotājs saņems nesaprotamu informāciju, palīgtehnoloģijai mēģinot tos interpretēt.</p>
        <p>Šo var novērst, izmantojot iezīmes vai atzīmējot saturu kā kaut ko, kas palīgtehnoloģijām ir jāignorē. HTML valodā to var panākt, izmantojot <span className="Main-bold">ARIA atribūtus</span>.</p>
        <p>Ar <code>aria-hidden</code> var padarīt simbolu par “neredzamu” ekrānlasītājiem, ja simbols ir <span className="Main-bold">tīri dekoratīvs</span>:</p>
        <pre className="Code-snippet" aria-label="Koda bloks">
          <code>
            <span className="Code-tag">&lt;span</span> aria-hidden=”true”<span className="Code-tag">&gt;</span> &#9825;&#9825;&#9825; <span className="Code-tag">&lt;/span&gt;</span>
          </code>
        </pre>
        <p>Ar <code>aria-label</code> var pievienot iezīmi, kas aprakstītu simbolu, ja tam ir <span className="Main-bold">ne tikai dekoratīva nozīme</span>:</p>
        <pre className="Code-snippet" aria-label="Koda bloks">
          <code>
            <span className="Code-tag">&lt;span</span> aria-label=”Trīs sirsniņas”<span className="Code-tag">&gt;</span> &#9825;&#9825;&#9825; <span className="Code-tag">&lt;/span&gt;</span>
          </code>
        </pre>
      </section>
      <section className="Main-fragment">
        <h2>Satura nebīstamība</h2>
        <p>Lietotājam ir jābūt iespējai <span className="Main-bold">apturēt vai paslēpt jebkuru kustīgo saturu</span>.</p>
        <p>Īpaši jāuzmanās ir ar bieži mirgojošu saturu, kas var provocēt epilepsijas lēkmes. <span className="Main-bold">Pirms mirgojoša satura parādīšanas ir jāparāda brīdinājums</span>!</p>
      </section>
      <hr role="presentation"/>
      <ul className="Main-list Main-list__final">
        <li> 
          <Link className="Main-link" to='/designers'>Piekļūstamības nodrošināšana dizaineriem</Link>
        </li> 
        <li>
          <Link className="Main-link" to='/developers'>Piekļūstamības nodrošināšana programmētājiem</Link> 
        </li>
        <li>
          <Link className="Main-link" to='/testers'>Piekļūstamības nodrošināšana testētājiem</Link>
        </li>
      </ul>
    </>
  );
}

export default ContentMakers;
