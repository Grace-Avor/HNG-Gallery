import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

    if (user) {
      return children;
     }

  //  NOTE:
  // When everthing is done;
  // before submitting, remove the below line of code and uncomment the above lone
  //if (!user) {
    //return children;
  //}
  // the above logic is for testing purpose. remove it above before submitting

  return <Navigate to="login" replace state={{ path: location.pathname }} />;
};
