import React, { Component } from 'react';
import './App.css';
import UserContainer from './UserContainer';
import ListingContainer from './ListingContainer';

class App extends Component {
  constructor(){
    super()
    this.state = ({
      loggedIn: false,
      email: '',
      password: ''
    })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  // HANDLES THE LOGIN FORM SUBMISSION
  handleLogin = async (e) => {
  e.preventDefault();

    try{

      console.log('login button clicked');
      const loginResponse = await fetch('http://localhost:9000/api/v1/auth/login', {
        method: 'POST', 
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await loginResponse.json();
      console.log("login response: ", parsedResponse)
    }catch(err){
      console.log(err);
    }
  }


  register = async () => {
    console.log('register button clicked');
  }



  render(){
    return (
      <div>
        <h1>The Knot List</h1>

        <form onSubmit={this.handleLogin}>
          <input type="text" name="email" placeholder="email" onChange={this.handleChange} />
          <input type="text" name="password" placeholder="password" onChange={this.handleChange} />
          <button type="submit">Login</button>
        </form>

        <button onClick={this.register}>Register</button>

        <UserContainer />
        <ListingContainer /> 
      </div>
    );
  }
}

export default App;
