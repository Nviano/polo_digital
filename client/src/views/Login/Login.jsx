import { Typography, Paper, TextField, Button, Grid, Box } from "@mui/material";
import { useAuthContext } from "../../contexts/AuthContext";
import { useState } from "react";

export default function Login() {
  const { login, errorMessage } = useAuthContext();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleInputs(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <Grid container display="flex" justifyContent="center" p={6}>
      <Grid item md={3}>
        <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h3" color="primary">
            Inicia sesión
          </Typography>
          <Box
            onSubmit={(e) => login(e, user)}
            component="form"
            sx={{ display: "flex", flexDirection: "column", p: 6 }}
          >
            <TextField
              label="Email"
              variant="standard"
              name="email"
              value={user.email}
              onChange={handleInputs}
            />
            <TextField
              label="Contraseña"
              variant="standard"
              name="password"
              value={user.password}
              onChange={handleInputs}
            />
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
