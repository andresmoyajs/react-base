import { Navigate, Outlet } from "react-router-dom";
import { parseToken } from "../../utilities/parseToken";

const ProtectedRoute = ({ existRoles }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }

  if (!existRoles) {
    return <Outlet />;
  }

  const payload = parseToken(token);

  const { role } = payload;

  if (Array.isArray(role)) {
    const isFounded = role.some(ai => existRoles.includes(ai));
    return isFounded ? <Outlet /> : <Navigate to="/login"/>

  }else{
    return existRoles.includes(role) ? <Outlet/> : <Navigate to="/login"/>
  }
};

export default ProtectedRoute;