import Home from "../pages/publicPages/Home";
import AdminLogin from "../pages/publicPages/AdminLogin";
import AdminSignUp from "../pages/publicPages/AdminSignUp";
import Lessons from "../pages/publicPages/Lessons";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function RotasApp() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/lessons" component={Lessons} />
        <Route path="/signUp" component={AdminSignUp} />
        <Route path="/login" component={AdminLogin} />
      </Switch>
    </BrowserRouter>
  );
}
