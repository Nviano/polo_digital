import { Grid, Typography } from "@mui/material";
import Skeleton from "../../components/ui/Skeleton/Skeleton";
import Card from "../../components/Card/Card";
import { host } from "../../const/host";
export default function ClientsView({ clients }) {
  return (
    <>
      <Typography variant="h3" align="center">
        Clientes
      </Typography>
      <Grid container item sx={{ display: "flex", justifyContent: "center" }}>
        {clients ? (
          clients.map((client) => (
            <Grid item xs={12} md={4} key={client.id} sx={{ p: 1 }}>
              <Card
                image={`${host}/${client.images}`}
                title={client.razon_social}
                description={client.descripcion}
                url={client.url}
                phone={client.telefono}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12} md={4} sx={{ p: 1 }}>
            <Skeleton />
          </Grid>
        )}
      </Grid>
    </>
  );
}
