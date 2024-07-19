import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPayload, setUserPayload] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

  const login = (token) => {
    localStorage.setItem("token", token);
    const payload = jwtDecode(token);
    setIsLoggedIn(true);
    setUserPayload(payload);
    
  };

  const logout = () => {
    localStorage.removeItem("token")
    /* console.log("logout exitoso") */
    setIsLoggedIn(false);
    setUserPayload(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = jwtDecode(token);
        setIsLoggedIn(true);
        setUserPayload(payload);
      } catch (error) {
        console.error("Error decoding token:", error);
        setIsLoggedIn(false);
        setUserPayload(null);
      }
    } else {
      setIsLoggedIn(false);
      setUserPayload(null);
    }
    setIsLoading(false);
  }, []);

  // Comprobacion de estados 
 /*  console.log("userPayload (outside useEffect):", userPayload);
  console.log("isLoggedIn (outside useEffect):", isLoggedIn); */

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userPayload, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider};