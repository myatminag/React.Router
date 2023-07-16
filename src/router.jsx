import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import VanDetail from "./pages/VanDetail";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import AppLayout from "./components/AppLayout";
import HostLayout from "./components/HostLayout";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            {
                path: "/vans",
                children: [
                    { element: <Vans />, index: true },
                    { path: ":id", element: <VanDetail /> },
                ],
            },
            {
                path: "/host",
                element: <HostLayout />,
                children: [
                    { element: <Dashboard />, index: true },
                    { path: "income", element: <Income /> },
                    { path: "reviews", element: <Reviews /> },
                    { path: "vans", element: <HostVans /> },
                    {
                        path: "vans/:id",
                        element: <HostVanDetail />,
                        children: [
                            { element: <HostVanInfo />, index: true },
                            { path: "pricing", element: <HostVanPricing /> },
                            { path: "photos", element: <HostVanPhotos /> },
                        ],
                    },
                ],
            },
        ],
    },
]);

export default router;
