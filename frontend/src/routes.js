import { Navigate } from "react-router-dom";
import Interface from "./page/Interface"
import Bibliotheque from "./page/Bibliotheque"

const MAP_ROUTES = [
    { path: "/", element: <Navigate to="/app/bibliotheque" /> },
    { path: "/app", element: <Interface />, children: [
        { index: true, element: <Navigate to="/app/bibliotheque" /> },
        { path: "Bibliotheque", element: <Bibliotheque /> },
    ]},
];

export default MAP_ROUTES;