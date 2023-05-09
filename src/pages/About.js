import { useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    document.title = 'Piekļūstamības atziņas | Par mums';
  }, []);

  return (
    <>
      <h1>Par mums</h1>
      <section className="Main-fragment">
        <h2>Ideja un mērķis</h2>
        <p>“Piekļūstamības atziņas” ir <span className="Main-bold">atklāts piekļūstams informatīvs tīmekļa resurss</span>, kura mērķis ir vienkāršiem vārdiem paskaidrot, kas ir piekļūstamība tīmeklī, kāpēc tā ir svarīga un kādā veidā to ir iespējams nodrošināt.</p>
        <p>Šis resurss tika izstrādāts kā praktiska daļa bakalaura darba “Tīmekļa vietņu piekļūstamības nodrošināšana” ietvaros. Tīmekļa vietni un tās saturu izstrādāja Latvijas Universitātes Datorikas fakultātes studente Anna Rozvadovska.</p>
      </section>
      <section className="Main-fragment">
        <h2>Kontakti</h2>
        <p>E-pasts: <Link className="Main-link" to="mailto: anna.rozv@gmail.com">anna.rozv@gmail.com</Link></p>
      </section>
    </>
  );
}

export default About;
