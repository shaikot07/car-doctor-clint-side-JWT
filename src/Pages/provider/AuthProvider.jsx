import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {

      const [user,setUser]=useState(null);
      const [loading,setLoading]=useState(true)

      // create new user 
      const createUser = (email,password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)
      }

      const logIn= (email,password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
      }

      const logOut=()=>{
            setLoading(true)
            return signOut(auth)
      }
      useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth,currentUser =>{
                  // console.log('current user',currentUser);
                  setUser(currentUser)
                  setLoading(false)
            })
            return()=>{
                  unSubscribe()
            }
      },[])

const authDeliveryInfo={
      loading,
      createUser,
      logIn,
      logOut,
      user
}
      return (
            <AuthContext.Provider value={authDeliveryInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;