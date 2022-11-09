import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.config";

//context
export const AuthContext = createContext();
//auth
const auth = getAuth(app);

const Authprovider = ({ children }) => {

  const [user, setUser] = useState(null);

  
  //login with gmail
  const providerLogin = (provider) => {
    return signInWithPopup(auth , provider);
  };

  //

  const userInfo = {
    user,
    providerLogin
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
