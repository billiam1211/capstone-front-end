import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Home extends Component{
	constructor(props){
		super()

	}



  render(){
	return (
		<div id="homePage">
			<div className="form">
				<h2 className="animated 1s flipInX">Welcome To Wedding Exchange!</h2>
				<h4>
					Wedding Exchange is the premier online platform for connecting individuals that want to 
					buy, sell, and trade wedding goods.
				</h4>
				<img id="homeImg" alt="wedding-planning-photo" src="https://www.hellomagazine.com/imagenes/brides/2019011066459/wedding-planning-apps-for-brides/0-313-188/wedding-planning-t.jpg" />
				<div>
					<Link to="/register"><button>Register New Account</button></Link>
					<Link to="/login"><button>Login</button></Link>
				</div>
			</div>
		</div>
		)
  }


}

export default Home;