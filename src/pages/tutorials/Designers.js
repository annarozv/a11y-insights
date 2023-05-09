import { useEffect } from "react";
import { Link } from "react-router-dom";
import GroupingExample from '../../images/designers/Grouping.png';

function Designers() {
  useEffect(() => {
    document.title = 'Piekļūstamības atziņas | Piekļūstamības nodrošināšanas pamācība dizaineriem';
  }, []);

  return (
    <>
      <h1>Piekļūstamības nodrošināšana dizaineriem</h1>
      <section className="Main-fragment">
        <h2>Galvenie aspekti</h2>
        <p>Izstrādājot dizainu tīmekļa vietnei, dizaineram ir jārūpējas par satura <span className="Main-bold">uztveramību</span> un <span className="Main-bold">saprotamību</span>. </p>
        <p>Lai izstrādāts dizains būtu piekļūstams, uzmanība ir jāpievērš gan <span className="Main-bold">vizuālajiem aspektiem</span>, gan procesu piekļūstamībai un <span className="Main-bold">lietotāja pieredzei</span>.</p>
      </section>
      <section className="Main-fragment">
        <h2>Krāsu izvēle</h2>
        <section className="Main-fragment Main-fragment__nested">
          <h3>Kontrasts</h3>
          <p>Pietiekams priekšplāna un fona krāsu kontrasts ļauj cilvēkiem ar tādiem redzes traucējumiem kā pasliktināta redze, zemāka kontrastjutība un krāsu uztveres īpatnībām pilnvērtīgi uztvert saturu. </p>
          <p className="Designers-goodcontrast">Šim tekstam <span className="Main-bold">ir nodrošināts</span> pietiekams kontrasta koeficients</p>
          <p className="Designers-badcontrast">Šim tekstam <span className="Main-bold">nav nodrošināts</span> pietiekams kontrasta koeficients</p>
          <p>Pēc WCAG vadlīniju prasībām parastajam tekstam ir jānodrošina <span className="Main-bold">vismaz 4.5:1 kontrasta koeficients</span> ar fona krāsu, bet lielam tekstam (kas ir lielāks par 18px vai 14px treknrakstā) vismaz 3:1.</p> 
          <p>Kontrasta koeficientu starp krāsām var pārbaudīt ar automatizētiem rīkiem, piemēram <Link className='Main-link' to='https://coolors.co/' target='_blank'>Coolors</Link>.</p> 
          <p><Link className='Main-link' to='https://coolors.co/' target='_blank'>Coolors</Link> piedāvā arī rīku, kas ļauj uzģenerēt piekļūstamas krāsu kombinācijas, kuras var tālāk izmantot tīmekļa vietnes dizainā.</p>
        </section>
        <section className="Main-fragment">
          <h3>Krasu nozīme</h3>
          <p>Krāsas var palīdzēt ātri nodot informāciju. Sarkanā krāsa parasti simbolizē kļūdas, darbības atcelšanu vai aizvēršanu, bet zaļā krāsa – veiksmīgas darbības un darbību apstiprināšanu. Eksistē daudz šāda veida <span className="Main-bold">asociāciju</span>, kuras var pielietot saskarnēs, lai uzlabotu to lietojamību.</p>
          <p>Tomēr <span className="Main-bold">nav ieteikts izmantot tikai krāsas informācijas nodošanai</span> – ir jāatceras par lietotājiem ar krāsu aklumu un krāsu uztveres īpatnībām. Lai atbalstītu elementa nozīmi, papildus krāsai var izmantot formu.</p>
          <div className="Designers-symbols">
            <span className="Designers-symbol Main-success">&#10004;</span>
            <span className="Designers-symbol Main-warning">&#10006;</span>
          </div>
          <p>Protams, arī krāsa kopā ar formu informācijas nodošanai var būt nepietiekama gadījumos, kad piekļuvei saturam tiek izmantots ekrānlasītājs.</p>
          <p>Tātad, vizuālajiem komponentiem ir jānodrošina arī <span className="Main-bold">tekstuālās alternatīvas</span>, kā, piemēram, šajā krāsu izvēlnes vizualizācijā:</p>
          <ul className="Designers-colors">
            <li><span className="Designers-colors-square Main-success">&#9209;</span>Zaļā</li>
            <li><span className="Designers-colors-square Main-light">&#9209;</span>Baltā</li>
            <li><span className="Designers-colors-square Main-warning">&#9209;</span>Terakotā</li>
          </ul>
        </section>
      </section>
      <section className="Main-fragment">
        <h2>Teksts</h2>
        <section className="Main-fragment Main-fragment__nested">
          <h3>Burtveidola (fonta) izvēle</h3>
          <p>Izvēloties burtveidolu teksta noformēšanai, ir jāatceras sekojošas lietas:</p>
          <p className="Designers-sans">Bezserifa burtveidoli nodrošina augstāku piekļūstamību</p>
          <p className="Designers-decorative">Pārmērīgi dekoratīvi burtveidoli apgrūtina lasīšanu</p>
          <p>Ir daži burtveidoli, kas ir <span className="Main-bold">globāli atzīti kā piekļūstamākie</span>, piemēram: </p>
          <ul className="Main-list">
            <li>Arial</li>
            <li>Helvetica</li>
            <li>Calibri</li>
            <li>Verdana</li>
            <li>Tahoma</li>
            <li>Times New Roman</li>
          </ul>
          <p>OpenDyslexic un Comic Sans ir burtveidoli, kas var atvieglot teksta lasīšanu tieši <span className="Main-bold">lietotājiem ar disleksiju</span>.</p>
        </section>
        <section className="Main-fragment">
          <h3>Teksta bloku noformēšana</h3>
        </section>
      </section>
      <section className="Main-fragment">
        <h2>Satura struktūra un navigācija</h2>
        <section className="Main-fragment Main-fragment__nested">
          <h3>Informācijas hierarhija</h3>
          <p>Lai veicinātu satura uztveramību, ir jādefinē <span className="Main-bold">skaidras attiecības starp satura komponentiem</span>. Šo var panākt, pielietojot grupēšanas principus:</p>
          <figure className="Main-figure">
            <img className="Main-img" src={GroupingExample} alt="Piemērs neveiksmīgam un veiksmīgam veidlapas ievadlauku noformējumam"></img>
            <figcaption className="Main-img-caption">Grupēšanas principa pielietošana veidlapas ievadlaukiem</figcaption>
          </figure>
          <p>Vizuāli izkliedēti ievadlauki ar vienādām atstarpēm (attēlā pa kreisi) var rādīt lietotājam mulsinājumu un palielināt laiku, kas būs patērēts veidlapas aizpildīšanai, un, iespējams, palielināt arī kļūdu skaitu. Bet, ja mēs <span className="Main-bold">vizuāli sagrupēsim</span> katru ievadlauku un iezīmi, saskarne būs saprotamāka un lietotājam draudzīgāka (attēlā pa labi).</p>
          <p>Arī šī pamācība kopumā var kalpot par piemēru – <span className="Main-bold">pamācības saturs ir sadalīts vairākās sekcijās</span>, kas ir savstarpēji vizuāli atdalītas – katrai sekcijai ir galvenais virsraksts un sekcijām ir arī apakšsekcijas ar saviem virsrakstiem, un starp tām ir ievērotas atstarpes, kas dod skaidru priekšstatu par to, kur sākas un beidzas katra sekcija.</p>
        </section>
        <section className="Main-fragment">
          <h3>Navigācija</h3>
          <p>Katrai tīmekļa vietnei ir nepieciešama skaidra paredzama navigācija. Šajā tīmekļa vietnē navigācijas panelis augšā ir pieejams katrā vietnes lapā. Tas ļauj izvairīties no situācijas, kur lietotājs varētu uzrasties “strupceļā”.</p>
          <p>Šajā tīmekļa vietnē ir pieejama arī <Link className='Main-link' to='/navigation'>Vietnes karte</Link> – hierarhisks saraksts ar visām vietnes lapām.</p>
        </section>
      </section>
    </>
  );
}

export default Designers;
