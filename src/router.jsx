import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import { Vans, loader as VansLoader } from "./pages/Vans/Vans";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import VanDetail from "./pages/Vans/VanDetail";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import AppLayout from "./components/AppLayout";
import HostLayout from "./components/HostLayout";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            {
                path: "/vans",
                children: [
                    { element: <Vans />, index: true, loader: VansLoader },
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
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default router;
