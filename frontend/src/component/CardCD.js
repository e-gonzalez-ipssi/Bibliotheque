import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CDModal from "./CDModal";

function CardCD ({ data, api }) {
    const [open, setOpen] = useState(false);

    const onClick = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Box component="button" onClick={onClick} sx={{ height: 390, width: 240, border: 1, p: 1, m: 1, textOverflow: 'ellipsis', overflow: 'hidden', }}>
                <Grid container>
                    <Grid item xs={12}>
                        <img 
                            src={data.image}
                            height="350"
                            width="220"
                            alt={data.title}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{data.title}</Typography>
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item xs={3}>
                        <Typography>vol {data.cd}</Typography>
                    </Grid>
                </Grid>
            </Box>
            <CDModal id={data.id} open={open} handleClose={handleClose} api={api}/>
            
        </>
    )
}

export default CardCD;