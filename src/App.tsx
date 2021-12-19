import { BrowserRouter, Switch } from "react-router-dom";
//Rotas
import Routes from './routes/index.routes';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Routes/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
