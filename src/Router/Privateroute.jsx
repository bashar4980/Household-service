import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Authprovider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    console.log("yes loading found");
    return (
      <div className="w-16 h-16 border-4 container mx-auto border-dashed rounded-full animate-spin border-violet-700"></div>
    );
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
