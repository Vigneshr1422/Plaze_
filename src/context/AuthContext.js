// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { auth } from '../services/firebase'; // Ensure this path is correct

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged((user) => {
//             setUser(user); // Set user state based on authentication state
//         });

//         return () => unsubscribe(); // Cleanup subscription on unmount
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuthContext = () => {
//     return useContext(AuthContext);
// };


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
 