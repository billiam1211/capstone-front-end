import React, { Component } from 'react';
import Listings from '../Listings';


class Account extends React.Component {
	constructor(props){
		super()
	}


	// USER LOGOUT ROUTE
	handleLogout = async (e) => {
		e.preventDefault()
		console.log('logout button clicked');

		try{

			const logoutResponse = await fetch('http://localhost:9000/api/v1/auth/logout', {
				method: 'DELETE', 
				credentials: 'include',
				headers: {
				  'Content-Type': 'application/json'
				}
			})
			const  parsedResponse = await logoutResponse.json()
			this.props.history.push("/home");
		}catch(err){
			console.log(err);
		}
	}

	handleDeleteAccount = async (e) => {
		e.preventDefault()
		console.log('delete account button clicked');

		try{

			const deleteAccountResponse = await fetch(`http://localhost:9000/api/v1/user/${this.props.state.userId}`,{
				method: 'DELETE', 
				credentials: 'include',
				headers: {
				  'Content-Type': 'application/json'
				}
			})

			const parsedResponse = await deleteAccountResponse.json()
			console.log(parsedResponse);
			
			this.props.history.push('/home');

		}catch(err){
			console.log(err);
		}
	}


	render(){
		// console.log(this.props.state.userId, '***logged user***');
		// console.log(this.props, '<==');
		if(this.props.state.registered){
			return(
				<div className="form">
					<h1>Account</h1>
					<h3>Email:  {this.props.state.email}</h3>
					<h3>User Id:  {this.props.state.userId}</h3>
					<button onClick={this.handleLogout}>Logout</button>
					<button >Edit Account</button>
					<button onClick={this.handleDeleteAccount}>Delete Account</button>
					<br />
					<br />
					<br />
					<h3 id="listingHeader">Listings:</h3>
					<p>You don't have any listings yet <br /> 
					Click 'Create Listing' to post an item for sale</p>
				</div>
				)
		} else {
			return(
				<div className="form">
					<h1>Account</h1>
					<h3>Email:</h3>
					<p>{this.props.state.email}</p>
					<h3>User Id:</h3>
					<p>{this.props.state.userId}</p>
					<button onClick={this.handleLogout}>Logout</button>
					<button>Edit Account</button>
					<button onClick={this.handleDeleteAccount}>Delete Account</button>
					<br />
					<br />
					<br />
					<h3 id="listingHeader">Listings:</h3>
					<Listings listings={this.props.state.listings}/>
				</div>
				)	
		}
	}


}


export default Account;