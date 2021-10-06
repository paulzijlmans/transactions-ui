import './App.css';
import React, { Component } from 'react';
import TransactionOverview from './components/TransactionOverview';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import TransactionEdit from './components/TransactionEdit';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/transactions' exact={true} component={TransactionOverview}/>
            <Route path='/transactions/:id' component={TransactionEdit}/>
          </Switch>
        </Router>
    );
  }
}

export default App;