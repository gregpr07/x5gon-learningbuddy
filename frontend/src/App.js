import React, { useState } from "react";
import "./css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Logout from "./pages/logout";
import { Navbar } from "./components/components";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route>
          <div className="container">page not found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
