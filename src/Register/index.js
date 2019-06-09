import React, { Component } from 'react';
import Account from '../Account';



// this is the class for registering a new user 
class Register extends Component {
  constructor(props){
    super();
    this.state = {
      email: '',
      userId: '',
      loggedIn: false,
      registered: false,
      msg: ''
    }
  }




  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }




  // HANDLES NEW USER REGISTRATION
  handleRegister = async (e) => {
    e.preventDefault();

    try{

      const registerResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/user/register', {
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

      if(parsedResponse.status == 200){
        this.setState({
          email: parsedResponse.data.email,
          userId: parsedResponse.data._id,
          msg: parsedResponse.msg,
          loggedIn: true,
          registered: true,
          showAccount:true
        })
      } else {
        this.setState({
          msg: parsedResponse.msg
        })
      }


      const info = {
        email: parsedResponse.data.email,
        userId: parsedResponse.data._id,
        msg: parsedResponse.msg,
        loggedIn: true,
        registered: true
      }

      this.props.setUserInfo(info);
      this.props.history.push('/account');

    }catch(err){
      console.log(err);
    }
  }







	render(){
    // console.log(this.state);
    console.log(this.props, 'register component props');

        		return(
        			<div>
        		        <form className="form" onSubmit={this.handleRegister}>
        		          <h3>Register</h3> 
        		          <input type="text" name="email" placeholder="email" onChange={this.handleChange} /><br />
        		          <input type="password" name="password" placeholder="password" onChange={this.handleChange} /><br />
                      <input type="password" name="confirmPassword" placeholder="confirm password" onChange={this.handleChange} /> <br />
        		          <button type="submit">Register</button>
        		          <h3> { this.state.msg } </h3>
                    <img src="https://www.zola.com/blog/wp-content/uploads/2015/12/carfeatured.png"/>
        		        </form>

        			</div>
        	  )
          }

}



export default Register;