import { createContext, useState } from "react";
import useAuth from "./hook/useAuth";
const Context = createContext<any>({});

function AuthProvider({ children }) {
  const { auth, handleLogin, handleLogout } = useAuth();
  return (
    <Context.Provider value={{ auth, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
