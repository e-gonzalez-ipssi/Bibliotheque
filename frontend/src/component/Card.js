import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Card ({ data }) {
    return (
        <Box sx={{ maxHeight: 370, maxWidth: 220, border: 1, p: 1, m: 1, textOverflow: 'ellipsis', overflow: 'hidden', }}>
            <Grid container>
                <Grid item xs={12}>
                    <img 
                        src={data.image}
                        height="350"
                        width="220"
                    />
                </Grid>
                <Grid item xs={9}>
                    <Typography>{data.title}</Typography>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={2}>
                    <Typography>vol {data.tomenumber}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Card;