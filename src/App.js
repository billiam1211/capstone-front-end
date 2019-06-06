import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './App.css';

import UserContainer from './UserContainer';
import CreateListing from './CreateListing';
import ListingContainer from './ListingContainer';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Header from './Header';

class App extends Component {
  constructor(){
    super()
    this.state = ({
      state: 'empty'
    })
  }



  render(){
    return (
      <main>
        <Header />
        <Switch>

          <Route path='/home' component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />

        </Switch>
      </main>

        )
  }
}

export default App;
