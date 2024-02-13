import { Grid, Typography } from "@mui/material";
import ModifyFurnitureCard from "../../components/Card/ModifyFurnitureCard";
import SkeletonModify from "../../components/ui/Skeleton/SkeletonModify";
import { mobiliarioStates } from "./MobiliarioStates";

export default function ModifyFurnitureView({ modify }) {
  return (
    <>
      <Typography variant="h3" align="center">
        Modificar Mobiliario
      </Typography>
      <Grid container item sx={{ display: "flex", justifyContent: "center" }}>
        {modify ? (
          <Grid item xs={12} md={4} sx={{ p: 1 }}>
            <ModifyFurnitureCard
              nombre={modify.mobiliarionombre}
              tipo={modify.tipo}
              referencia={modify.referencia}
              estado={mobiliarioStates[modify.estado]}
              salaId={modify.salasnombre}
              
            />
          </Grid>
        ) : (
          <SkeletonModify />
        )}
      </Grid>
    </>
  );
}
