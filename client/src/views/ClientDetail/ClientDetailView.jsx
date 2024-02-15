import { Box, Paper, Typography, Button, Grid, TextField } from "@mui/material";
import { host } from "../../const/host";
import BoxComponents from "../../components/BoxComponents/BoxComponents";

export default function ClientDetailView({
  client,
  handleUpdate,
  isUpdated,
  updateClient,
  modifyClient,
  t,
  handleLanguage,
}) {
  return (
    <Grid>
      <Grid>
        <Paper elevation={3} sx={{ marginTop: "64px" }}>
          <Grid>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                p: 2,
                alignItems: "center",
                justifyContent: "space-around",
                gap: 4,
              }}
            >
              <img src={`${host}/${client.images}`} />
              <Typography variant="h5">{client.razon_social}</Typography>
            </Box>
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
              <BoxComponents label={t("Empleados")} data={client.numero_empleados} />
              <BoxComponents label={t("Sector")} data={client.sector} />
              <BoxComponents label={t("Teléfono")} data={client.telefono} />
              <BoxComponents label={t("CIF")} data={client.CIF} />
              <Box>
                <Button variant="contained" onClick={handleUpdate}>
                  {t("Editar")}
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", p: 6, justifyContent: "end" }}>
            {isUpdated ? (
              <>
                <Button
                  variant="contained"
                  onClick={handleUpdate}
                  sx={{ mr: 2 }}
                >
                  {t("Cancelar")}
                </Button>
                <Button variant="contained" onClick={() => updateClient()}>
                  {t("Guardar")}
                </Button>
              </>
            ) : (
              <Button variant="contained" onClick={handleUpdate}>
                {t("Editar")}
              </Button>
            )}
            <Button variant="contained" onClick={handleLanguage}>
              {t("Cambiar idioma")}
            </Button>
          </Box>
        </Paper>
      </Grid>
      {isUpdated ? (
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: "10px", p: 2 }}
        >
          <TextField
            label={t("Razon Social")}
            variant="outlined"
            defaultValue={client.razon_social}
            fullWidth
            onChange={modifyClient}
            name="razon_social"
          />
          <TextField
            label={t("Empleados")}
            type="text"
            defaultValue={client.numero_empleados}
            fullWidth
            onChange={modifyClient}
            name="numero_empleados"
          />
          <TextField
            label="Sector"
            type="text"
            defaultValue={client.sector}
            fullWidth
            onChange={modifyClient}
            name="sector"
          />
          <TextField
            label="Teléfono"
            type="number"
            defaultValue={client.telefono}
            fullWidth
            onChange={modifyClient}
            name="telefono"
          />
          <TextField
            label="CIF"
            type="text"
            defaultValue={client.CIF}
            fullWidth
            onChange={modifyClient}
            name="CIF"
          />
        </Box>
      ) : null}
    </Grid>
  );
}
