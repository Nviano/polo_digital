import { Typography, Paper, TextField, Button, Grid, Box } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const { login, errorMessage } = useAuthContext();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    login(formData);
  }

  return (
    <Grid container display="flex" justifyContent="center" p={6}>
      <Grid item md={6}>
        <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h3" color="primary">
            Inicia sesión
          </Typography>
          <Box
            onSubmit={handleSubmit}
            component="form"
            sx={{ display: "flex", flexDirection: "column", p: 6 }}
          >
            <TextField label="Email" variant="standard" name="email" />
            <TextField label="Contraseña" variant="standard" name="password" />
            <Button variant="outlined" type="submit" sx={{ mt: 3 }}>
              Login
            </Button>
            <Typography variant="h5">{errorMessage}</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
