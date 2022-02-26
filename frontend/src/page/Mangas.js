import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MANGAS, GET_MANGA } from "../api/object-api"
import TitleContent from "../component/TitleContent";
import Card from "../component/Card";
import Grid from "@mui/material/Grid";


function Mangas(props) {
    const { data, loading, error } = useQuery(GET_MANGAS);
    if(loading) {
        return <></>
    }
    if(error) {
        return <></>
    }

    const books = data.getMangas;
    return (
        <>
            <TitleContent title="Mangas" />
            <Grid container sx={{ alignItems: "center" }}>
            {
                books.map((book) => {
                    return (
                        <Grid item xs={2}>
                            <Card data={book} key={book.id} api={GET_MANGA}/>
                        </Grid>
                    )
                })
            }
            </Grid>
        </>
    )
} 

export default Mangas;