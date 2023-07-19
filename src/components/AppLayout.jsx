import { Outlet } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

import UserIcon from "../assets/user-icon.svg";

const AppLayout = () => {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };

    return (
        <div className="site-wrapper">
            <header>
                <Link className="site-logo" to="/">
                    #VanLife
                </Link>
                <nav>
                    <NavLink
                        to="/host"
                        style={({ isActive }) =>
                            isActive ? activeStyle : null
                        }
                    >
                        Host
                    </NavLink>
                    <NavLink
                        to="/about"
                        style={({ isActive }) =>
                            isActive ? activeStyle : null
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/vans"
                        style={({ isActive }) =>
                            isActive ? activeStyle : null
                        }
                    >
                        Vans
                    </NavLink>
                    <Link to="login" className="login-link">
                        <img src={UserIcon} className="login-icon" />
                    </Link>
                </nav>
            </header>
            <Outlet />
            <footer>&#169; 2022 #VANLIFE</footer>
        </div>
    );
};

export default AppLayout;
