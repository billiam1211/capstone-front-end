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
      password: '',
      loginMsg: '',
      registerMsg: ''
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
      console.log(parsedResponse.msg);
      this.setState({
        loginMsg: parsedResponse.msg
      })
    }catch(err){
      console.log(err);
    }
  }


  handleRegister = async (e) => {
    console.log('register button clicked');
    e.preventDefault();
    try{

      const registerResponse = await fetch('http://localhost:9000/api/v1/user/register', {
        method: 'POST', 
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await registerResponse.json();
      console.log("register response: ", parsedResponse)

      const message = parsedResponse.msg
      this.setState({
        registerMsg: parsedResponse.msg
      })

    }catch(err){
      console.log(err);
    }
  }



  render(){
    return (
      <div>
        <h1>The Knot List</h1>

        <form className="form" onSubmit={this.handleLogin}>
          <h3>Login</h3>
          <input type="text" name="email" placeholder="email" onChange={this.handleChange} />
          <input type="text" name="password" placeholder="password" onChange={this.handleChange} />
          <button type="submit">Login</button>
          <h3> { this.state.loginMsg } </h3>

        </form>

        <form className="form" onSubmit={this.handleRegister}>
          <h3>Register</h3> 
          <input type="text" name="email" placeholder="email" onChange={this.handleChange} />
          <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
          <input type="text" name="confirm password" placeholder="confirm password" onChange={this.handleChange} />
          <button type="submit">Register</button>
          <h3> { this.state.registerMsg } </h3>
        </form>



        <UserContainer />
        <ListingContainer /> 
      </div>
    );
  }
}

export default App;
