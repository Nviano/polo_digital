import { Grid, Typography } from "@mui/material";
import Skeleton from "../../components/ui/Skeleton/Skeleton";
import Card from "../../components/Card/Card";
import { host } from "../../const/host";
export default function EventsView({ events }) {
    return (
        <>
            <Typography variant="h3" align="center">
                Eventos
            </Typography>
            <Grid container item sx={{ display: "flex", justifyContent: "center" }}>
                {events ? (
                    events.map((event) => (
                        <Grid item xs={12} md={4} key={event.id} sx={{ p: 1 }}>
                            <Card
                                image={`${host}/${event.images}`}
                                title={event.nombre}
                                description={`Fecha inicio: ${event.fecha_inicio} / Fecha fin: ${event.fecha_fin} / Aforo: ${event.aforo}`}
                                url={event.url}
                                linkTo={`/eventos/${event.id}`}
                                textButton={"Ver más"}
                            />
                        </Grid>
                    ))
                ) : (
                    <Skeleton />
                )}
            </Grid>
        </>
    );
}