import { Navigate } from "react-router-dom";
import Interface from "./page/Interface"
import Romans from "./page/Romans"
import LNs from "./page/LNs"
import SpeBooks from "./page/SpeBooks"
import ArtBooks from "./page/ArtBooks"
import Mangas from "./page/Mangas";
import CDs from "./page/CDs";

const MAP_ROUTES = [
    { path: "/", element: <Navigate to="/app/romans" /> },
    { path: "/app", element: <Interface />, children: [
        { index: true, element: <Navigate to="/app/romans" /> },
        { path: "romans", element: <Romans /> },
        { path: "lns", element: <LNs /> },
        { path: "spebooks", element: <SpeBooks /> },
        { path: "artbooks", element: <ArtBooks /> },
        { path: "mangas", element: <Mangas /> },
        { path: "cds", element: <CDs /> },
    ]},
];

export default MAP_ROUTES;