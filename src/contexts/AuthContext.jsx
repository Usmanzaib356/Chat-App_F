import React, { createContext, useEffect, useState } from "react";
import { read_cookie } from "sfcookies";


export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {


   const [islogin,setIsLogin] = useState(false)
  
   const API_URL = "https://cyan-awful-dibbler.cyclic.app" 


   useEffect(()=>{
   const cookie = read_cookie("islogin")

   if(cookie == true){
    return setIsLogin(true)
   }
   },[])


  
  return (
    <AuthContext.Provider value={{API_URL,islogin,setIsLogin}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
 