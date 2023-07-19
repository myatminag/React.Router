import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import { Vans, loader as VansLoader } from "./pages/Vans/Vans";
import { VanDetail, loader as VanDetailLoader } from "./pages/Vans/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import { HostVans, loader as HostVansLoader } from "./pages/Host/HostVans";
import {
    HostVanDetail,
    loader as HostVanDetailLoader,
} from "./pages/Host/HostVanDetail";
import AppLayout from "./components/AppLayout";
import HostLayout from "./components/HostLayout";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login from "./pages/Login";
import requiredAuth from "./components/RequiredAuth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            { element: <Home />, index: true },
            { path: "/about", element: <About /> },
            {
                path: "/vans",
                children: [
                    { element: <Vans />, index: true, loader: VansLoader },
                    {
                        path: ":id",
                        element: <VanDetail />,
                        loader: VanDetailLoader,
                    },
                ],
            },
            {
                path: "/host",
                element: <HostLayout />,
                children: [
                    {
                        element: <Dashboard />,
                        index: true,
                        loader: () => requiredAuth(),
                    },
                    { path: "income", element: <Income /> },
                    { path: "reviews", element: <Reviews /> },
                    {
                        path: "vans",
                        element: <HostVans />,
                        loader: HostVansLoader,
                    },
                    {
                        path: "vans/:id",
                        element: <HostVanDetail />,
                        loader: HostVanDetailLoader,
                        children: [
                            { element: <HostVanInfo />, index: true },
                            { path: "pricing", element: <HostVanPricing /> },
                            { path: "photos", element: <HostVanPhotos /> },
                        ],
                    },
                ],
            },
            { path: "/login", element: <Login /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default router;
