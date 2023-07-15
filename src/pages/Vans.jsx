import { useEffect, useState } from "react";

const Vans = () => {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans));
    }, []);

    console.log("vans", vans);

    return <div>Enter</div>;
};

export default Vans;
