import { Card as MuiCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function CardInventary({ 
    image, 
    name, 
    description, 
    state, 
    clienteid, 
    linkTo,
}) {

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
         <Button size="small" component={Link} to={linkTo}>Ver detalle</Button>
      </CardActions>
    </MuiCard>
  );
}