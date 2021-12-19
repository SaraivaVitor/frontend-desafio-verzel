import { useContext } from "react";

import { AuthContext } from "../context/auth";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

function Routes() {
  const { logado } = useContext(AuthContext);
  return logado ? <AuthRoutes /> : <AppRoutes />;
}

export default Routes;
