import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Startup, WrongPage } from "pages/"

const Routes = () => {

    return <Switch>
        <Route path="/" exact component={Startup} />
        <Route path="/home" exact component={Home} />
        <Route exact component={WrongPage} />
    </Switch>
}

export default Routes;