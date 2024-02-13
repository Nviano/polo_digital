import { Box, Paper, Typography, Button, Grid, TextField } from "@mui/material";
import { host } from "../../const/host";
import BoxComponents from "../../components/BoxComponents/BoxComponents";

export default function ClientDetailView({
  client,
  handleUpdate,
  isUpdated,
  updateClient,
  modifyClient,
}) {
  return (
    <Grid>
      <Grid>
        <Paper elevation={3} sx={{ marginTop: "64px" }}>
          <Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <img src={`${host}/${client.images}`} />
              <Box>
                <Typography variant="h5">{client.razon_social}</Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                gap: "16px",
                marginLeft: "32px",
                padding: "24px",
              }}
            >
              <BoxComponents label="Empleados" data={client.numero_empleados} />
              <BoxComponents label="Sector" data={client.sector} />
              <BoxComponents label="Teléfono" data={client.telefono} />
              <BoxComponents label="CIF" data={client.CIF} />
              <Box>
                <Button variant="contained" onClick={handleUpdate}>
                  Editar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {isUpdated ? (
        <form
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "16px",
            marginLeft: "32px",
            padding: "24px",
          }}
          onSubmit={(e) => updateClient(e)}
        >
          <TextField
            label="Razon social"
            defaultValue={client.razon_social}
            name="razon_social"
            onChange={(e) => modifyClient(e)}
          ></TextField>
          <TextField
            label="Empleados"
            defaultValue={client.numero_empleados}
            name="numeroempleados"
            onChange={(e) => modifyClient(e)}
          ></TextField>
          <TextField
            label="Sector"
            defaultValue={client.sector}
            name="sector"
            onChange={(e) => modifyClient(e)}
          ></TextField>
          <TextField
            label="Teléfono"
            defaultValue={client.telefono}
            name="telefono"
            onChange={(e) => modifyClient(e)}
          ></TextField>
          <TextField
            label="CIF"
            defaultValue={client.CIF}
            name="CIF"
            onChange={(e) => modifyClient(e)}
          ></TextField>
          <Button variant="contained" type="submit">
            Guardar
          </Button>
        </form>
      ) : null}
    </Grid>
  );
}
