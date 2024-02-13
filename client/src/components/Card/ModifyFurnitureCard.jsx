import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ModifyFurnitures from "../../views/Furnitures/ModidyFurniture";

export default function ModifyFurnitureCard({ nombre, tipo, referencia, estado, salaId }) {
  

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{nombre}</Typography>
        <Typography variant="body1">Tipo: {tipo}</Typography>
        <Typography variant="body1">Referencia: {referencia}</Typography>
        <Typography variant="body1">Estado: {estado}</Typography>
        <Typography variant="body1">Sala: {salaId}</Typography>
        <button onClick={() => onEditClick(ModifyFurnitures)}>Modificar</button>
      </CardContent>
    </Card>
  );
}
