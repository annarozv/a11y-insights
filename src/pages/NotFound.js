import { Link } from "react-router-dom";


function NotFound() {
    return (
        <>
            <h1>Ups! Lapa nav atrasta!</h1>
            <Link className="Main-link NotFound-link" to="/">Uz galveno lapu</Link>
        </>
    );
}

export default NotFound;
