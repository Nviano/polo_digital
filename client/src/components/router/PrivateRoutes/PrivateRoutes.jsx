import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";

export default function PrivateRoutes() {
  const { user } = useAuthContext();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
