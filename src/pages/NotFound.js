import { Link } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = 'Piekļūstamības atziņas | Lapa nav atrasta';
  }, []);

  return (
    <>
      <h1>Ups! Lapa nav atrasta!</h1>
      <Link className="Main-link NotFound-link" to="/">Uz galveno lapu</Link>
    </>
  );
}

export default NotFound;
