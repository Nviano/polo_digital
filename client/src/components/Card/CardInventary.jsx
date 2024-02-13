import { Link, Card as MuiCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardInventary({ image, name, description, state, clienteid }) {

  return (
    <MuiCard elevation={6}>
      <CardMedia
        component="img"
        alt={name}
        height="80"
        image={image}
        sx={{ objectFit: "contain", pt: 1.5 }}
      />
      <CardContent>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="div" 
          sx={{ color: "darkcyan",
            height: "2lh",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}>
          {name}
          
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontWeight={"bold"}>
          {clienteid}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {state}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/gestion/inventario/:id">
         <Button size="small" >Ver detalle</Button>
        </Link>
      </CardActions>
    </MuiCard>
  );
}
