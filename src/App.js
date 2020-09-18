import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { appRoutes } from "./routes";

import "./assets/styles/reset.css";
import "./App.css";
import { Navbar } from "components";

const App = (props) => {
    return (
        <>
            <div className=".container">
                <Router>
                    {/* Navigation Bar */}
                    <Navbar />
                    {/* Routes */}
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/home"></Redirect>
                        </Route>
                        {appRoutes.map((route, index) => (
                            <Route key={index} {...route} />
                        ))}
                    </Switch>
                </Router>
            </div>
        </>
    );
};

export default App;
