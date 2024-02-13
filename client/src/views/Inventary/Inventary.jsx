import { useState, useEffect } from "react"
import { host } from "../../const/host"
import InventaryView from "./inventaryView"

export default function Inventary() {
 const [inventary, setInventary] = useState(null);


 useEffect(() => {
   async function fetchInventary() {
     try {
        const response = await fetch(`${host}/gestion/inventario`)
        const inventary = await response.json()
        
        setInventary(inventary);
     } catch (error) {
       console.log(error);
     }
   }
   fetchInventary();
 }, [])

 return <InventaryView inventary={inventary} />
}
