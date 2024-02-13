import { Button, Grid, TextField, Typography } from "@mui/material";
import { list } from "../../const/footerLinks";
import { useState } from "react";
import { host } from "../../const/host"
import toast from "react-hot-toast";

export default function Footer() {

    const [email, setEmail] = useState("");

    const handleInputs = (e) => {
        setEmail(e.target.value);
    }

    async function fetchOnSubmitEmail(e,email) {
        e.preventDefault();
        try {
            console.log(email);
            const response = await fetch(`${host}/user/suscripcion/`, {
                method: "POST",
                body: JSON.stringify({email}),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const respuesta = await response.json()
            if (response.ok) {
                toast.success(respuesta.message)
            }
            else toast.error(respuesta.message)

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Grid container sx={{ px: 3, backgroundColor: "darkseagreen" }}>
            <Grid container item md={3} sx={{ display: "flex", justifyContent: "start" }}>
                {list.map((item, index) => (
                    <Grid item key={index} md={6} sx={{ p: 1 }}>
                        <Typography variant="body1" item key={index} md={6}>{item}</Typography>
                    </Grid>
                ))}
            </Grid>
            <Grid container item md={9} sx={{ display: "flex", justifyContent: "end" }}>
                <Grid item sx={{ p: 1, display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ m: 1 }}>Suscribete a nuestra newsletter</Typography>
                    <TextField onChange={(e)=>handleInputs(e)} variant="filled" label="Email" sx={{ m: 1, width: 300 }}>{email}</TextField>
                    <Button onClick={(e)=>fetchOnSubmitEmail(e, email)} variant="contained" sx={{ m: 1 }}>Suscribirse</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}