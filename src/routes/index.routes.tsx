import {useContext, useEffect, useState} from 'react';

// import Context from '../context/auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes(){
//   const { logado } = useContext(Context);
  const logado = true;
  return logado ? <AuthRoutes /> : <AppRoutes />;
}

export default Routes;