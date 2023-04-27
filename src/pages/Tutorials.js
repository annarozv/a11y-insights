import { useEffect } from "react";

function Tutorials() {
  useEffect(() => {
    document.title = 'Piekļūstamības atziņas | Pamācības';
  }, []);

  return (
    <div className="Tutorials">
      <h1>Pamācības</h1>
    </div>
  );
}

export default Tutorials;