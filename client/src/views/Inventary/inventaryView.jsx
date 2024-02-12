import { Grid, Typography} from "@mui/material"
import Skeleton from "../../components/ui/Skeleton/Skeleton"
import { host } from "../../const/host"
import CardInventary from "../../components/Card/CardInventary"


export default function InventaryView({ inventary }) {
       
    return (
        
        <>
        <Typography variant="h3" align="center">
            Inventario
        </Typography>
        <Grid container item sx={{ display: "flex", justifyContent: "center" }}>
            {inventary ? (
                inventary.map((inventary) => (
                    <Grid item xs={12} md={4} key={inventary.id} sx={{ p: 1} }>
                        <CardInventary
                            image = {`${host}/${inventary.icon}`}
                            name = {inventary.nombre}
                            description = {inventary.marca + " " + inventary.referencia}
                            clienteid = {"Asignado a: " + inventary.razon_social}
                        />
                    </Grid>
                    
                ))
            ) : (
                <Skeleton />
            )}
        </Grid>
        </>

    )
}