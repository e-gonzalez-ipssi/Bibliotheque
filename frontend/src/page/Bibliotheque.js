import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ROMANS } from "../api/books-api"
import TitleContent from "../component/TitleContent";

function Biblioteque(props) {
    const { data, loading, error } = useQuery(GET_ROMANS);
    console.log(data);
    return (
        <>
            <TitleContent title="Bibliotheque" />
        </>
    )
} 

export default Biblioteque;