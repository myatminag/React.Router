import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <header>
                <Link className="site-logo" to="/">
                    #VanLife
                </Link>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </nav>
            </header>
            <Outlet />
        </div>
    );
};

export default AppLayout;
