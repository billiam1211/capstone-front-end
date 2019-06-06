import React, { Component } from 'react';
import Listings from '../Listings';
import AccountEdit from '../AccountEdit';
import CreateListing from '../CreateListing';
import EditListing from '../EditListing';



class Account extends React.Component {
	constructor(props){
		super()
		this.state = ({
			showAccountEdit: false,
			email: '',
			password: '',
			confirmPassword:'',
			showCreateListing: false,
			showEditListing: false,
			editListingId: ''
		})
	}



	// CHANGES STATE ON INPUTS FROM FORMS
	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}



	// LOGS CURRENT USER OUT AND REDIRECTS TO HOME
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



	// SETS TRIGGER TO RENDER THE ACCOUNT EDIT PAGE
	handleEditAccount = (e) => {
		e.preventDefault()
		console.log('Edit account button clicked');
		this.setState({
			showAccountEdit: true
		})
	}



	// DELETES USER ACCOUNT AND REDIRECTS TO HOME PAGE
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
			// console.log(parsedResponse);
			this.props.history.push('/home');
		}catch(err){
			console.log(err);
		}
	}



	// THIS METHOD IS PASSED DOWN TO THE ACCOUNT EDIT COMPONENT
	// AND UPDATES USER, RESETS SHOW ACCOUND EDIT TRIGGER, AND
	// REDIRECTS TO HOME
	submitAccountUpdate = async (e) => {
		e.preventDefault()
		console.log('hit the submit account update route');
		const userData = {
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword
		}
		try{
			const updatedAccountResponse = await fetch(`http://localhost:9000/api/v1/user/${this.props.state.userId}`,{
				method: 'PUT', 
				credentials: 'include',
        		body: JSON.stringify(userData),
				headers: {
				  'Content-Type': 'application/json'
				}
			})
			const parsedResponse = await updatedAccountResponse.json()
			console.log(parsedResponse);
			this.setState({
				showAccountEdit: false
			})
			this.props.history.push('/home');
		}catch(err){
			console.log(err);
		}
	}



	// SET TRIGGER TO RENDER THE CREATE LISTING COMPONENT
	handleCreateNewListing = (e) => {
		e.preventDefault();
		console.log('handle create new listing ');
		this.setState({
			showCreateListing: true
		})

	}


	// RESETS THE TRIGGER FOR SHOW CREATE NEW LISTING COMPONENT
	resetTrigger = (e) => {
		console.log('reset show create listing trigger was hit');

		this.setState({
			showCreateListing: false,
			showEditListing: false
		})

	}



	// DELETES A SPECIFIC LISTING USING THE DATA-ID PROPERTY
	deleteListing = async (e) => {
		console.log(this.props);
		console.log('hit the deleteListing button');
			console.log(e.currentTarget.dataset.listingId);
			const listingId = e.currentTarget.dataset.listingId

			try{
			const deleteListingResponse = await fetch(`http://localhost:9000/api/v1/listing/${listingId}`,{
				method: 'DELETE', 
				credentials: 'include',
				headers: {
				  'Content-Type': 'application/json'
				}
			})
			const parsedResponse = await deleteListingResponse.json();
			console.log(parsedResponse);
			await this.props.getUserListings()

		}catch(err){
			console.log(err);
		}
	}



	//EDIT LISTING FUNCTION
	editListing = (e) => {
		e.preventDefault()
		console.log('hit the edit listing function');
		console.log(e.currentTarget.dataset.listingId)
		this.setState({
			showEditListing: true,
			editListingId: e.currentTarget.dataset.listingId
		})
	}






	render(){
		console.log(this.state);
		// console.log(this.props.state.userId, '***logged user***');
		// console.log(this.props, '<==');


		if(this.state.showEditListing){
			return(
				<div>
					<EditListing getUserListings={this.props.getUserListings} resetTrigger={this.resetTrigger} listingId={this.state.editListingId}/>
				</div>
				)
		} else {

			if(this.state.showCreateListing){
				return(
					<div>
						<CreateListing getUserListings={this.props.getUserListings} resetTrigger={this.resetTrigger}/>
					</div>
					)
			} else {
				if(this.state.showAccountEdit){
							return(
								<div>
									<AccountEdit handleChange={this.handleChange} submitAccountUpdate={this.submitAccountUpdate} />
								</div>
								)
			} else {
				if(this.props.state.registered){
					return(
						<div className="form">
							<h1>Account</h1>
							<h3>Email:  {this.props.state.email}</h3>
							<h3>User Id:  {this.props.state.userId}</h3>
							<button onClick={this.handleCreateNewListing}>Create New Listing</button>
							<button onClick={this.handleLogout}>Logout</button>
							<button onClick={this.handleEditAccount}>Edit Account</button>
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
						<button onClick={this.handleCreateNewListing}>Create New Listing</button>
						<button onClick={this.handleLogout}	>Logout</button>
						<button onClick={this.handleEditAccount}>Edit Account</button>
						<button onClick={this.handleDeleteAccount}>Delete Account</button>
						<br />
						<br />
						<br />
						<h3 id="listingHeader">Listings:</h3>
						<Listings 
							listings={ this.props.state.listings } 
							deleteListing={ this.deleteListing } 
							editListing={ this.editListing } 
							/>
					</div>
					)	
					}
				}
			}
		}
	}
}


export default Account;