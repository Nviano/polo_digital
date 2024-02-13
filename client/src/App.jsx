import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Clients from "./views/Clients/Clients";
import Inventary from "./views/Inventary/Inventary";
import Furnitures from "./views/Furnitures/Furnitures";
import Events from "./views/Events/Events";
import AuthContextProvider from "./contexts/AuthContext";
import PublicRoutes from "./components/router/PublicRoutes/PublicRoutes";
import PrivateRoutes from "./components/router/PrivateRoutes/PrivateRoutes";
import { Toaster } from "react-hot-toast";
import Profile from "./views/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<PublicRoutes />}>
              <Route path="login" element={<Login />} />
            </Route>

            <Route element={<PrivateRoutes />}>
              <Route path="clientes" element={<Clients />} />
              <Route path="inventario" element={<Inventary />} />
              <Route path="mobiliario" element={<Furnitures />} />
              <Route path="eventos" element={<Events />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
