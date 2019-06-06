import React, { Component } from 'react';
import Account from '../Account';



// this is the class for registering a new user 
class Register extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      userId: '',
      loggedIn: false,
      registerMsg: '',
      showAccount: false,
      registered: false
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
      console.log("register response: ", parsedResponse)

      const message = parsedResponse.msg

      this.setState({
        email: parsedResponse.data.email,
        userId: parsedResponse.data._id,
        registerMsg: parsedResponse.msg,
        loggedIn: true,
        showAccount:true,
        registered: true
      })


    }catch(err){
      console.log(err);
    }
  }


	render(){
    // console.log(this.state);

    if(this.state.showAccount){
          return(
            <Account state={this.state} history={this.props.history}/>
            )
        } else {
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

}



export default Register;