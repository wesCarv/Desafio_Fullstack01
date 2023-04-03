import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoutes = () => {
  const location = useLocation();
const token = localStorage.getItem('@Agenda:token')
  return token ? (
    
    <Outlet />

  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
}