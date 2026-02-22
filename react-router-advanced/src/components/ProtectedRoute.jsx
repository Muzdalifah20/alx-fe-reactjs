import { Navigate } from "react-router-dom";

const isAuthenticated = () => !!localStorage.getItem("token");

export default function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}
