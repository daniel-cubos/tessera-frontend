import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import React from "react";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Produtos";

import LoginCliente from "./pages/Cliente/Login";

import { ValidacaoFormProvider } from "./contexts/ValidacaoFormContext";

import { AuthProvider } from "./contexts/AuthContext";
import useAuth from "./hooks/useAuth";

function RotasProtegidas(props) {
  const { token } = useAuth();
  return (
    <Route render={() => (token ? props.children : <Redirect to="/" />)} />
  );
}

function Routes() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <ValidacaoFormProvider>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
            <Route path="/login/cliente" exact component={LoginCliente} />
            <RotasProtegidas>
              <Route path="/produtos" component={Dashboard} />
            </RotasProtegidas>
          </ValidacaoFormProvider>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default Routes;
