import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';



// this is the class for registering a new user 
class Register extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      userId: '',
      loggedIn: false,
      registerMsg: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
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
        registerMsg: parsedResponse.msg,
        loggedIn: true
      })


    }catch(err){
      console.log(err);
    }
  }


	render(){
		return(
			<div>
		        <form className="form" onSubmit={this.handleRegister}>
		          <h3>Register</h3> 
		          <input type="text" name="email" placeholder="email" onChange={this.handleChange} /><br />
		          <input type="password" name="password" placeholder="password" onChange={this.handleChange} /><br />
              <input type="password" name="confirmPassword" placeholder="confirm password" onChange={this.handleChange} /> <br />
		          <button type="submit">Register</button>
		          <h3> { this.state.registerMsg } </h3>
		        </form>
			</div>
	  )
	}

}



export default Register;