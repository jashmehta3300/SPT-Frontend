import React from 'react';
import './App.css';
import SalesPeople from './components/SalesPeople';
import ForgotPass from './components/ForgotPass';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/forgotpass" exact component={ForgotPass} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/inventory" exact component={Inventory} />
          <Route path="/sales-people" exact component={SalesPeople} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
