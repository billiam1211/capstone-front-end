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
			<h1 className="animated 1s flipInX">Welcome To Wedding Exchange</h1>
			<h3>
				Wedding Exchange is the premier online platform for connecting individuals that want to 
				buy, sell, and trade wedding goods.<br/><br/>
			</h3>
			<img  className="animated fadeInUpBig" alt="wedding-planning-photo" src="https://www.hellomagazine.com/imagenes/brides/2019011066459/wedding-planning-apps-for-brides/0-313-188/wedding-planning-t.jpg"/>
				
			<br />
			<Link to="/register"><button>Register New Account</button></Link> <br /> 
			<Link to="/login"><button>Login</button></Link>
		</div>
		)
  }


}

export default Home;