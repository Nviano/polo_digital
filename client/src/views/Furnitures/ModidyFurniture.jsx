import React, { useState, useEffect } from "react";
import ModifyFurnitureView from "./ModifyFornitureView";
import { host } from "../../const/host";

export default function ModifyFurnitures() {
  const [modify, setModify] = useState(null);

  useEffect(() => {
    async function fetchModifyFurniture() {
      try {
        const response = await fetch(`${host}/gestion/mobiliario/1`); 
         
        if (!response.ok) {
          throw new Error("Error al obtener los datos del Mobiliario");
        }
        
        const data = await response.json();
        setModify(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchModifyFurniture();
  }, []);

  return <ModifyFurnitureView modify={modify} />;
}
