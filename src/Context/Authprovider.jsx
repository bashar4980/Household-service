import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase.config";


//context
export const AuthContext = createContext();
//auth
const auth = getAuth(app);

const Authprovider = ({ children }) => {

  const [user, setUser] = useState(null);

  
  //create user by provider
  const providerLogin = (provider) => {
    return signInWithPopup(auth , provider);
  };

  //end
  //create user by email
  const createUser =(email , password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }


  //end

  const userInfo = {
    user,
    providerLogin,
    createUser
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
