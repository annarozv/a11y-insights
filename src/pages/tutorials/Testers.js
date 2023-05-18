import { useEffect } from "react";
import { Link } from "react-router-dom";
import TestingFirefox from "../../images/Testing_Firefox.png";
import TestingWave from "../../images/Testing_WAVE.png";

function Testers() {
  useEffect(() => {
    document.title = 'Piekļūstamības nodrošināšanas pamācība testētājiem | Piekļūstamības atziņas';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <h1>Piekļūstamības testēšana</h1>
      <section className="Main-fragment">
        <h2>Galvenie aspekti</h2>
        <p>Piekļūstamības testēšanas process atklāj tās <span className="Main-bold">nepilnības</span> un tos <span className="Main-bold">defektus</span>, kas var daļai lietotāju izveidot piekļūstamības barjeras.</p>
        <p>Dizaineri, satura veidotāji un programmētāji piekļūstamību nodrošina katrs savā tvērumā, bet testētājam ir <span className="Main-bold">jāņem vērā visi piekļūstamības aspekti kopā</span>.</p>
      </section>
      <section className="Main-fragment">
        <h2>Kontrolsaraksts</h2>
        <p>Pārskatīsim galvenos momentus, kas ir jāpārbauda katrai tīmekļa vietnes lapai.</p>
        <p><span className="Main-bold">Svarīgi:</span> kontrolsarakstā ir apkopotas svarīgākās WCAG vadlīniju AA līmeņa prasības un iezīmētas pārbaudes metodes, detalizētākai informācijai <Link className="Main-link" to="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank">skatīt WCAG vadlīnijas</Link>.</p>
        <section className="Main-fragment__nested">
          <h3>Struktūra</h3>
          <p>Pārbaudīt lapas pirmkodu:</p>
          <ul className="Main-list">
            <li>Vai satura iezīmēšanai tiek izmantoti <span className="Main-bold">korekti semantiskie apvalki</span> – piemēram, HTML <code>&lt;ul&gt;</code> tags saraksta iezīmēšanai, <code>&lt;h1&gt;</code> līdz <code>&lt;h6&gt;</code> virsrakstiem.</li>
            <li>Vai <span className="Main-bold">virsraksti</span> tekstā tiek izmantoti konsekventi (izmantoti secīgi, un netiek izlaisti virsrakstu līmeņi).</li>
            <li>Vai satura <span className="Main-bold">struktūra atbilst satura vizuālajam izkārtojumam</span> (lai pārbaudītu šo, var pārlūkprogrammas inspektorā pilnībā izslēgt stilus jeb CSS stila lapas).</li>
          </ul>
        </section>
        <section className="Main-fragment__nested">
          <h3>Satura alternatīvas</h3>
          <p>Pārbaudīt, ka vizuālajiem, audio un videomateriāliem ir satura alternatīvas:</p>
          <ul className="Main-list">
            <li>Vai attēliem (izņemot tīri dekoratīvus) ir <span className="Main-bold">ALT teksti</span>.</li>
            <li>Vai attēlu ALT teksti ir atbilstoši, informatīvi un satur no dažiem vārdiem līdz ap 140 simboliem.</li>
            <li>Vai nepiekļūstamām diagrammām ir pievienots satura apraksts.</li>
            <li>Vai videomateriāliem ir pievienoti <span className="Main-bold">subtitri</span> vai uzraksti (angliski <span lang="en"><i>captions</i></span>).</li>
            <li>Vai audiomateriāliem ir pievienots <span className="Main-bold">transkripts vai satura apraksts</span>.</li>
          </ul>
        </section>      
        <section className="Main-fragment__nested">
          <h3>Kontrasts</h3>
          <p>Pārbaudīt, vai tekstam un vizuālajiem elementiem ir nodrošināts pietiekams <span className="Main-bold">kontrasts ar fona krāsu</span>:</p>
          <ul className="Main-list">
            <li>Vismaz 4.5:1 krāsu kontrasta koeficients parastajam tekstam.</li>
            <li>Vismaz 3:1 krāsu kontrasta koeficients liela izmēra tekstam (lielāks par 18pt vai 14pt treknrakstā) un grafiskajiem elementiem.</li>
          </ul>
          <p>Pārbaudīt krāsu kontrasta koeficientu var ar <Link className="Main-link" to="https://webaim.org/resources/contrastchecker/" target="_blank">WAVE kontrasta pārbaudes rīku</Link>.</p>
        </section>  
        <section className="Main-fragment__nested">
          <h3>Lapu nosaukumi</h3>
          <p>Pārbaudīt lapas nosaukumu jeb <code>&lt;title&gt;</code> meta tagu:</p>
          <ul className="Main-list">
            <li>Vai tas ir <span className="Main-bold">unikāls</span> – atšķiras no citu vietnes lapu nosaukumiem.</li>
            <li>Vai tas ir <span className="Main-bold">informatīvs</span> – apraksta lapas satura būtību un nolūku.</li>
            <li>Vai tas <span className="Main-bold">nav pārāk garš</span> – ideālajā gadījumā nepārsniedz 70 simbolus.</li>
          </ul>
        </section>        
        <section className="Main-fragment__nested">
          <h3>Pielāgojamība</h3>
          <p>Pārbaudīt:</p>
          <ul className="Main-list">
            <li>Vai vietne ir pielāgojama <span className="Main-bold">dažādiem ekrāna izmēriem</span>: darbvirsmas, planšetdatora, viedtālruņa ekrāniem.</li>
            <li>Vai vietne paliek lietojama, saturu <span className="Main-bold">palielinot uz 200%</span> – vai teksts netiek nogriezts un vai dažāda satura komponenti nepārklāj viens otru. </li>
          </ul>
        </section>
        <section className="Main-fragment__nested">
          <h3>Ievade un kļūdu apstrāde</h3>
          <p>Pārbaudīt veidlapu un ievadlauku piekļūstamību:</p>
          <ul className="Main-list">
            <li>Vai katram ievadlaukam ir korekti (automātiski noteicami) pievienota <span className="Main-bold">paskaidrojoša iezīme</span>.</li>
            <li>Vai pirms veidlapas iesniegšanas ir iespējams <span className="Main-bold">izlabot validācijas kļūdas</span>.</li>
            <li>Vai pirms veidlapas iesniegšanas lietotājam tiek dota iespēja <span className="Main-bold">pārskatīt</span> ievadītus datus un <span className="Main-bold">apstiprināt iesniegšanu</span>.</li>
          </ul>
        </section>
        <section className="Main-fragment__nested">
          <h3>Tastatūras piekļūstamība un fokusa secība</h3>
          <p>Pārbaudīt:</p>
          <ul className="Main-list">
            <li>Vai tīmekļa vietni ir iespējams izmantot pilnvērtīgi, izmantojot tikai tastatūru <span className="Main-bold">bez peles</span>.</li>
            <li>Vai, izmantojot <span className="Main-bold">Tab</span> taustiņu pārvietošanai, <span className="Main-bold">pārvietošana notiek secīgi</span> (no augšas uz apakšu, no kreisās puses uz labo pusi, bez neloģiskiem pārtraukumiem vai secības izmaiņām).</li>
          </ul>
        </section>
        <section className="Main-fragment">
          <h3>Kustīgs un mirgojošs saturs</h3>
          <p>Pārbaudīt:</p>
          <ul className="Main-list">
            <li>Vai ir iespējams <span className="Main-bold">apturēt, izslēgt vai paslēpt</span> jebkuru animāciju, kas sākas automātiski un ilgst vairāk par 5 sekundēm.</li>
            <li>Vai mirgojošs saturs, ja tāds ir, <span className="Main-bold">nemirgo biežāk par 3 reizēm sekundē</span>.</li>
          </ul>
        </section>
      </section>
      <section className="Main-fragment">
        <h2>Automatizētie rīki un manuālā pārbaude</h2>
        <p>Automatizētie testēšanas rīki ir <span className="Main-bold">lielisks palīgs</span> piekļūstamības testētājiem.</p>
        <p>Viens no populārākajiem piekļūstamības testēšanas rīkiem ir <Link className="Main-link" to="https://wave.webaim.org/" target="_blank">WAVE rīks</Link>:</p>
        <figure className="Main-figure">
          <img className="Main-img Main-border-img" src={TestingWave} alt="WAVE testēšanas rīka panelis"></img>
          <figcaption className="Main-img-caption">WAVE testēšanas rīka rezultātu pārskats</figcaption>
        </figure>
        <p>Kā arī, gandrīz katra mūsdienīga pārlūkprogramma satur <span className="Main-bold">piekļūstamības sekciju inspektorā</span>:</p>
        <figure className="Main-figure">
          <img className="Main-img Main-border-img" src={TestingFirefox} alt="Ekrānattēls no Firefox pārlūkprogrammas inspektora piekļūstamības sekcijas"></img>
          <figcaption className="Main-img-caption">Firefox inspektora piekļūstamības sekcija: ir redzama fokusa secības un kontrasta pārbaude</figcaption>
        </figure>
        <p><span className="Main-bold">Svarīgi:</span> lai arī automatizētie rīki ļauj ietaupīt laiku un atvieglot piekļūstamības testēšanu, tie <span className="Main-bold">nevar pilnībā aizvietot manuālo pārbaudi</span>.</p>
        <p>Piekļūstamības aspekti, kurus <span className="Main-bold">var pārbaudīt automatizēti</span>:</p>
        <ul className="Main-list">
          <li>Koda korektums</li>
          <li>Virsrakstu struktūras korektums</li>
          <li>Satura tekstuālo alternatīvu (ALT tekstu, iezīmju, subtitru, transkriptu) klātbūtne</li>
          <li>Burtu izmērs</li>
          <li>Fokusa secība</li>
          <li>Krāsu kontrasts atsevišķiem satura fragmentiem</li>
        </ul>
        <p>Piekļūstamības aspekti, kurus <span className="Main-bold">nevar pārbaudīt automatizēti</span>:</p>
        <ul className="Main-list">
          <li>Satura tekstuālo alternatīvu kvalitāte</li>
          <li>Tastatūras piekļūstamība</li>
          <li>Procesu piekļūstamība</li>
          <li>Satura lietojamība pēc tālummaiņas (angliski zoom)</li>
          <li>Piekļūstamība ar palīgtehnoloģijām</li>
        </ul>
        <p>Tātad, efektīvākā pieeja ir <span className="Main-bold">apvienot automatizēto rīku izmantošanu un pārdomātu manuālo pārbaudi</span>.</p>
      </section>
      <section className="Main-fragment">
        <h2>Lietotāju dalība</h2>
        <p>Katrs lietotājs mijiedarbojas ar tehnoloģijām <span className="Main-bold">citādi</span>. Mēs nezinām, kā tieši, un nekad nevarēsim šo zināt. Kā arī, mēs nekad nevarēsim nodrošināt perfektu lietotāja pieredzi katram konkrētam lietotājam. Bet eksistē dažas efektīvas metodes, kas var palīdzēt mums apmierināt pēc iespējas vairāk lietotāju vajadzības. Viena no tām ir <span className="Main-bold">lietotāju iesaistīšana testēšanas procesa</span>.</p>
        <p><span className="Main-bold">Galvenais mērķis:</span> atklāt vēl nezināmas un nenovērstas produkta piekļūstamības barjeras.</p>
        <p>Ir svarīgi ne tikai formāli apmierināt vadlīniju prasības, bet <span className="Main-bold">uztaisīt tiešam piekļūstamu un lietojamu produktu</span>.</p>
        <p>Ieteikumi efektīvai un produktīvai lietotāju iesaistīšanai:</p>
        <ul className="Main-list Main-list__numeric">
          <li>Izvēlēties <span className="Main-bold">reprezentatīvu</span> testētāju grupu – dažāda vecuma un dzimuma lietotājus, un lietotājus ar dažāda veida ierobežojumiem</li>
          <li>Uzturēt <span className="Main-bold">draudzīgu</span> un nesaspringtu atmosfēru</li>
          <li>Ļaut lietotājiem <span className="Main-bold">brīvi mijiedarboties</span> ar produktu vai tā prototipu</li>
          <li><span className="Main-bold">Piefiksēt</span> rezultātus</li>
          <li><span className="Main-bold">Objektīvi novērtēt</span> rezultātus un ekstrapolēt tos uzmanīgi</li>
        </ul>
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
          <Link className="Main-link" to='/developers'>Piekļūstamības nodrošināšana programmētājiem</Link> 
        </li>
      </ul>
    </>
  );
}

export default Testers;
