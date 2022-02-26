import { Navigate } from "react-router-dom";
import Interface from "./page/Interface"
import Romans from "./page/Romans"
import LNs from "./page/LNs"

const MAP_ROUTES = [
    { path: "/", element: <Navigate to="/app/romans" /> },
    { path: "/app", element: <Interface />, children: [
        { index: true, element: <Navigate to="/app/romans" /> },
        { path: "romans", element: <Romans /> },
        { path: "lns", element: <LNs /> },
    ]},
];

export default MAP_ROUTES;