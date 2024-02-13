import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Clients from "./views/Clients/Clients";
import Inventary from "./views/Inventary/Inventary";
// import Furnitures from "./views/Furnitures/Furnitures";
import Events from "./views/Events/Events";
import EventDetails from "./views/EventDetails/EventDetails";
import AuthContextProvider from "./contexts/AuthContext";
import PublicRoutes from "./components/router/PublicRoutes/PublicRoutes";
import PrivateRoutes from "./components/router/PrivateRoutes/PrivateRoutes";
import { Toaster } from "react-hot-toast";
import Profile from "./views/Profile/Profile";
import ClientDetail from "./views/ClientDetail/ClientDetail";
import InventaryDetails from "./views/InventaryDetails/InventaryDetails";
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
                <Route path=":id" element={<InventaryDetails />} />
              </Route>
              <Route path="profile" element={<Profile />} />
              <Route path="eventos">
                <Route index element={<Events />} />
                <Route path=":id" element={<EventDetails />} />
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
