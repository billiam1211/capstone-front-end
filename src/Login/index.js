import React, { Component } from 'react';
import Account from '../Account';

class Login extends React.Component {
  constructor(props){
    super();
    this.state = {
		email: '',
		userId: '',
		loggedIn: false,
		msg: ''
    }
  }
  



  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }



  // HANDLES THE LOGIN FORM SUBMISSION
  handleLogin = async (e) => {
  e.preventDefault();

    try{

      const loginResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/auth/login', {
        method: 'POST', 
        credentials: 'include',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await loginResponse.json();
      console.log(parsedResponse);

      if(parsedResponse.status === 200){
        this.setState({
			email: parsedResponse.data.email,
			userId: parsedResponse.data._id,
			listings: [],
			loggedIn: true,
			msg: parsedResponse.msg
        })
        this.props.setUserInfo(this.state)
        this.props.history.push('/account');

       } else {

        this.setState({
          msg: 'Username or password is invalid'
        })
        
       }

    }catch(err){
      console.log(err);
    }
  }






  render(){
    console.log(this.state);
    console.log(this.props);
      return (
        <div>
          <form className="form" onSubmit={this.handleLogin}>
            <h3>Login</h3>
            <input type="text" name="email" placeholder="enter email" onChange={this.handleChange} /> <br />
            <input type="password" name="password" placeholder="enter password" onChange={this.handleChange} /> <br />
            <button type="submit">Login</button>
            <h3> { this.state.msg } </h3>
          </form>
        </div>
      )
  }
}

export default Login;
