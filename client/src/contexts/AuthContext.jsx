import { createContext, useState, useContext } from "react";
import { host } from "../const/host";
import toast from "react-hot-toast";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  errorMessage: "",
});

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function login(e, user) {
    e.preventDefault();

    try {
      const response = await fetch(`${host}/user/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const userLogged = await response.json();
        setUser(userLogged);
        
        localStorage.setItem("user", JSON.stringify(userLogged));
        setErrorMessage("");
        toast(`Bienvenido de nuevo ${userLogged.nombre}`)
        
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage("Error en el servidor");
    }
  }

  function logout() {
    const username = localStorage.getItem("user");
    const name = JSON.parse(username)
    toast(`Hasta la proxima ${name.nombre}`)
    setUser(null);
    localStorage.removeItem("user");
    
  }

  const value = {
    user,
    login,
    logout,
    errorMessage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
