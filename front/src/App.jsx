import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './assets/css/styles.css';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Authentication from "./pages/Authentication";

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/authentication/:token" component={Authentication} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
