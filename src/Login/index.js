import React, { Component } from 'react';
import Account from '../Account';

class Login extends React.Component {
  constructor(props){
    super();
    this.state = {
      email: '',
      listings: [],
      userId: '',
      loggedIn: false,
      loginMsg: '',
      registerMsg: '',
      showAccount: false,
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

      if(parsedResponse.status === 200){
        this.setState({
          email: parsedResponse.data.email,
          userId: parsedResponse.data._id,
          loginMsg: parsedResponse.msg,
          loggedIn: true
        })

        this.props.logInGlobal()

      } else {
        this.setState({
          loginMsg: parsedResponse.msg
        })
      }

      if(this.state.email !== ''){
        this.getUserListings()
      }
    }catch(err){
      console.log(err);
    }
  }

  // this is called when the user logs out in the account app to reset the logged in trigger to false
  resetLoginTrigger = () => {
    this.setState({
      loggedIn: false
    })
    this.props.logoutGlobal()
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
      console.log(parsedResponse);
      await this.setState({
        listings: parsedResponse.data.listings,
        showAccount: true
      })
    }catch(err){
      console.log(err);
    }
  }


  render(){
    console.log(this.state);
    console.log(this.props);
    // console.log("login props:")
    // console.log(this.props)
    // console.log(this.state);
    if(this.state.showAccount){
      return(
        <Account state={this.state} history={this.props.history} getUserListings={this.getUserListings} resetLoggedIn={this.resetLoginTrigger}/>
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
