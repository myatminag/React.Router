import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import VanDetail from "./pages/VanDetail";
import AppLayout from "./components/AppLayout";
import HostLayout from "./components/HostLayout";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/vans", element: <Vans /> },
            { path: "/vans/:id", element: <VanDetail /> },
            {
                path: "/host",
                element: <HostLayout />,
                children: [
                    { element: <Dashboard />, index: true },
                    { path: "income", element: <Income /> },
                    { path: "reviews", element: <Reviews /> },
                ],
            },
        ],
    },
]);

export default router;
