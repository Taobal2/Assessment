import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DommyHome } from "./Component/TestComp/DommyHome";
import { HeaderNav } from "./Component/TestComp/HeaderNav";
import HomeScreen from "./Component/HomeScreen/HomeScreen";
import GameScreen from "./Component/SimpleGame/GameScreen";
import WorkHome from "./Component/WorkHome/WorkHome";
import GitHubApp from "./Component/GitHub/GitHubApp";
import Project from "./Component/NewProject/Project";
import TastyFood from "./Component/TastyFood/TastyFood";
import Dapiok from "./Component/Dapiok/Dapiok";
import HomePage from "./Component/Portfolio2/HomePage";

const App = () => {
  return (
    <Router>
      <HeaderNav />
      <Switch>
        <Route path="/" exact component={Project} />
        <Route path="/WorkHome" exact component={WorkHome} />
        <Route path="/GitHub" exact component={GitHubApp} />
        <Route path="/HomeScreen" exact component={HomeScreen} />
        <Route path="/GameScreen" exact component={GameScreen} />
        <Route path="/portfolio" exact component={HomePage} />
        <Route path="/TastyFood" exact component={TastyFood} />
        <Route path="/Dapiok" exact component={Dapiok} />
      </Switch>
    </Router>
  );
};

export default App;
