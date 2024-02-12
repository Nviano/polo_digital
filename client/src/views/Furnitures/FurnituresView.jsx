import { Grid, Typography } from "@mui/material";
import Skeleton from "../../components/ui/Skeleton/Skeleton";
import CardFurniture from "../../components/CardFurniture/CardFurniture";

export default function FurnituresView({ furnitures }) {
    return (
        <>
            <Typography variant="h3" align="center">
                Mobiliario
            </Typography>
            <Grid container item sx={{ display: "flex", justifyContent: "center" }}>
                {furnitures ? (
                    furnitures.map((furniture) => (
                        <Grid item xs={12} md={4} key={furniture.id} sx={{ p: 1 }}>
                            <CardFurniture
                                nombre={furniture.nombre}
                                tipo={furniture.tipo}
                                referencia={furniture.referencia}
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