import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

const HostVanDetail = () => {
    const { id } = useParams();
    const [currVan, setCurrVan] = useState(null);

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then((res) => res.json())
            .then((data) => setCurrVan(data.vans));
    }, []);

    if (!currVan) {
        return <h1>Loading...</h1>;
    }

    return (
        <section>
            <Link to=".." relative="path" className="back-button">
                &larr; <span>Back to all vans</span>
            </Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i className={`van-type van-type-${currVan.type}`}>
                            {currVan.type}
                        </i>
                        <h3>{currVan.name}</h3>
                        <h4>${currVan.price}/day</h4>
                    </div>
                </div>
                <Outlet />
            </div>
        </section>
    );
};

export default HostVanDetail;
