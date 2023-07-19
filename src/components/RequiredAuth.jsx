import { redirect } from "react-router-dom";

const requiredAuth = () => {
    const isLoggedIn = false;

    if (!isLoggedIn) {
        throw redirect("/login");
    }
};

export default requiredAuth;
