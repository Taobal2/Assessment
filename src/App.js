import React from 'react';
import "antd/dist/antd.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {DommyHome} from "./Component/TestComp/DommyHome";
import {HeaderNav} from "./Component/TestComp/HeaderNav";
import HomeScreen from "./Component/HomeScreen/HomeScreen";
import GameScreen from "./Component/SimpleGame/GameScreen";
import Timer from "./Component/Timer/Timer"
import WorkHome from "./Component/WorkHome/WorkHome"
import GitHubApp from "./Component/GitHub/GitHubApp"
import Project from "./Component/NewProject/Project";

const App = () => {
    return (
        <Router>
            <HeaderNav/>
            <Switch>
                <Route path="/" exact component={Project}/>
                <Route path="/WorkHome" exact component={WorkHome}/>
                <Route path="/GitHub" exact component={GitHubApp}/>
                <Route path="/Timer" exact component={Timer}/>
                <Route path="/HomeScreen" exact component={HomeScreen}/>
                <Route path="/GameScreen" exact component={GameScreen}/>
            </Switch>
        </Router>
    )
}

export default App
