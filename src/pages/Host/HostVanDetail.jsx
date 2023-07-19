import { useLoaderData, Link, Outlet, NavLink } from "react-router-dom";
import { getHostVans } from "../../api";

export const loader = ({ params }) => {
    return getHostVans(params.id);
};

export const HostVanDetail = () => {
    const currVan = useLoaderData();

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };

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

                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) =>
                            isActive ? activeStyle : null
                        }
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) =>
                            isActive ? activeStyle : null
                        }
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) =>
                            isActive ? activeStyle : null
                        }
                    >
                        Photos
                    </NavLink>
                </nav>

                <Outlet context={{ currVan }} />
            </div>
        </section>
    );
};
