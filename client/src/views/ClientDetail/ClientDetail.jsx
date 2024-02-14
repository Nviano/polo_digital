import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { host } from "../../const/host";
import ClientDetailView from "./ClientDetailView";
import Skeleton from "../../components/ui/Skeleton/Skeleton";
import toast from "react-hot-toast";

export default function ClientDetail() {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [editingClient, setEditingClient] = useState(client);
  const [isUpdated, setIsUpdated] = useState(false);

  function handleUpdate() {
    setIsUpdated(!isUpdated);
  }
  function modifyClient(e) {
    setEditingClient({ ...client, [e.target.name]: e.target.value });
  }

  async function updateClient() {

    try {
      const response = await fetch(`${host}/clientes/update/${id}`, {
        method: "POST",
        body: JSON.stringify(editingClient),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        toast.success("Información actualizada");
        setClient(editingClient);
        setIsUpdated(!isUpdated);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    async function fetchClient() {
      try {
        const response = await fetch(`${host}/clientes/update/${id}`);
        const client = await response.json();
        setClient(client[0]);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
    fetchClient();
  }, [id]);

  return client ? (
    <ClientDetailView
      client={client}
      editingClient={editingClient}
      handleUpdate={handleUpdate}
      isUpdated={isUpdated}
      updateClient={updateClient}
      modifyClient={modifyClient}
    />
  ) : (
    <Skeleton></Skeleton>
  );
}
