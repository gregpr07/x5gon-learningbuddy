import React from "react";
import "./css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage";

import { requestHeader } from "./components/functions";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route>
          <div className="container">page not found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
