import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './App.css';
import UserContainer from './UserContainer'





class App extends Component {
  constructor(){
    super()
    this.state = ({
      loggedIn: false
    })
  }

  login = async () => {
    console.log('login button clicked');
    const call = await fetch('http://localhost:9000/auth/login')
  }

  register = async () => {
    console.log('register button clicked');
  }



  render(){
    return (
      <div>
        <h1>The Knot List</h1>
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>

        <UserContainer />
      </div>
    );
  }
}

export default App;
