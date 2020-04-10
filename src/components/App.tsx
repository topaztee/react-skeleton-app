import * as React from "react";
import {Redirect, Route, Router} from "react-router";
import AppTheme from "./AppTheme";
import { createBrowserHistory } from "history";
import Home from "./Home/Home";
import {CssBaseline} from "@material-ui/core";
import { StateInspector } from "reinspect"
import AppRouter from "./AppRouter";
const history = createBrowserHistory();

export class App extends React.Component<{}, {}> {
    render() {
       return(
         <StateInspector name="App">
       <Router history={history}>
                <AppTheme>
                  <CssBaseline/>
                  <AppRouter/>
                </AppTheme>
        </Router>
         </StateInspector>
       )
    }
}

