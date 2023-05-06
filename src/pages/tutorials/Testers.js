import { useEffect } from "react";

function Testers() {
    useEffect(() => {
        document.title = 'Piekļūstamības atziņas | Pamācība testētājiem';
    }, []);

    return (
        <>
            <h1>Testētājiem</h1>
        </>
    );
}

export default Testers;
