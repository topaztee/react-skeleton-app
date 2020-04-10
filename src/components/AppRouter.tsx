import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Home/Home";

const PrivateRoute = ({ component, ...options }) => {
  return <Route {...options} component={component} />;
};

const AppRouter = () => (
  <>
    <Route exact path="/" render={() => <Redirect to="/home"/>}/>
    <PrivateRoute path="/home" component={Home}/>
  </>
);

export default AppRouter;
