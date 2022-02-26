import React from "react";
import { useQuery } from "@apollo/client";
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { GET_LN, GET_ROMAN } from "../api/books-api";

function RomanModal ({ id, open, handleClose, api }) {
    const { data, loading, error } = useQuery(api, { variables: { id } });
    if(loading) {
        return <></>
    }
    if(error) {
        return <></>
    }

    let book = {};
    
    if (api == GET_ROMAN) {
        book = data.getRoman;
    }
    if (api == GET_LN) {
        book = data.getLN;
    }
    

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="title"
            aria-describedby="description"
        >
            <Box sx={{ 
                position: 'absolute', 
                left: '50%', 
                top: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <Paper sx={{ p: 3 }}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography id="title" variant="h6" component="h2">                            
                                {book.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography id="title" variant="h6" component="h2">                            
                                N°{book.tomenumber}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                        <Grid container item xs={3}>
                            <Grid item>
                                <Typography id="author" variant="h6" component="h2">                            
                                    Author : {book.author}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography id="editeur" variant="h6" component="h2">                            
                                    Editeur : {book.editeur}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography id="resume" sx={{ mt: 2 }}>
                                {book.resume}
                            </Typography>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item md={4}>
                                <Typography id="prix">
                                    Prix : {book.prix}€
                                </Typography>
                            </Grid>
                            <Grid item md={4}>
                                <Typography id="isbn">
                                    ISBN : {book.isbn}
                                </Typography>
                            </Grid>
                            <Grid item md={4}>
                                <Typography id="pagenumber">
                                    n° page : {book.pagenumber}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography id="commentaire">
                                Commentaire : {book.commentaire}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Modal>
    )
}

export default RomanModal;