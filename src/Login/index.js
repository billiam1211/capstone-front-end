import React, { Component } from 'react';
import Account from '../Account';

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      email: '',
      listings: [],
      userId: '',
      loggedIn: false,
      loginMsg: '',
      registerMsg: '',
      showAccount: false
    }
  }
  

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }



  // HANDLES THE LOGIN FORM SUBMISSION
  handleLogin = async (e) => {
  e.preventDefault();

    try{

      const loginResponse = await fetch('http://localhost:9000/api/v1/auth/login', {
        method: 'POST', 
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await loginResponse.json();
      this.setState({
        email: parsedResponse.data.email,
        userId: parsedResponse.data._id,
        loginMsg: parsedResponse.msg
      })
      this.getUserListings()
    }catch(err){
      console.log(err);
    }
  }


  // GETS THE LISTINGS FOR THE LOGGED IN USER
  getUserListings = async () => {
    const loggedUserId = this.state.userId
    try{
      const listingResponse = await fetch(`http://localhost:9000/api/v1/user/${loggedUserId}`, {
        method: 'GET', 
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await listingResponse.json();
      this.setState({
        listings: parsedResponse.data.listings,
        showAccount: true
      })
    }catch(err){
      console.log(err);
    }
  }


  render(){
    console.log(this.state);
    if(this.state.showAccount){
      return(
        <Account loggedUser={this.state}/>
        )
    } else {
      return (
        <div>
          <form className="form" onSubmit={this.handleLogin}>
            <h3>Login</h3>
            <input type="text" name="email" placeholder="enter email" onChange={this.handleChange} /> <br />
            <input type="password" name="password" placeholder="enter password" onChange={this.handleChange} /> <br />
            <button type="submit">Login</button>
            <h3> { this.state.loginMsg } </h3>
          </form>
        </div>
      )
    }
  }
}

export default Login;
