import { Card as MuiCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardFurniture({ nombre, tipo, referencia }) {
    return (
        <MuiCard elevation={6}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {nombre}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        height: "3lh",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {tipo}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {referencia}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Editar</Button>
            </CardActions>
        </MuiCard>
    );
}
