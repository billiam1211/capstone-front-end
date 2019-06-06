import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './App.css';
import Account from './Account';
import CreateListing from './CreateListing';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Header from './Header';
import Listings from './Listings';
import Footer from './Footer';

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
          <Route path="/account" component={ Account } />

        </Switch>
        <Footer />
      </main>

        )
  }
}

export default App;
