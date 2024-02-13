import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../page/Loading/Loading";
import { AuthProvider } from "../Context/AuthContexts";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>
    );
  }
};

export default PrivateRoute;
