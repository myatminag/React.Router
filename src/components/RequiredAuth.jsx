import { Navigate } from "react-router-dom";

const RequiredAuth = () => {
    const isLoggedIn = false;

    if (!isLoggedIn) {
        <Navigate to="/login" replace />;
    }
};

export default RequiredAuth;
