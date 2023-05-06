import { useEffect } from "react";

function Designers() {
    useEffect(() => {
        document.title = 'Piekļūstamības atziņas | Pamācība dizaineriem';
    }, []);

    return (
        <>
            <h1>Dizaineriem</h1>
        </>
    );
}

export default Designers;
