import { useEffect } from "react";
import { Link } from "react-router-dom";

function Resources() {
  useEffect(() => {
    document.title = 'Piekļūstamības atziņas | Inforesursi';
  }, []);

  return (
    <>
      <h1>Inforesursi</h1>
      <section className="Main-fragment">
        <h2>Tiesiskie regulējumi, kas attiecas uz tīmekļa piekļūstamību Latvijā</h2>
        <p>Galvenais tiesību akts Latvijā, kas nosaka piekļūstamības prasības <span className="Main-bold">publiskā sektora iestāžu tīmekļa vietnēm</span>, ir Ministru kabineta noteikumi Nr. 445 <Link className="Main-link" to="https://likumi.lv/ta/id/316109-kartiba-kada-iestades-ievieto-informaciju-interneta" target="_blank">“Kārtība, kādā iestādes ievieto informāciju internetā”</Link>. </p>
        <p>Pagaidām Latvijā <span className="Main-bold">nav</span> spēkā tiesiskie regulējumi, kas paredzētu piekļūstamības <span className="Main-bold">prasības privātā sektora iestādēm</span>, bet 2025. gadā spēkā stāsies <Link className="Main-link" to="https://likumi.lv/ta/id/340554-precu-un-pakalpojumu-pieklustamibas-likums" target="_blank">“Preču un pakalpojumu piekļūstamības likums”</Link>, kas paredz piekļūstamības prasības sekojošajām precēm un pakalpojumiem:</p>
        <ul className="Main-list">
          <li><span>Datoriem un to operētājsistēmām</span></li>
          <li><span>Pašapkalpošanās termināļiem</span></li>
          <li><span>Elektroniskajām grāmatām un to programmatūrai</span></li>
          <li><span>Finanšu pakalpojumiem</span></li>
          <li><span>E-komercijas pakalpojumiem</span></li>
          <li><span>Elektronisko sakaru pakalpojumiem</span></li>
          <li><span>Pakalpojumiem, kas nodrošina piekļuvi audiovizuāliem elektronisko plašsaziņas līdzekļu pakalpojumiem</span></li>
          <li><span>Transporta pasažieru pārvadājumu pakalpojumiem un ar tiem saistītājām tehnoloģijām</span></li>
        </ul>
      </section>
      <section className="Main-fragment">
        <h2>Vadlīnijas</h2>
        <p>Galvenās tīmekļa satura nodrošināšanas vadlīnijas, kas ir pamata visiem tiesiskajiem regulējumiem, kas ir spēkā Latvijā un Eiropas Savienībā, ir <span className="Main-bold">Tīmekļa satura piekļūstamības vadlīnijas</span> jeb WCAG (angliski <span lang="en"><i>Web Content Accessibility Guidelines</i></span>) vadlīnijas. Arī šajā tīmekļa vietnē atrodamas pamācības tika izstrādātās, balstoties uz WCAG vadlīnijām.</p>
        <p>Vairāk informācijas:</p>
        <ul className="Main-list">
          <li>
            <Link 
              className="Main-link" 
              to="https://wcag.com/resource/what-is-wcag/" 
              target="_blank"
            >
              Pamatinformācija par WCAG vadlīnijām (angļu valodā)
            </Link>
          </li>
          <li> 
            <Link 
              className="Main-link" 
              to="https://www.w3.org/WAI/WCAG21/quickref/" 
              target="_blank"
            >
                Dinamisks WCAG prasību un paņēmienu saraksts (angļu valodā)
            </Link>
          </li>
        </ul>
      </section>
      <section className="Main-fragment">
        <h2>Citi resursi</h2>
        <p>Papildus resursi par tīmekļa piekļūstamību:</p>
        <ul className="Main-list">
          <li>
            <Link 
              className="Main-link" 
              to="https://lv.wikipedia.org/wiki/T%C4%ABmek%C4%BCa_piek%C4%BC%C5%ABstam%C4%ABba" 
              target="_blank"
            >
              Vikipēdijas raksts “Tīmekļa piekļūstamība”
            </Link>
          </li>
          <li> 
            <Link 
              className="Main-link" 
              to="https://www.pieklustamiba.lv/" 
              target="_blank"
            >
              Sociālās iniciatīvas “Piekļūstamība.lv” tīmekļa vietne
            </Link>
          </li>
          <li> 
            <Link 
              className="Main-link" 
              to="https://enciklopedija.lv/skirklis/53031" 
              target="_blank"
            >
              Nacionālās enciklopēdijas šķirklis “piekļūstamība, datorzinātnē”
            </Link>
          </li>
          <li> 
            <Link 
              className="Main-link" 
              to="https://www.w3.org/TR/wai-aria-1.2/" 
              target="_blank"
            >
              “WAI-ARIA” specifikācija (angļu valodā)
            </Link>
          </li>
          <li> 
            <Link 
              className="Main-link" 
              to="https://vadlinijas.pieklustamiba.lv/" 
              target="_blank"
            >
              Vides aizsardzības un reģionālās attīstības ministrijas vadlīnijas “Tīmekļvietnes izvērtējums atbilstoši digitālās vides piekļūstamības prasībām (WCAG 2.1 AA)”
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Resources;
