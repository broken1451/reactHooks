import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScree from "./LoginScree";
import Navbar from "./Navbar";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          {/* una manera para las rutas */}
          <Switch>
            {/* <Route path="/about">
            <AboutScreen />
          </Route>
          <Route path="/login">
            <LoginScree />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route> */}
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/login" component={LoginScree} />
            {/* ruta q no existe */}
            {/* <Route  component={HomeScreen} /> */}
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
