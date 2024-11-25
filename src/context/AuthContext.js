
import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
 import { auth } from '../services/firebase'; // Ensure this path is correct

 const AuthContext = createContext();
 
 export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
 
   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
         setUser(user);
       } else {
         setUser(null);
       }
     });
     return () => unsubscribe();
   }, []);
 
   return (
     <AuthContext.Provider value={{ user }}>
       {children}
     </AuthContext.Provider>
   );
 };
 
 export const useAuthContext = () => useContext(AuthContext);
 