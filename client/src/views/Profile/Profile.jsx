import { useAuthContext } from "../../contexts/AuthContext";

export default function Profile() {
  //Necesitomaos acceder a la información del usuario que están almacenados en el contexto de autenticación de la aplicación (AuthContext)
  //Para acceder a los datos de almacenados en AuthContext vamos a hacer uso del useContext y una vez tenemos los datos, los almacenamos en user
  const { user } = useAuthContext();

  return (
    //Aquí lo que hacemos es usar user para mostrar la información del usuario en la vista de perfil.
    <div>
      <h2>Perfil de usuario</h2>
      <p>Nombre: {user.nombre}</p>
      <p>Apellidos: {user.apellidos}</p>
    </div>
  );
}
