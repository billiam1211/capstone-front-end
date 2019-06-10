import React from 'react';
import {Link } from 'react-router-dom';


function Guest () {

	return(
			<div className="guestForm">
				<h1>Thank you for visiting Wedding Exchange!</h1>
				<h3> The page you are currently attempting to access is available only to registered users </h3>
				<br />
				<Link to="/register"><button className="animated delay-4s tada">Register New Account</button></Link><br /><br />
				<Link to="/login"><button>Login</button></Link>
				<br />
			</div>
		)
}





export default Guest;