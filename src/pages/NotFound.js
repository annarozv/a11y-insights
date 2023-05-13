import { Link } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = 'Lapa nav atrasta | Piekļūstamības atziņas';
  }, []);

  return (
    <>
      <h1>Ups! Lapa nav atrasta!</h1>
      <Link className="Main-button Main-center NotFound-link" to="/">Uz galveno lapu</Link>
    </>
  );
}

export default NotFound;
