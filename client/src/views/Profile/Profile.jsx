import { useAuthContext } from "../../contexts/AuthContext";

export default function Profile() {
  const { user } = useAuthContext();

  return (
    <div>
      <h2>Perfil de usuario</h2>
      <p>Nombre: {user.nombre}</p>
      <p>Apellidos: {user.apellidos}</p>
    </div>
  );
}
