import { useEffect } from "react";

function Developers() {
    useEffect(() => {
        document.title = 'Piekļūstamības nodrošināšanas pamācība programmētājiem | Piekļūstamības atziņas';
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <>
            <h1>Programmētājiem</h1>
        </>
    );
}

export default Developers;
