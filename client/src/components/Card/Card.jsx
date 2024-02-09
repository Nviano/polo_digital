import { Card as MuiCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Card({ image, title, description, url, phone }) {
  return (
    <MuiCard elevation={6}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
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
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href={url} target="_blank">
            Web
          </a>
        </Button>
        <Button size="small">Editar</Button>
      </CardActions>
    </MuiCard>
  );
}
