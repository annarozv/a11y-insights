import { useEffect } from "react";
import { Link } from "react-router-dom";

function Tutorials() {
  useEffect(() => {
    document.title = 'Piekļūstamības nodrošināšanas ieteikumi | Piekļūstamības atziņas';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <h1>Piekļūstamības nodrošināšanas ieteikumi</h1>
      <section className="Main-fragment">
        <h2>Par ieteikumiem</h2>
        <p>Šeit ir pieejami tīmekļa vietņu piekļūstamības nodrošināšanas ieteikumi dizaineriem, satura veidotājiem, programmētājiem un testētājiem. Ieteikumi tika formulēti, balstoties uz <Link className="Main-link" to='https://wcag.com/resource/what-is-wcag/' target="_blank">WCAG vadlīniju</Link> AA līmeņa prasībām.</p>
      </section>
      <section className="Main-fragment">
        <h2>Pamācības izvēle atkarībā no lomas projektā</h2>
        <p>Ieteikumi ir sadalīti četrās kategorijās, lai Jūs varētu izvēlēties to, kas būtu aktuāla <span className="Main-bold">tieši Jums</span>.</p>
        <div className="Tutorials-buttons">
          <Link className="Main-button" to='/designers' role="button">Dizaineriem</Link>
          <Link className="Main-button" to='/content-makers' role="button">Satura veidotājiem</Link>
          <Link className="Main-button" to='/developers' role="button">Programmētājiem</Link>
          <Link className="Main-button" to='/testers' role="button">Testētājiem</Link>
        </div>
        <p>Tomēr, ja Jūs piedalāties projektā vairākās lomās vienlaicīgi vai izstrādājat savu individuālo projektu, <span className="Main-bold">ieteicam Jums iziet cauri visiem ieteikumiem</span>, lai nodrošinātu pilnvērtīgu piekļūstamību gala produktam.</p>
      </section>
    </>
  );
}

export default Tutorials;
