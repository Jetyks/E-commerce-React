import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const [userPayload, setUserPayload] = useState(null);

  const login = (token) => {
    localStorage.setItem("token", token);
    const payload = jwtDecode(token);
    setIsLoggedIn(true);
    setUserPayload(payload);
    
  };

  const logout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false);
    setUserPayload(null);
  };

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      const payload = jwtDecode(token);
      setIsLoggedIn(true);
      setUserPayload(payload);
      /* console.log(payload); */
    }
  },[]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userPayload }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider};