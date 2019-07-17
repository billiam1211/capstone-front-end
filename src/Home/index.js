import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Home extends Component{
	constructor(props){
		super()

	}



  render(){
	return (
		<div className="homeContainer">
			<div className="form">
				<div className="filter">
					<h2 className="animated 1s flipInX">Welcome To Wedding Exchange!</h2>
					<h4>
						Wedding Exchange is the premier online platform for connecting individuals that want to 
						buy, sell, and trade wedding goods.
					</h4>
				</div>
				<div>
					<Link to="/register"><button>Register New Account</button></Link><br /><br />
					<Link to="/login"><button>Login</button></Link>
				</div>
			</div>
		</div>
		)
  }


}

export default Home;