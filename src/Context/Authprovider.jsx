import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import { useEffect } from "react";


//context
export const AuthContext = createContext();
//auth
const auth = getAuth(app);

const Authprovider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  //create user by provider
  const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth , provider);
  };

  //end
  //create user by email
  const createUser =(email , password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }


  //end
  //update user corrent information
 const updateUser = (profile)=>{
  setLoading(true);
   return updateProfile(auth.currentUser , profile)
 }
  
 //login user
 const userLogin = (email , password)=>{
  setLoading(true);
  return  signInWithEmailAndPassword(auth , email, password)
 }


 //end


//sign out user 
 const logOut =()=>{
  return signOut(auth)
 }

//end 
//get current sign in user
useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth , currentuser =>{
    setUser(currentuser)
  
    setLoading(false);
   })
   return ()=>{
    unsubscribe()
   }
},[])
//end
//end
  const userInfo = {
    user,
    providerLogin,
    createUser,
    updateUser,
    userLogin,
    logOut,loading
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
