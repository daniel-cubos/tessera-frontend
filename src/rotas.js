import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import React from "react";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Restaurantes";

import useAuth from "./hooks/useAuth";
import { AuthProvider } from "./contexts/AuthContext";
import { ValidacaoFormProvider } from "./contexts/ValidacaoFormContext";

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
						<Route path="/cadastro" component={Cadastro} />
						<RotasProtegidas>
							<Route path="/restaurantes" component={Dashboard} />
						</RotasProtegidas>
					</ValidacaoFormProvider>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default Routes;
