import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Clients from "./views/Clients/Clients";
import Inventary from "./views/Inventary/Inventary";
import Events from "./views/Events/Events";
import EventDetail from "./views/EventDetail/EventDetail";
import AuthContextProvider from "./contexts/AuthContext";
import PublicRoutes from "./components/router/PublicRoutes/PublicRoutes";
import PrivateRoutes from "./components/router/PrivateRoutes/PrivateRoutes";
import { Toaster } from "react-hot-toast";
import Profile from "./views/Profile/Profile";
import ClientDetail from "./views/ClientDetail/ClientDetail";
import InventaryDetail from "./views/InventaryDetail/InventaryDetail";
import ModifyFurnitures from "./views/Furnitures/ModidyFurniture";

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
              <Route path="clientes">
                <Route index element={<Clients />} />
                <Route path=":id" element={<ClientDetail />} />
              </Route>
              <Route path="inventario">
                <Route index element={<Inventary />} />
                <Route path=":id" element={<InventaryDetail />} />
              </Route>
              <Route path="profile" element={<Profile />} />
              <Route path="eventos">
                <Route index element={<Events />} />
                <Route path=":id" element={<EventDetail />} />
              </Route>
              <Route path="mobiliario" element={<ModifyFurnitures />} />
            </Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
