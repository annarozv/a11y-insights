import { useEffect } from "react";

function Testers() {
    useEffect(() => {
        document.title = 'Piekļūstamības nodrošināšanas pamācība testētājiem | Piekļūstamības atziņas';
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <>
            <h1>Testētājiem</h1>
        </>
    );
}

export default Testers;
