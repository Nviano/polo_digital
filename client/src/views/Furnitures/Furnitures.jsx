import { useState, useEffect } from "react";
import { host } from "../../const/host";
import FurnituresView from "./FurnituresView";


export default function Furnitures() {
  const [furnitures, setFurnitures] = useState(null);

  useEffect(() => {
    async function fetchFurnitures() {
      try {
        const response = await fetch(`${host}/mobiliario`);
        const furnitures = await response.json();
        setFurnitures(furnitures);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFurnitures();
  }, []);

  return <FurnituresView clients={furnitures} />;
}