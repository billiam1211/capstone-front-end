import React, { Component } from 'react';



function UserAccount (props) {

	console.log(props.loggedUser, '<----<<<');
	

		return(
			<div>

				<div className="form">
					<h1>Account Overview</h1>
						<h3>Email: { props.loggedUser.loggedUser.email } </h3><br />
						<h3>UserId: { props.loggedUser.loggedUser.userId }</h3><br />
						<h3>Listings: </h3><br />
						<button>Edit Account</button><br />
	        			<button>Delete</button><br />
	        			<button>Log Out</button><br />
				</div>
			</div>
			)
}


export default UserAccount;