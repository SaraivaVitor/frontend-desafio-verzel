import AddLesson from "../pages/adminPages/AddLesson";
import AddModules from "../pages/adminPages/AddModule";
import AdminLessons from "../pages/adminPages/AdminLessons";
import AdminModules from "../pages/adminPages/AdminModules";
import EditModule from "../pages/adminPages/EditModule";
import EditLesson from "../pages/adminPages/EditLesson";
import Home from "../pages/publicPages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Lessons from "../pages/publicPages/Lessons";

export default function RotasADM() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin/addlesson" exact component={AddLesson} />
        <Route path="/admin/addmodule" component={AddModules} />
        <Route path="/admin/editmodule" component={EditModule} />
        <Route path="/admin/editlesson" component={EditLesson} />
        <Route path="/admin/adminlessons" component={AdminLessons} />
        <Route path="/admin/adminmodules" component={AdminModules} />
        <Route path="/" exact component={Home} />
        <Route path="/lessons" component={Lessons} />
      </Switch>
    </BrowserRouter>
  );
}
