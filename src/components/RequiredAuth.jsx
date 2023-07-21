import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
    const isLoggedIn = false;

    if (!isLoggedIn) {
        <Navigate to="/login" replace />;
    }

    return children;
};

export default RequiredAuth;
