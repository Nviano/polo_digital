import { useState, useEffect } from "react";
import { host } from "../../const/host";
import ClientsView from "./ClientsView";

export default function Clients() {
  const [clients, setClients] = useState(null);

  useEffect(() => {
    async function fetchClients() {
      try {
        const response = await fetch(`${host}/clientes`);
        const clients = await response.json();
        setClients(clients);
        console.log(clients)
      } catch (error) {
        console.log(error);
      }
    }
    fetchClients();
  }, []);

  return <ClientsView clients={clients} />;
}

