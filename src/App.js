import React, { Component } from 'react';
import './App.css';
import UserContainer from './UserContainer';
import CreateListing from './CreateListing';
import ListingContainer from './ListingContainer';

class App extends Component {
  constructor(){
    super()
    this.state = ({
      email: '',
      listings: [],
      userId: '',
      loggedIn: false,
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

      // console.log('login button clicked');
      const loginResponse = await fetch('http://localhost:9000/api/v1/auth/login', {
        method: 'POST', 
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await loginResponse.json();
      // console.log("login response: ", parsedResponse)
      // console.log(parsedResponse.msg);


      await this.setState({
        email: parsedResponse.data.email,
        userId: parsedResponse.data._id,
        loginMsg: parsedResponse.msg
      })


      await this.getUserListings()

    }catch(err){
      console.log(err);
    }
  }



  // HANDLES NEW USER REGISTRATION
  handleRegister = async (e) => {
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
      // console.log("register response: ", parsedResponse)


      const message = parsedResponse.msg
      this.setState({
        registerMsg: parsedResponse.msg
      })


    }catch(err){
      console.log(err);
    }
  }



  // GETS THE LISTINGS FOR THE LOGGED IN USER
  getUserListings = async () => {
    console.log('get user listings function hit!');
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
        listings: parsedResponse.data.listings
      })

      console.log('++++++++++++++++++++++++++++++++++++');
      // console.log("listings: ", parsedResponse.data.listings)
      console.log(this.state);
      console.log('++++++++++++++++++++++++++++++++++++');

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
          <button type="submit">Register</button>
          <h3> { this.state.registerMsg } </h3>
        </form>



        <UserContainer loggedUser={this.state} />
        <ListingContainer />
      </div>
    );
  }
}

export default App;
