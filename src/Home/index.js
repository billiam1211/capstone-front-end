import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Home extends Component{
	constructor(props){
		super()

	}



  render(){
  	// console.log(this.props);
	return (


			
		<div className="form">
			<h1 className="pulse">Welcome To Wedding Trade</h1>
			<h3>
				Wedding Trade is the premier online platform for connecting individuals that want to 
				buy, sell, and trade wedding goods.<br/><br/>
			</h3>
			<img alt="wedding-planning-photo" src="https://www.hellomagazine.com/imagenes/brides/2019011066459/wedding-planning-apps-for-brides/0-313-188/wedding-planning-t.jpg"/>
				
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