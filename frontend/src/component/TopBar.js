import React from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const pages = [
    { name: "Romans", link: "/app/romans" },
    { name: "Livres Spéciaux", link: "/app/romans" },
    { name: "Mangas", link: "/app/romans" },
    { name: "Light Novel", link: "/app/lns" },
    { name: "Art Books  ", link: "/app/romans" },
    { name: "CD / DVD", link: "/app/romans" },
];

function TopBar (props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            {pages.map((page) => {
                return (
                    <Button variant="outlined" component={Link} sx={{ ml: 3, mr: 3 }} to={page.link}>{page.name}</Button>
                )
            })}
        </Box>
    )
}

export default TopBar;