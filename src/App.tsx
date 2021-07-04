import { BrowserRouter, Route, Switch } from "react-router-dom";

//Componentes para rotas
import  Home  from './pages/publicPages/Home'
import  AdminLogin  from './pages/adminPages/AdminLogin'
import  AdminSingUp  from './pages/adminPages/AdminSingUp'
import  AddModule  from './pages/adminPages/AddModule'
import  AddLesson  from './pages/adminPages/AddLesson'
import  AdminModules  from './pages/adminPages/AdminModules'
import  AdminLessons  from './pages/adminPages/AdminLessons'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        l
        {/* Rotas de adm*/}
        <Route exact path="/admin/addmodule" component={AddModule} />
        <Route exact path="/admin/addlesson" component={AddLesson} />
        <Route exact path="/admin/adminmodules" component={AdminModules} />
        <Route exact path="/admin/adminlessons" component={AdminLessons} />

        {/* Rotas publicas */}
        <Route exact path="/" component={Home} /> {/*Responsivo*/}
        <Route exact path="/admin/login" component={AdminLogin} />
        <Route exact path="/admin/singup" component={AdminSingUp} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
