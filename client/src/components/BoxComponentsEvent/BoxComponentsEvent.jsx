import { Box, Typography } from "@mui/material";

export default function BoxComponentsEvent({ label, DataEvent }) {
    return (
        <Box sx={{ border: "1px solid black", p: 1, textAlign: "center", borderRadius: "10px", width: "140px" }}>
            <Typography sx={{ fontWeight: "bold" }}>{label}</Typography>
            <Typography sx={{ p: 1 }}>{DataEvent}</Typography>
        </Box>
    );
}