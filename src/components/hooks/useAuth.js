import { useContext } from "react";
import AuthContext from "../context/authContext";

const useAuth = () => {

  const authContext = useContext(AuthContext);

  const auth = authContext.isAuthenticated;

  const setAuth = (isAuthenticated, tokenData = null) => { 
    if(isAuthenticated) {
      authContext.login();

      if(tokenData) {
        window.localStorage.setItem('token-data', JSON.stringify(tokenData))
      }
    }
    else {

      authContext.logout();

    }
  };

 
  return [auth, setAuth];
};

export default useAuth;
