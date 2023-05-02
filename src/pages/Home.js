import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = 'Piekļūstamības atziņas';
  }, []);

  return (
    <div className="Home">
      <>
        <h1>Informatīvs resurss "Piekļūstamības Atziņas"</h1>
        <p className="paragraph-centered">Vērtīga informācija par tīmekļa piekļūstamību</p>
        <hr/>
      </>
    </div>
  );
}

export default Home;
