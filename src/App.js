import React from "react";
import { RootRoutes } from "./routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RootRoutes />
    </AuthProvider>
  );
}

export default App;
