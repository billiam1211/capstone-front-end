import React, { Component } from 'react';
import Listings from '../Listings';
import AccountEdit from '../AccountEdit';
import CreateListing from '../CreateListing';
import EditListing from '../EditListing';



class Account extends React.Component {
	constructor(props){
		super()
		this.state = ({
			email: props.globalState.email,
			userId: props.globalState.userId,
			listings: [],
			// showAccountEdit: false,
			// showCreateListing: false,
			// showEditListing: false,
			// editListingId: ''
		})
	}


	componentDidMount(){

		this.getUserListings(this.state.userId)
	}





	//GETS THE LISTINGS FOR THE LOGGED IN USER
	getUserListings = async (id) => {
	const loggedUserId = id
	try{
	  const listingResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/user/${loggedUserId}`, {
	    method: 'GET', 
	    credentials: 'include',
	    headers: {
	      'Content-Type': 'application/json'
	    }
	  })
	  const parsedResponse = await listingResponse.json();
	  console.log('PARSED RESPONSE: ', parsedResponse);

	  this.setState({
	  	listings: parsedResponse.data.listings
	  })



	}catch(err){
	  console.log(err);
		}
	}




	// CHANGES STATE ON INPUTS FROM FORMS
	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}



	// LOGS CURRENT USER OUT, RESETS GLOBAL STATE AND REDIRECTS TO HOME 
	handleLogout = async (e) => {
		e.preventDefault()
		console.log('logout button clicked');
		try{
			const logoutResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/auth/logout', {
				method: 'DELETE', 
				credentials: 'include',
				headers: {
				  'Content-Type': 'application/json'
				}
			})
			const  parsedResponse = await logoutResponse.json()

			const info = {
		      email: '',
		      userId: '',
		      listings: [],
		      loggedIn: false,
		      registered: false
			}
			this.props.setUserInfo(info);
			this.props.history.push("/home");
		}catch(err){
			console.log(err);
		}
	}



	// SENDS USER TO ACCOUNT EDIT COMPONENT 
	handleEditAccount = (e) => {
		e.preventDefault()
		console.log('Edit account button clicked');
      	this.props.history.push('/accountEdit');

	}



	// DELETES USER ACCOUNT AND REDIRECTS TO HOME PAGE
	handleDeleteAccount = async (e) => {
		e.preventDefault()
		console.log('delete account button clicked');
		try{

			const deleteAccountResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/user/${this.state.userId}`,{
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








	// // SET TRIGGER TO RENDER THE CREATE LISTING COMPONENT
	handleCreateNewListing = (e) => {
		e.preventDefault();
		console.log('handle create new listing ');
        this.props.history.push('/CreateListing');


	}


	// // RESETS THE TRIGGER FOR SHOW CREATE NEW LISTING COMPONENT
	// resetTrigger = (e) => {
	// 	console.log('reset show create listing trigger was hit');

	// 	this.setState({
	// 		showCreateListing: false,
	// 		showEditListing: false
	// 	})

	// }



	//DELETES A SPECIFIC LISTING USING THE DATA-ID PROPERTY
	deleteListing = async (e) => {
		console.log(this.props);
		console.log('hit the deleteListing button');
			console.log(e.currentTarget.dataset.listingId);
			const listingId = e.currentTarget.dataset.listingId

			try{
			const deleteListingResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/listing/${listingId}`,{
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
 		console.log(this.props.globalState.email, 'account global state');
 		console.log('ACCOUNT STATE: ', this.state.listings);
		if(this.state.listings.length == 0){
			return(
				<div className="form">
					<h1>Account</h1>
					<h3>Email:</h3>
					<p>{this.state.email}</p>
					<h3>User Id:</h3>
					<p>{this.state.userId}</p>
					<button onClick={this.handleCreateNewListing}>Create New Listing</button>
					<button onClick={this.handleLogout}	>Logout</button>
					<button onClick={this.handleEditAccount}>Edit Account</button>
					<button onClick={this.handleDeleteAccount}>Delete Account</button>
					<br />
					<br />
					<p>You don't have any listings yet <br /> 
					Click 'Create Listing' to post an item for sale</p>	
					<br /> 	<br /> <br /> <br /> <br /> 
				</div>
				)
		} else {
			if(this.state.listings.length > 0){
				return(
					<div className="form">
						<h1>Account</h1>
						<h3>Email:</h3>
						<p>{this.state.email}</p>
						<h3>User Id:</h3>
						<p>{this.state.userId}</p>
						<button onClick={this.handleCreateNewListing}>Create New Listing</button>
						<button onClick={this.handleLogout}	>Logout</button>
						<button onClick={this.handleEditAccount}>Edit Account</button>
						<button onClick={this.handleDeleteAccount}>Delete Account</button>
						<br />
						<br />
						<br />
						<h3 id="listingHeader">Listings:</h3>
						<Listings listings={this.state.listings} />
					</div>
					)
			}
		}
	}
}


export default Account;