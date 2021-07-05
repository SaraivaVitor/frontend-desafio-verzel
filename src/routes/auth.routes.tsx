import AddLesson from "../pages/adminPages/AddLesson";
import AddModules from "../pages/adminPages/AddModule";
import AdminLessons from "../pages/adminPages/AdminLessons";
import AdminModules from "../pages/adminPages/AdminModules";

import Home from "../pages/publicPages/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function RotasADM() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin/addlesson" exact component={AddLesson} />
        <Route path="/admin/addmodule" component={AddModules} />
        <Route path="/admin/adminlessons" component={AdminLessons} />
        <Route path="/admin/adminmodules" component={AdminModules} />

        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
