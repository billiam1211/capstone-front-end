import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Home extends Component{
	constructor(props){
		super()

	}


				// <img id="homeImg" alt="wedding-planning" src="https://www.hellomagazine.com/imagenes/brides/2019011066459/wedding-planning-apps-for-brides/0-313-188/wedding-planning-t.jpg" />

  render(){
	return (
		<div className="homeContainer">
			<div className="form">
				<h1>The Wedding Exchange</h1>
				<br />
				<br />
				<div>
					<Link to="/register"><button>Register New Account</button></Link><br /><br />
					<Link to="/login"><button>Login</button></Link>
				</div>
	            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
			</div>
		</div>
		)
  }


}

export default Home;