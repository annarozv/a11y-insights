import { useEffect } from "react";

function Resources() {
  useEffect(() => {
    document.title = 'Piekļūstamības atziņas | Resursi';
  }, []);

  return (
    <div className="Resources">
      <h1>Resursi</h1>
    </div>
  );
}

export default Resources;