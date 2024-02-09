import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";

export default function PublicRoutes() {
  const { user } = useAuthContext();
  const location = useLocation();

  return user ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
