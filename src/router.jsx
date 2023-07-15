import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import AppLayout from "./components/AppLayout";
import VanDetail from "./pages/VanDetail";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/vans", element: <Vans /> },
            { path: "/vans/:id", element: <VanDetail /> },
        ],
    },
]);

export default router;
