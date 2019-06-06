import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {Link } from 'react-router-dom';

class Home extends Component{
	constructor(props){
		super()

	}



  render(){
  	// console.log(this.props);
	return (
		<div className="form">
			<h1>Welcome To Wedding Trader!</h1>
			<h3>
				Wedding Trade is the premier online platform for connecting individuals that want to 
				buy, sell, and trade wedding goods.<br/><br/>
			</h3>
				
			<p>
				Click Register to sign up today!
			</p>
			<Link to="/login"><button>Login</button></Link>
			<Link to="/register"><button>Register</button></Link>
		</div>
		)
  }


}

export default Home;