import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LNS, GET_LN } from "../api/object-api"
import TitleContent from "../component/TitleContent";
import Card from "../component/Card";
import Grid from "@mui/material/Grid";


function LNs(props) {
    const { data, loading, error } = useQuery(GET_LNS);
    if(loading) {
        return <></>
    }
    if(error) {
        return <></>
    }

    const books = data.getLNs;
    return (
        <>
            <TitleContent title="Light Novels" />
            <Grid container sx={{ alignItems: "center" }}>
            {
                books.map((book) => {
                    return (
                        <Grid item xs={2}>
                            <Card data={book} key={book.id} api={GET_LN}/>
                        </Grid>
                    )
                })
            }
            </Grid>
        </>
    )
} 

export default LNs;