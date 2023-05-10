import { useEffect } from "react";

function Developers() {
    useEffect(() => {
        document.title = 'Piekļūstamības atziņas | Pamācība programmētājiem';
    }, []);

    return (
        <>
            <h1>Programmētājiem</h1>
        </>
    );
}

export default Developers;
