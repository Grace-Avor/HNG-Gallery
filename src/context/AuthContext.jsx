import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signOut = () => {
    setUser(null);
  };

  const signIn = (email, password) => {
    if (email === "user@example.com" && password === "1Password") {
      setUser({ email });
      setError(null);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <AuthContext.Provider value={{ error, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
