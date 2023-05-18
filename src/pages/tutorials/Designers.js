import { useEffect } from "react";
import { Link } from "react-router-dom";
import GroupingExample from '../../images/Grouping.png';

function Designers() {
  useEffect(() => {
    document.title = 'Piekļūstamības nodrošināšanas pamācība dizaineriem | Piekļūstamības atziņas';
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0)
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
          <p className="Designers-goodcontrast Main-example Main-center">Šim tekstam <span className="Main-bold">ir nodrošināts</span> pietiekams kontrasta koeficients</p>
          <p className="Designers-badcontrast Main-example Main-center">Šim tekstam <span className="Main-bold">nav nodrošināts</span> pietiekams kontrasta koeficients</p>
          <p>Pēc WCAG vadlīniju prasībām parastajam tekstam ir jānodrošina <span className="Main-bold">vismaz 4.5:1 kontrasta koeficients</span> ar fona krāsu, bet lielam tekstam (kas ir lielāks par 18pt vai 14pt treknrakstā) vismaz 3:1.</p> 
          <p><span className="Main-bold">Svarīgi: baltā krāsa ar melno krāsu veido pārāk augstu kontrastu</span>, kas var radīt neērtības cilvēkiem ar redzes traucējumiem. Lai no tā izvairītos, ir ieteicams baltās krāsas vietā izvēlēties pelēkbalto vai bēšo un melnās krāsas vietā – tumši pelēko.</p>
          <p className="Designers-overcontrast Main-example Main-center">Melns teksts uz balta fona</p>
          <p>Kontrasta koeficientu starp krāsām var <span className="Main-bold">pārbaudīt ar automatizētiem rīkiem</span>, piemēram <Link className='Main-link' to='https://coolors.co/' target='_blank'>Coolors</Link>.</p> 
          <p><Link className='Main-link' to='https://coolors.co/' target='_blank'>Coolors</Link> piedāvā arī rīku, kas ļauj uzģenerēt piekļūstamas krāsu kombinācijas, kuras var tālāk izmantot tīmekļa vietnes dizainā.</p>
        </section>
        <section className="Main-fragment">
          <h3>Krāsu nozīme</h3>
          <p>Krāsas var palīdzēt ātri nodot informāciju. Sarkanā krāsa parasti simbolizē kļūdas, darbības atcelšanu vai aizvēršanu, bet zaļā krāsa – veiksmīgas darbības un darbību apstiprināšanu. Eksistē daudz šāda veida <span className="Main-bold">asociāciju</span>, kuras var pielietot saskarnēs, lai uzlabotu to lietojamību.</p>
          <p>Tomēr <span className="Main-bold">nav ieteikts izmantot tikai krāsu informācijas nodošanai</span> – ir jāatceras par lietotājiem ar krāsu aklumu un krāsu uztveres īpatnībām. Lai atbalstītu elementa nozīmi, papildus krāsai var izmantot formu.</p>
          <div className="Designers-symbols">
            <span className="Designers-symbol Main-success" aria-label="Ķeksītis">&#10004;</span>
            <span className="Designers-symbol Main-warning" aria-label="Krusts">&#10006;</span>
          </div>
          <p>Protams, arī krāsa kopā ar formu informācijas nodošanai var būt <span className="Main-bold">nepietiekama</span> gadījumos, kad piekļuvei saturam tiek izmantots ekrānlasītājs.</p>
          <p>Tātad, vizuālajiem komponentiem ir jānodrošina arī <span className="Main-bold">tekstuālās alternatīvas</span>, kā, piemēram, šajā krāsu izvēlnes vizualizācijā:</p>
          <ul className="Designers-colors">
            <li><span className="Designers-colors-square Designers-green" aria-label="Zaļās krāsas kvadrātiņš"></span>Zaļā</li>
            <li><span className="Designers-colors-square Designers-white" aria-label="Baltās krāsas kvadrātiņš"></span>Baltā</li>
            <li><span className="Designers-colors-square Designers-red" aria-label="Terakotās krāsas kvadrātiņš"></span>Terakotā</li>
          </ul>
        </section>
      </section>
      <section className="Main-fragment">
        <h2>Teksts un lasāmība</h2>
        <section className="Main-fragment Main-fragment__nested">
          <h3>Burtveidola (fonta) izvēle</h3>
          <p>Izvēloties burtveidolu teksta noformēšanai, ir jāatceras sekojošas lietas:</p>
          <p className="Designers-sans Main-example Main-center">Bezserifa burtveidoli nodrošina augstāku piekļūstamību</p>
          <p className="Designers-decorative Main-example Main-center">Pārmērīgi dekoratīvi burtveidoli apgrūtina lasīšanu</p>
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
        <section className="Main-fragment Main-fragment__nested">
          <h3>Burtu izmērs</h3>
          <p>Ir ieteikts izmantot burtu izmēru, kas būtu <span className="Main-bold">ne mazāks par 12px</span>, jo mazāks izmērs var apgrūtināt lasīšanu vai pat padarīt to par neiespējamu. Piemērs: </p>
          <p className="Main-example Main-example-block Designers-smalltext">Pārāk mazs burtu izmērs var lietotājiem radīt saspridzinājumu un atbaidīt viņus no teksta lasīšanas. Lietotājiem ar redzes traucējumiem mazs burtu izmērs var kļūt par nepārvaramu barjeru satura uztverei.</p>
          <p>Arī <span className="Main-bold">pārāk liels</span> burtu izmērs <span className="Main-bold">nav</span> labs informācijas uztveršanai:</p>
          <p className="Main-example Main-example-block Designers-bigtext">Izvēloties ļoti lielu burtu izmēru regulārajam (ne virsrakstu) tekstam, tiek radīts nevajadzīgs sasprindzinājums un neskaidrība par satura struktūru un informācijas bloku hierarhiju.</p>
          <p>Ieteicamais burtu izmērs teksta rindkopām ir <span className="Main-bold">no 16 līdz 20px</span>.</p>
        </section>
        <section className="Main-fragment Main-fragment__nested">
          <h3>Izlīdzinājums</h3>
          <p>Teksta rindkopu <span className="Main-bold">izlīdzināšana centrā nav ieteicama</span>, jo pa centru izlīdzinātajā tekstā ir grūtāk atrast katras jaunas rindas sākumu:</p>
          <p className="Main-example Main-example-block Main-center">Senos laikos kaķis ar peli dzīvojuši kopā kā vīrs ar sievu vienā mājā. Kaķis gājis uz lauku medīt, un pelīte taisījusi ēdienu, cepusi gaļu un vārījusi putru. Pelīte bijusi laba un taupīga saimniece, un kaķis bijis ar viņu ļoti mierā. Reiz viņi abi kopā norunājuši iekrāt kaut ko arī bada dienām. Bet ko nu krāt? Pelīte sadomājusi, ka vislabāki būtu taukus krāt. Labi! Nu pelīte sākusi pa drusciņai vien lasīt taukus un krāt podiņā. Pēdīgi viņa piekrājusi pilnu podiņu, apsējusi ar platu kļavas lapu, un abi ar kaķīti aiznesuši uz mežu un paglabājuši biezos krūmos. (Avots: <Link to='https://pasakas.eu/kakis-un-pele-3' target='_blank'><u>Kaķis un pele</u></Link>)</p>
          <p>Teksta <span className="Main-bold">izlīdzināšana gar abām malām arī nav ieteicama</span>, jo tekstā veidojas nekonsekventas atstarpes un tā saucamās upes (angliski <span lang="en"><i>rivers of white</i></span>) – atstarpes, kas iet caur vairākām rindām un pasliktina lasāmību:</p>
          <p className="Main-example Main-example-block Main-justify">Kaķis apprecēja žurku un abi sadzīvoja dažus gadus itin laimīgi. Te vienu reizi kaķim iegribējās tauku. Un žurkai jau no senākām dienām bija iekrājušies tauki, brangi podi; tādēļ kaķis iesāka gudrot, kā šos tauku podus rokā dabūt. Gudroja, gudroja – aizgāja pie žurkas tēva un iztriecās ilgi jo ilgi. Bet pārnācis mājā, nu iemelsa žurkai, ka viņas māte mirstot nost. Žurka, zināms, tūliņ prom māti raudzīt, vai taisnība, ko kaķis tur sateicis. Bet kāmēr žurka pie vecākiem, kaķis ēd taukus ārā. Patlaban jau rija beidzamo podu, te pārnāks žurka, ierauga: šis pie tauku podiem! Un nu sāk lieliski lamāties. Kaķis saka, lai viņu tā nelamājot. Bet kas tev klausīs? (Avots: <Link to='https://pasakas.eu/kakis-un-pele-2' target='_blank'><u>Kaķis un pele</u></Link>)</p>
          <p>Ieteicams ir <span className="Main-bold">izlīdzināt tekstu pa kreisi</span> (izņēmums ir valodas ar rakstību no labās uz kreiso pusi).</p>
        </section>
        <section className="Main-fragment">
          <h3>Teksta struktūra un dekorācija</h3>
          <p>Ātrās atziņas par teksta noformēšanu:</p>
          <ul className="Main-list">
            <li>Garākus teksta gabalus ir labāk <span className="Main-bold">sadalīt mazākās rindkopās</span></li>
            <li>Atsevišķas daļas var <span className="Main-bold">strukturēt</span> ar aizzīmju punktu (angliski <span lang="en"><i>bullet points</i></span>) sarakstu palīdzību</li>
            <li>Optimālais rindas garums ir <span className="Main-bold">starp 40 un 75 burtiem</span></li>
            <li>Var izmantot treknrakstu, lai <span className="Main-bold">izceltu svarīgāko informāciju</span></li>
            <li>Pārāk <span className="Main-bold"><span className="Main-uppercase"><i>daudz</i></span> dekorāciju</span> <span className="Main-strike">pasliktina</span> <span className="Main-uppercase">lasāmību</span></li>
            <li>Dekorācijas ir jāizmanto konsekventi – <u>šīs teksts pasvītrojuma dēļ var tikt uztverts kā saite</u></li>
          </ul>
        </section>
      </section>
      <section className="Main-fragment">
        <h2>Kopējā satura struktūra</h2>
        <p>Lai veicinātu satura uztveramību, ir jādefinē <span className="Main-bold">skaidras attiecības starp satura komponentiem</span>. Šo var panākt, pielietojot grupēšanas principus:</p>
        <figure className="Main-figure">
          <img className="Main-img" src={GroupingExample} alt="Piemērs neveiksmīgam un veiksmīgam veidlapas ievadlauku noformējumam"></img>
          <figcaption className="Main-img-caption">Grupēšanas principa pielietošana veidlapas ievadlaukiem</figcaption>
        </figure>
        <p>Vizuāli izkliedēti ievadlauki ar vienādām atstarpēm (attēlā pa kreisi) var rādīt lietotājam mulsinājumu un palielināt laiku, kas būs patērēts veidlapas aizpildīšanai, un, iespējams, palielināt arī kļūdu skaitu. Bet, ja mēs <span className="Main-bold">vizuāli sagrupēsim</span> katru ievadlauku un iezīmi, saskarne būs saprotamāka un lietotājam draudzīgāka (attēlā pa labi).</p>
        <p>Arī šī pamācība kopumā var kalpot par piemēru – <span className="Main-bold">pamācības saturs ir sadalīts vairākās sekcijās</span>, kas ir savstarpēji vizuāli atdalītas – katrai sekcijai ir galvenais virsraksts un sekcijām ir arī apakšsekcijas ar saviem virsrakstiem, un starp tām ir ievērotas atstarpes, kas dod skaidru priekšstatu par to, kur sākas un beidzas katra sekcija.</p>
      </section>      
      <section className="Main-fragment">
        <h2>Pielāgojamība</h2>
        <p>Ir jābūt iespējamam saturam piekļūt ar dažādām ierīcēm, tāpēc <span className="Main-bold">viennozīmīgi</span> dizaina izstrādes posmā ir jāizveido satura izkārtojuma versijas <span className="Main-bold">dažādiem ekrānu izmēriem</span>, vismaz darbvirsmai un viedtālrunim.</p>
      </section> 
      <section className="Main-fragment">
        <h2>Procesu piekļūstamība</h2>
        <section className="Main-fragment Main-fragment__nested">
          <h3>Darbināmība</h3>
          <p>Satura piekļūstamība nav atdalāma no <span className="Main-bold">darbību piekļūstamības</span>. Visam procesam kopumā ir jābūt piekļūstamam.</p>
          <p>Projektējot lietotāja saskarni, <span className="Main-bold">nedrīkst iekļaut tādas obligātas darbības, kuras daļa lietotāju nevarētu veikt</span>. Piemērs ir obligāta balss ievade bez ievades alternatīvām, kas nebūtu piekļūstama cilvēkiem ar runas traucējumiem vai pat vienkārši stipru akcentu.</p>
        </section>
        <section className="Main-fragment Main-fragment__nested">
          <h3>Liekas darbības</h3>
          <p>Ja tīmekļa vietnē ir saturs, kuram lietotāji piekļūst ļoti bieži, laba prakse ir padarīt to par ļoti <span className="Main-bold">ātri pieejamu</span>. Piemērs no e-komercijas:</p>
          <p className="Main-example Main-center">Pieslēgties <span aria-label="Bultiņa">&#10230;</span> Mans profils <span aria-label="Bultiņa">&#10230;</span> Pēdējie pasūtījumi</p> 
          <p>Pieņemsim, ka lietotāji ļoti bieži vēlas apskatīt pēdējo pasūtījumu informāciju. Pievienojot ātru saiti uz pēdējiem pasūtījumiem, mēs dodam lietotājiem iespēju <span className="Main-bold">ātrāk uzzināt nepieciešamu informāciju</span>:</p>
          <p className="Main-example Main-center">Pieslēgties <span aria-label="Bultiņa">&#10230;</span> Pēdējie pasūtījumi</p>
          <p>Samazinot darbību skaitu, kas ir nepieciešams konkrētās darbības veikšanai, tiek uzlabota vietnes piekļūstamība.</p>
        </section>
        <section className="Main-fragment">
          <h3>Skaidri notikumi</h3>
          <p>Lai veicinātu saskarnes saprotamību, laba prakse ir <span className="Main-bold">signalizēt par notiekošajām izmaiņām</span>.</p> 
          <p>Kā, piemēram, šajā pogas vizualizācijā – uzliekot peles kursoru (vai arī elementam nonākot fokusā), notiek krāsas maiņa:</p>
          <Link className="Main-example Main-center Main-hoverable" role="button">Poga</Link>
          <p>Veidlapu gadījumā, ja, piemēram, ir notikusi validācijas kļūda, ievadlaukiem bieži tiek pievienota sarkana apmale. Protams, ir <span className="Main-bold">jāsniedz arī tekstuālā informācija</span> par kļūdu un tās būtību:</p>
          <div className="Main-example Designers-input">
            <input tabIndex={-1}></input>
            <p className="Designers-error">*lauks ir obligāts</p>
          </div>
        </section>
      </section>
      <hr role="presentation"/>
      <ul className="Main-list Main-list__final">
        <li> 
          <Link className="Main-link" to='/content-makers'>Piekļūstamības nodrošināšana satura veidotājiem</Link>
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

export default Designers;
