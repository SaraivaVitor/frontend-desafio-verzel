import React, { createContext, useEffect, useState } from "react";

interface IContext {
  logado: boolean;
}

export const AuthContext = createContext({} as IContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logado, setLogado] = useState(false);
  const token: any = localStorage.getItem("@cursosOn");

  useEffect(() => {
    if (token) {
      setLogado(true);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ logado: Boolean(logado) }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
