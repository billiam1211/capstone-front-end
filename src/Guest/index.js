import React, { Component } from 'react';
import {Link } from 'react-router-dom';


function Guest () {

	return(
			<div className="form">
				<h1>Thank you for visiting Wedding Exchange!</h1>
				<br />
				<br />
				<h3> The page you are currently attempting to access is available only to registered users </h3>
				<br />

				<Link to="/register"><button>Register New Account</button></Link>



			</div>
		)
}





export default Guest;