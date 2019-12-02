import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/home';
import Form from './views/form/Form';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/formulario"><Form /></Route>
      </Switch>
    </Router>
  );
}

export default App;
