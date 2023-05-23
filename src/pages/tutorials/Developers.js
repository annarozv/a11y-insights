import { useEffect } from "react";
import { Link } from "react-router-dom";

function Developers() {
  useEffect(() => {
    document.title = 'Piekļūstamības nodrošināšanas ieteikumi programmētājiem | Piekļūstamības atziņas';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <h1>Piekļūstamības nodrošināšanas ieteikumi programmētājiem</h1>
      <section className="Main-fragment">
        <h2>Galvenie aspekti</h2>
        <p>Programmētāja galvenie fokusa punkti, nodrošinot piekļūstamību tīmekļa vietnēm, ir <span className="Main-bold">satura darbināmība un robustums</span>. </p>
        <p><span className="Main-bold">Darbināmība</span> jeb operējamība nozīmē, ka lietotājiem netiks pieprasītas tādas darbības, kurus daļa no tiem nevarētu veikt piekļūstamības barjeru dēļ.</p>
        <p><span className="Main-bold">Robustums</span>, savukārt, attiecas uz satura struktūras un koda korektumu, un, attiecīgi, uz iespēju saturam piekļūt ar palīgtehnoloģiju palīdzību. </p>       
        <p><span className="Main-bold">Svarīgi:</span> ja Jūs publicējat un noformējat saturu tīmekļa vietnē, ieteicam Jums apskatīt <Link className="Main-link" to='/content-makers'>piekļūstamības nodrošināšanas pamācību satura veidotājiem</Link> un <Link className="Main-link" to='/designers'>piekļūstamības nodrošināšanas pamācību dizaineriem</Link>.</p>
      </section>
      <section className="Main-fragment">
        <h2>Koda un struktūras korektums</h2>
        <p>Rakstot kodu tīmekļa vietnei, ir jāpārliecinās par sekojošām lietām:</p>
        <ul className="Main-list">
          <li>Vietnes kods ir rakstīts <span className="Main-bold">atbilstoši specifikācijām</span> (HTML valodas specifikācijai, ARIA specifikācijai utt.).</li>
          <li>Satura <span className="Main-bold">iekšējā struktūra</span> kodā <span className="Main-bold">atbilst satura vizuālai reprezentācijai</span>, kas tiek rādīta lietotājam.</li>
          <li>Ir pareizi izmantoti <span className="Main-bold">semantiskie HTML elementi</span>: <code>&lt;header&gt;</code> un <code>&lt;footer&gt;</code> vietnes galvenei un kājenei, <code>&lt;nav&gt;</code> navigācijas panelim, <code>&lt;h1&gt;</code> līdz <code>&lt;h6&gt;</code> virsrakstiem, <code>&lt;ul&gt;</code> un <code>&lt;ol&gt;</code> sarakstiem, <code>&lt;section&gt;</code> vai <code>&lt;article&gt;</code> satura fragmentiem utt.</li>
        </ul>
      </section>
      <section className="Main-fragment">
        <h2>ARIA atribūti</h2>
        <p>Lai arī HTML valodā ir daudz semantisko elementu, kuru nolūks un uzvedība ir definēti specifikācijā, ir arī tādi elementi, kuru semantika nav skaidri norādītā: spilgts piemērs ir <code>&lt;div&gt;</code> un <code>&lt;span&gt;</code> elementi. </p>
        <p>ARIA atribūti palīdz <span className="Main-bold">pievienot papildus semantiku kodam</span>, specificējot elementu lomas, stāvokļus un īpašības, un tādā veidā uzlabojot satura piekļūstamību.</p> 
        <p>ARIA atribūti ietekmē veidu, kā pārlūkprogrammas, lietotāja aģenti un palīgtehnoloģijas lietotājiem prezentē saturu.</p>
        <section className="Main-fragment__nested">
          <h3>ARIA Lomas</h3>
          <p>Izmantojot ARIA lomas (<span lang="en">role</span>), var <span className="Main-bold">precizēt elementa nolūku</span>.</p>
          <p>Piemērs, kā teksta fragmentam var norādīt, ka tas ir brīdinājums:</p>
          <pre className="Code-snippet" aria-label="Koda bloks">
            <code>
              <span className="Code-tag">&lt;span</span> role="alert"<span className="Code-tag">&gt;</span> Brīdinājuma teksts, kuru pārlūkprogramma nekavējoties pasniegs lietotājam <span className="Code-tag">&lt;/span&gt;</span>
            </code>
          </pre>
          <p><span className="Main-bold">Svarīgi: nav jādublē elementa loma</span> semantiskajiem elementiem.</p>
          <p>Piemērs <span className="Main-bold">nekorektai</span> ARIA atribūtu izmantošanai:</p>
          <pre className="Code-snippet" aria-label="Koda bloks">
            <code>
              <span className="Code-tag">&lt;ul</span> role="list"<span className="Code-tag">&gt;</span><br/>    <span className="Code-tag">&lt;li</span> role="listitem"<span className="Code-tag">&gt;&lt;/li&gt;</span><br/><span className="Code-tag">&lt;/ul&gt;</span>
            </code>
          </pre>
        </section>
        <section className="Main-fragment__nested">
          <h3>ARIA Īpašības</h3>
          <p>ARIA īpašības (<span lang="en">properties</span>) var <span className="Main-bold">precizēt elementa raksturu</span>.</p>
          <p>Piemērs, kā ar ARIA īpašību var norādīt, ka ievadlauks ir obligāts:</p>
          <pre className="Code-snippet" aria-label="Koda bloks">
            <code>
              <span className="Code-tag">&lt;div</span> role="checkbox" aria-required="true"<span className="Code-tag">&gt;&lt;/div&gt;</span>
            </code>
          </pre>
          <p>Šī piemēra gadījumā labāk būtu tomēr definēt elementu ar <code>&lt;input&gt;</code> tagu:</p>
          <pre className="Code-snippet" aria-label="Koda bloks">
            <code>
              <span className="Code-tag">&lt;input</span> type="checkbox" required<span className="Code-tag">&gt;</span>
            </code>
          </pre>
        </section>
        <section className="Main-fragment__nested">
          <h3>ARIA Stāvokļi</h3>
          <p>Ar ARIA stāvokļiem (<span lang="en">state</span>) var <span className="Main-bold">precizēt elementa pašreizējo stāvokli</span>.</p>
          <p>Piemērs, kā ar ARIA atribūtu var norādīt, ka ievadlauks ir aizpildīts nepareizi:</p>
          <pre className="Code-snippet" aria-label="Koda bloks">
            <code>
              <span className="Code-tag">&lt;input</span> type="text" aria-invalid="true"<span className="Code-tag">&gt;</span>
            </code>
          </pre>
        </section>
        <section className="Main-fragment">
          <h3>Izmantošana</h3>
          <p><span className="Main-bold">Svarīgi:</span> vienmēr ir jādod <span className="Main-bold">priekšrocība iebūvētiem semantiskajiem HTML elementiem</span> – ARIA atribūti ir jāizmanto tikai tad, kad ar esošo HTML nepietiek.</p>
          < Link className="Main-link" to="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics" target="_blank">Vairāk par ARIA atribūtiem (angļu valodā)</Link>
        </section>
      </section>
      <section className="Main-fragment">
        <h2>Pielāgojamība</h2>
        <p>Vietnei ir jābūt lietojamai ierīcēs ar <span className="Main-bold">dažādiem ekrānu izmēriem</span> – no darbvirsmas līdz viedtālruņa ekrānam.</p>
        <p>Ir jānodrošina <span className="Main-bold">satura pārkārtojums un teksta aplaušana</span> (angliski <span lang="en"><i>wrapping</i></span>), lai lietotājs satura uztveršanai nebūtu spiests ritināt lapu vertikāli un horizontāli.</p>
        <p>Kā arī, ir jānodrošina vietnes <span className="Main-bold">satura lietojamība pēc 200% tālummaiņas</span>.</p>
      </section>
      <section className="Main-fragment">
        <h2>Ievade</h2>
        <section className="Main-fragment__nested">
          <h3>Dažādi ievades veidi un to izvēle</h3>
          <p>Lietotāji piekļūst tīmekļa vietnēm ar dažādu ierīču starpniecību un izmanto <span className="Main-bold">dažādus ievades veidus</span> mijiedarbībai ar saturu. Tā var būt pele, tastatūra, pieskārienu ievade, kustību ievade, balss ievade un citi veidi.</p>
          <p>Šie vienkārši noteikumi palīdzēs nodrošināt mijiedarbības piekļūstamību:</p>
          <ul className="Main-list">
            <li>Nekad <span className="Main-bold">neierobežot ievades veidus</span>: piemēram, obligāta balss ievade bez alternatīvām izveidos nepārvaramu barjeru lietotājiem ar runas traucējumiem.</li>
            <li>Nodrošināt iespēju <span className="Main-bold">izvēlēties</span> ievades veidu un ērti pārslēgties starp ievades veidiem.</li>
            <li>Ir jābūt iespējamam mijiedarboties ar saturu, izmantojot <span className="Main-bold">tikai vienu rādītāju</span> (peles kursoru, pirkstu, Tab taustiņu utt.).</li>
            <li>Sarežģītākām darbībām (piemēram, <span lang="en">drag and drop</span>) ir jānodrošina izpildes <span className="Main-bold">alternatīva</span>, kas būtu iespējama ar vienu rādītāju.</li>
          </ul>
        </section>
        <section className="Main-fragment__nested">
          <h3>Fokusa secība</h3>
          <p>Ļoti svarīgs tastatūras piekļūstamības aspekts ir <span className="Main-bold">loģiska un skaidra fokusa secība</span>, kas atbilst satura vizuālai reprezentācijai. Parasti tas ir no augšas uz leju un no kreisās puses uz labo pusi.</p>
          <p>Pēc noklusējuma visi <span className="Main-bold">interaktīvie elementi ir fokusējami</span>: <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;input&gt;</code> utt. Bet ir situācijas, kad nepieciešams to pielāgot. </p>
          <p>Lai nefokusējamu elementu <span className="Main-bold">padarītu par fokusējamu</span>, var izmantot <code>tabindex</code> atribūtu ar vērtību "0":</p>
          <pre className="Code-snippet" aria-label="Koda bloks">
            <code>
              <span className="Code-tag">&lt;span</span> tabindex="0"<span className="Code-tag">&gt;</span> Šis teksts būs fokusējams <span className="Code-tag">&lt;/span&gt;</span>
            </code>
          </pre>
          <p>Šo iespēju ir jāizmanto <span className="Main-bold">piesardzīgi</span>, jo fokusējamiem ir jābūt tikai tieši interaktīviem elementiem.</p>
          <p>Lai <span className="Main-bold">padarītu fokusējamu elementu par nefokusējamu</span>, var izmantot <code>tabindex</code> atribūtu ar vērtību "-1":</p>
          <pre className="Code-snippet" aria-label="Koda bloks">
            <code>
              <span className="Code-tag">&lt;a</span> tabindex="-1"<span className="Code-tag">&gt;</span> Saite nebūs fokusējama ar Tab taustiņu <span className="Code-tag">&lt;/a&gt;</span>
            </code>
          </pre>
          <p>Elementam, kas nonāk fokusā, ir jāparedz <span className="Main-bold">vizuālās izmaiņas</span>. Piemērs:</p>
          <Link 
            className="Main-example Main-center Main-hoverable" 
            role="button" 
            aria-label="Ilustratīva poga, kas maina vizuālo izskatu, uzliekot uz tās kursoru"
          >
            Poga
          </Link>
          <p><span className="Main-bold">Svarīgi:</span> vērtības "1" un augstākas <code>tabindex</code> atribūtam <span className="Main-bold">nav ieteicams</span> izmantot, jo tās var izjaukt paredzēto fokusa secību un radīt piekļūstamības barjeras.</p>
        </section>
        <section className="Main-fragment">
          <h3>Ievades palīdzība</h3>
          <p>Lai atvieglotu ievades procesu lietotājiem un izvairītos no iespējamām barjerām, lietotājiem ir jāsniedz <span className="Main-bold">atbalsts ievades procesā</span>:</p>
          <ul className="Main-list">
            <li>Katram ievadlaukam ir jābūt pievienotai <span className="Main-bold">aprakstošai iezīmei</span>.</li>
            <li>Ir <span className="Main-bold">jāidentificē un jāpaskaidro validācijas kļūdas</span>, ja tādas ir notikušas.</li>
            <li>Kļūdu gadījumā lietotājam ir jāsniedz <span className="Main-bold">instrukcijas kļūdu labošanai</span>.</li>
          </ul>
          <p>Piemērs ievadlaukam ar programmatiski piesaistīto iezīmi caur elementa <code>id</code>:</p>
          <pre className="Code-snippet" aria-label="Koda bloks">
            <code>
              <span className="Code-tag">&lt;label</span> for="abc123"<span className="Code-tag">&gt;</span>Lūdzu, ievadiet savu vārdu un uzvārdu:<span className="Code-tag">&lt;/label&gt;</span>
              <br/><span className="Code-tag">&lt;input</span> id="abc123" type="text" aria-required="true"<span className="Code-tag">&gt;</span>
            </code>
          </pre>
          <p><span className="Main-bold">Svarīgi:</span> kodā ir vienmēr <span className="Main-bold">semantiski jāpiesaista iezīmes, kļūdu paziņojumi un instrukcijas ievadlaukiem</span>, lai skaidrojums un ievadlauks tiktu automātiski savienoti koda struktūrā. Tas nodrošina efektīvu informācijas pasniegšanu, kas ir īpaši svarīgi tiem lietotājiem, kas izmanto palīgtehnoloģijas.</p>
          <p><span className="Main-bold">Svarīgi:</span> īpaši jāuzmanās ir ar veidlapām, kurās tiek iesniegti juridiski vai finansiāli nozīmīgi dati, vai kuru iesniegšanas rezultātā tiek mainīti lietotāja dati datubāzē. Tādos gadījumos ir jāparedz vismaz viena no sekojošām iespējām:</p>
          <ul className="Main-list">
            <li>Iespēja <span className="Main-bold">atcelt</span> iesniegtās izmaiņas.</li>
            <li>Iesniegtie dati ir automātiski jāvalidē un lietotājam jādod iespēja <span className="Main-bold"> izlabot kļūdas</span>.</li>
            <li>Pirms iesniegšanas lietotājam jādod iespēja <span className="Main-bold"> pārskatīt ievadītos datus un apstiprināt iesniegšanu</span>.</li>
          </ul>
        </section>
      </section>
      <section className="Main-fragment">
        <h2>Paredzamība</h2>
        <p>Ir <span className="Main-bold">jāinformē lietotājs</span> par notiekošajām izmainām – darbību rezultātiem, kļūdām, tehniskajām problēmām.</p>
        <p>Piemērs, kā lietotāju informēšanai var izmantot teksta fragmentu ar ARIA lomu <code>status</code>:</p>
        <pre className="Code-snippet" aria-label="Koda bloks">
          <code>
            <span className="Code-tag">&lt;span</span> role="status"<span className="Code-tag">&gt;</span> Dati ir veiksmīgi iesniegti <span className="Code-tag">&lt;/span&gt;</span>
          </code>
        </pre>
        <p><span className="Main-bold">Svarīgi:</span> vienas un tās pašas darbības nedrīkst izraisīt dažādus rezultātus.</p>
      </section>
      <section className="Main-fragment">
        <h2>Atkārtota satura izlaišana</h2>
        <p>Parasti vietnes galvenē ir novietots navigācijas panelis. Lietotājiem, kas saturam piekļūst ar tastatūru, pēc jaunas lapas atvēršanas ir katru reizi jāiziet caur visām navigācijas paneļa saitēm, lai nonāktu pie galvenās satura daļas. Tās ir liekas darbības, kas aizņem laiku un apgrūtina tīmekļa vietnes lietošanu tiem lietotājiem, kas izmanto tikai tastatūru.</p>
        <p><span className="Main-bold">Vienkāršs risinājums:</span> var nodrošināt lapas sākumā pirms navigācijas paneļa <span className="Main-bold">slēpto saiti uz galveno satura daļu</span>.</p>
        <p>Šajā tīmekļa vietnē ir nodrošinātās divas slēptās piekļūstamas saites: uz galveno saturu un uz vietnes karti. Tās saites ir pirmie elementi, kas nonāk fokusā, vietnē pārvietojoties ar Tab taustiņu. <span className="Main-bold">Pamēģiniet!</span></p> 
      </section>
      <section className="Main-fragment">
        <h2>Laika ierobežojumi jeb taimeri</h2>
        <p>Ir pēc iespējas <span className="Main-bold">jāizvairās no laika ierobežojumu ieviešanas</span>, jo daļai lietotāju tas var radīt piekļūstamības barjeras, neļaujot veikt nepieciešamas darbības.</p>
        <p>Ja taimers tomēr tiek izmantots, tad vienam no sekojošiem apgalvojumiem ir jābūt patiesam:</p>
        <ul className="Main-list">
          <li>Taimeri var izslēgt, pielāgot vai pagarināt.</li>
          <li>Ierobežojums ir vismaz 20 stundu garš.</li>
          <li>Taimers ir obligāta daļa no reālā laika notikuma.</li>
          <li>Taimera izmantošana ir būtiska un neizbēgama.</li>
        </ul>
      </section>
      <section className="Main-fragment">
        <h2>Navigācija</h2>
        <p>Katrai tīmekļa vietnei ir nepieciešama <span className="Main-bold">skaidra un paredzama navigācija</span>. Šajā tīmekļa vietnē navigācijas panelis augšā ir pieejams katrā vietnes lapā. Tas ļauj izvairīties no situācijas, kur lietotājs varētu uzrasties “strupceļā”.</p>
        <p>Šajā tīmekļa vietnē ir pieejama arī <Link className='Main-link' to='/navigation'>Vietnes karte</Link> – hierarhisks saraksts ar visām vietnes lapām.</p>
      </section>
      <section className="Main-fragment">
        <h2>Valoda</h2>
        <p>Ar HTML <code>lang</code> atribūtu ir jābūt norādītai lapas satura valodai kopumā un atsevišķiem elementiem, ja valoda mainās:</p>
        <pre className="Code-snippet" aria-label="Koda bloks">
          <code>
            <span className="Code-tag">&lt;html</span> lang="lv"<span className="Code-tag">&gt;</span><br/>    <span className="Code-tag">&lt;head&gt;&lt;/head&gt;</span><br/>    <span className="Code-tag">&lt;body&gt;</span><br/>        <span className="Code-tag">&lt;p&gt;</span>Satura fragments latviešu valodā<span className="Code-tag">&lt;/p&gt;</span><br/>        <span className="Code-tag">&lt;p</span> lang="en"<span className="Code-tag">&gt;</span>Content in English<span className="Code-tag">&lt;/p&gt;</span><br/>    <span className="Code-tag">&lt;/body&gt;</span><br/><span className="Code-tag">&lt;/html&gt;</span>  
          </code>
        </pre>
      </section>
      <hr role="presentation"/>
      <ul className="Main-list Main-list__final">
        <li>
          <Link className="Main-link" to='/testers'>Piekļūstamības nodrošināšana testētājiem</Link>
        </li>
        <li> 
          <Link className="Main-link" to='/designers'>Piekļūstamības nodrošināšana dizaineriem</Link>
        </li> 
        <li> 
          <Link className="Main-link" to='/content-makers'>Piekļūstamības nodrošināšana satura veidotājiem</Link>
        </li> 
      </ul>
    </>
  );
}

export default Developers;
