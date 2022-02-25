import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function TitleContent({ title }) {
    return (
        <Box sx={{ display: "flex", marginBottom: 2 }}>
            <Typography color="primary" variant="h4">
                {title}
            </Typography>
        </Box>
    )
}