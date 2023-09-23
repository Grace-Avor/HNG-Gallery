import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SignIn } from "../pages";
import { PrivateRoute } from "./utiles";
export const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/gallery" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};
