import React, { Component } from 'react';
import Listings from '../Listings';


class Account extends React.Component {
	constructor(props){
		super()
	}

	render(){
		console.log("Account => this.props: ", this.props.state.registered);

		if(this.props.state.registered){
			return(
				<div className="form">
					<h1>Account</h1>
					<h3>Email: {this.props.state.email}</h3>
					<h3>User Id: {this.props.state.userId}</h3>
					<button>Logout</button>
					<button>Edit Account</button>
					<button>Delete Account</button>
					<h3>Listings:</h3>
					<p>You don't have any listings yet <br /> 
					Click 'Create Listing' to post an item for sale</p>
				</div>
				)
		} else {
			return(
				<div className="form">
					<h1>Account</h1>
					<h3>Email:</h3>
					<p>{this.props.loggedUser.email}</p>
					<h3>User Id:</h3>
					<p>{this.props.loggedUser.userId}</p>
					<button>Logout</button>
					<button>Edit Account</button>
					<button>Delete Account</button>
					<h3>Listings:</h3>
					<Listings loggedUser={this.props}/>
				</div>
				)	
		}
	}


}


export default Account;