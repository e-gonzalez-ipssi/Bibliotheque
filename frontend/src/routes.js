import { Navigate } from "react-router-dom";
import Interface from "./page/Interface"
import Romans from "./page/Romans"
import LNs from "./page/LNs"
import SpeBooks from "./page/SpeBooks"
import ArtBooks from "./page/ArtBooks"

const MAP_ROUTES = [
    { path: "/", element: <Navigate to="/app/romans" /> },
    { path: "/app", element: <Interface />, children: [
        { index: true, element: <Navigate to="/app/romans" /> },
        { path: "romans", element: <Romans /> },
        { path: "lns", element: <LNs /> },
        { path: "spebooks", element: <SpeBooks /> },
        { path: "artbooks", element: <ArtBooks /> },
    ]},
];

export default MAP_ROUTES;