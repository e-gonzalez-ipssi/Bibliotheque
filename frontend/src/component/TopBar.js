import React from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const pages = [
    { name: "Romans", link: "/app/romans" },
    { name: "Livres Spéciaux", link: "/app/spebooks" },
    { name: "Mangas", link: "/app/mangas" },
    { name: "Light Novel", link: "/app/lns" },
    { name: "Art Books  ", link: "/app/artbooks" },
    { name: "CD / DVD", link: "/app/cds" },
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