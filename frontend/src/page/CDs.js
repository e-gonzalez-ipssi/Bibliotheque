import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CDS, GET_CD } from "../api/object-api"
import TitleContent from "../component/TitleContent";
import CardCD from "../component/CardCD";
import Grid from "@mui/material/Grid";


function CDs(props) {
    const { data, loading, error } = useQuery(GET_CDS);
    if(loading) {
        return <></>
    }
    if(error) {
        return <></>
    }

    const cds = data.getCDs;
    return (
        <>
            <TitleContent title="CDs" />
            <Grid container sx={{ alignItems: "center" }}>
            {
                cds.map((cd) => {
                    return (
                        <Grid item xs={2}>
                            <CardCD data={cd} key={cd.id} api={GET_CD}/>
                        </Grid>
                    )
                })
            }
            </Grid>
        </>
    )
} 

export default CDs;