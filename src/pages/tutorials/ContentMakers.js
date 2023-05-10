import { useEffect } from "react";

function ContentMakers() {
  useEffect(() => {
    document.title = 'Piekļūstamības atziņas | Pamācība satura veidotājiem';
  }, []);

  return (
    <>
      <h1>Satura veidotājiem</h1>    
      <section className="Main-fragment">

      </section>
    </>
  );
}

export default ContentMakers;
