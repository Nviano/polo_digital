import { useState, useEffect } from "react";
import { host } from "../../const/host";
import FurnituresView from "./FurnituresView";

export default function Furnitures() {
  const [furnitures, setFurnitures] = useState(null);

  useEffect(() => {
    async function fetchFurnitures() {
      try {
        const response = await fetch(`${host}/gestion/mobiliario`);
        const furnitures = await response.json();
        setFurnitures(furnitures);
        console.log(furnitures)
      } catch (error) {
        console.log(error);
      }
    }
    fetchFurnitures();
  }, []);

  return <FurnituresView furnitures={furnitures} />;
}