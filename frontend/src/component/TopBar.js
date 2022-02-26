import React from "react";
import Box from '@mui/material/Box';
import { Button, Link } from "@mui/material";

const pages = [
    { name: "Romans", link: "/app/biliotheque" },
    { name: "Livres Spéciaux", link: "/app/biliotheque" },
    { name: "Mangas", link: "/app/biliotheque" },
    { name: "Light Novel", link: "/app/lns" },
    { name: "Art Books  ", link: "/app/biliotheque" },
    { name: "CD / DVD", link: "/app/biliotheque" },
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