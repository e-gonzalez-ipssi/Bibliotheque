import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SPE_BOOKS, GET_SPE_BOOK } from "../api/object-api"
import TitleContent from "../component/TitleContent";
import Card from "../component/Card";
import Grid from "@mui/material/Grid";


function SpeBooks(props) {
    const { data, loading, error } = useQuery(GET_SPE_BOOKS);
    if(loading) {
        return <></>
    }
    if(error) {
        return <></>
    }

    const books = data.getSpeBooks;
    return (
        <>
            <TitleContent title="Specials Books" />
            <Grid container sx={{ alignItems: "center" }}>
            {
                books.map((book) => {
                    return (
                        <Grid item xs={2}>
                            <Card data={book} key={book.id} api={GET_SPE_BOOK}/>
                        </Grid>
                    )
                })
            }
            </Grid>
        </>
    )
} 

export default SpeBooks;