import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ROMANS } from "../api/books-api"
import TitleContent from "../component/TitleContent";
import Card from "../component/Card";
import Grid from "@mui/material/Grid";


function Biblioteque(props) {
    const { data, loading, error } = useQuery(GET_ROMANS);
    if(loading) {
        return <></>
    }
    if(error) {
        return <></>
    }

    const books = data.getRomans;
    return (
        <>
            <TitleContent title="Bibliotheque" />
            <Grid container sx={{ alignItems: "center" }}>
            {
                books.map((book) => {
                    return (
                        <Grid item xs={2}>
                            <Card data={book} key={book.id} />
                        </Grid>
                    )
                })
            }
            </Grid>
        </>
    )
} 

export default Biblioteque;