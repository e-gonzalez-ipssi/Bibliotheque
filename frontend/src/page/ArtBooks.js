import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ART_BOOKS, GET_ART_BOOK } from "../api/books-api"
import TitleContent from "../component/TitleContent";
import Card from "../component/Card";
import Grid from "@mui/material/Grid";


function ArtBooks(props) {
    const { data, loading, error } = useQuery(GET_ART_BOOKS);
    if(loading) {
        return <></>
    }
    if(error) {
        return <></>
    }

    const books = data.getArtBooks;
    return (
        <>
            <TitleContent title="Romans" />
            <Grid container sx={{ alignItems: "center" }}>
            {
                books.map((book) => {
                    return (
                        <Grid item xs={2}>
                            <Card data={book} key={book.id} api={GET_ART_BOOK}/>
                        </Grid>
                    )
                })
            }
            </Grid>
        </>
    )
} 

export default ArtBooks;