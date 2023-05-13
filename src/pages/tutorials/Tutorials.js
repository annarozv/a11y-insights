import { useEffect } from "react";
import { Link } from "react-router-dom";

function Tutorials() {
  useEffect(() => {
    document.title = 'Piekļūstamības nodrošināšanas pamācības | Piekļūstamības atziņas';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <h1>Piekļūstamības nodrošināšanas pamācības</h1>
      <section className="Main-fragment">
        <h2>Par pamācībām</h2>
        <p>Šeit ir pieejamas tīmekļa vietņu piekļūstamības nodrošināšanas pamācības dizaineriem, satura veidotājiem, programmētājiem un testētājiem. Pamācības tika izstrādātās, balstoties uz <Link className="Main-link" to='https://wcag.com/resource/what-is-wcag/' target="_blank">WCAG vadlīniju</Link> AA līmeņa prasībām.</p>
      </section>
      <section className="Main-fragment">
        <h2>Pamācības izvēle atkarībā no lomas projektā</h2>
        <p>Pamācības ir sadalītās četrās kategorijās, lai Jūs varētu izvēlēties to, kas būtu aktuāla <span className="Main-bold">tieši Jums</span>.</p>
        <div className="Tutorials-buttons">
          <Link className="Main-button" to='/designers' role="button">Dizaineriem</Link>
          <Link className="Main-button" to='/content-makers' role="button">Satura veidotājiem</Link>
          <Link className="Main-button" to='/developers' role="button">Programmētājiem</Link>
          <Link className="Main-button" to='/testers' role="button">Testētājiem</Link>
        </div>
        <p>Tomēr, ja Jūs piedalāties projektā vairākās lomās vienlaicīgi vai izstrādājat savu individuālo projektu, <span className="Main-bold">ieteicam Jums iziet cauri visām pamācībām</span>, lai nodrošinātu pilnvērtīgu piekļūstamību gala produktam.</p>
      </section>
    </>
  );
}

export default Tutorials;
