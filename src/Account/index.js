import React from 'react';
import Listings from '../Listings';
import EditListing from '../EditListing';
import Guest from '../Guest';


class Account extends React.Component {
	constructor(props){
		super()
		this.state = ({
			email: props.globalState.email,
			userId: props.globalState.userId,
			listings: [],
			loggedIn: props.globalState.loggedIn,
			listingId: '',
			listingToEditId: '',
			showEditListing: false
		})
	}



	// UPON PAGE RENDER AUTOMATICALLLY POPULATES THE USERS ACTIVE LISTINGS
	componentDidMount(){
		this.getUserListings(this.state.userId)
	}




	// GETS THE LISTINGS FOR THE LOGGED IN USER
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
		// console.log('Edit account button clicked');
      	this.props.history.push('/accountEdit');
	}



	// DELETES USER ACCOUNT AND REDIRECTS TO HOME PAGE
	handleDeleteAccount = async (e) => {
		e.preventDefault()
		// console.log('delete account button clicked');
		try{
			const deleteAccountResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/user/${this.state.userId}`,{
				method: 'DELETE', 
				credentials: 'include',
				headers: {
				  'Content-Type': 'application/json'
				}
			})
			const parsedResponse = await deleteAccountResponse.json()
			this.props.history.push('/home')
		}catch(err){
			console.log(err);
		}
	}




	// // SET TRIGGER TO RENDER THE CREATE LISTING COMPONENT
	handleCreateNewListing = (e) => {
		e.preventDefault();
		// console.log('handle create new listing ');
        this.props.history.push('/CreateListing');
	}



	//DELETES A SPECIFIC LISTING USING THE DATA-ID PROPERTY
	deleteListing = async (e) => {
			const listingId = e.currentTarget.dataset.listingId;
			try{
			const deleteListingResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/listing/${listingId}`, {
				method: 'DELETE', 
				credentials: 'include',
				headers: {
				  'Content-Type': 'application/json'
				}
			})
			const parsedResponse = await deleteListingResponse.json();
			this.getUserListings(this.state.userId)
			this.props.history.push('/account');
		}catch(err){
			console.log(err);
		}
	}



	//EDIT LISTING FUNCTION
	editListing = (e) => {
		e.preventDefault()
		this.setState({
			listingToEditId: e.currentTarget.dataset.listingId,
			showEditListing: true
		})

	}



	resetTrigger = () => {
		this.setState({
			showEditListing: false
		})
	}






	render(){
 		if(this.state.loggedIn === false){
 			return(
 				<div>
 					<Guest />
				</div>
 				)
 		} else {

			if(this.state.showEditListing){

				return(
					<EditListing resetTrigger={this.resetTrigger} state={this.state} getUserListings={this.getUserListings} />
					)
			
	 		} else {


				if(this.state.listings.length === 0){
							return(
						        <div className="loginContainer">

									<div className="form">
										<div className="inForm">
											<h1>Account</h1>
											<br />
											<h5>Email:</h5>
											<p>{this.state.email}</p>
											<h5>User Id:</h5>
											<p>{this.state.userId}</p>
										</div>
										<button onClick={this.handleCreateNewListing}>Create New Listing</button>
										<button onClick={this.handleLogout}	>Logout</button>
										<button onClick={this.handleEditAccount}>Edit Account</button>
										<button onClick={this.handleDeleteAccount}>Delete Account</button>
										<br />
										<br />
										<p>You don't have any listings yet <br /> 
										Click 'Create Listing' to post an item for sale</p>	
										<br /><br /><br /><br /><br /><br /><br /><br /><br />

									</div>
								</div>
								)


			 			} else {


				 			if(this.state.listings.length > 0){
								return(

							        <div className="loginContainer">
										<div className="form">
											<div className="inForm">
												<h1>Account</h1>
												<br />
												<h5>Email:</h5>
												<p>{this.state.email}</p>
												<h5>User Id:</h5>
												<p>{this.state.userId}</p>
											</div>
											<div className="buttonWrapper">
												<button onClick={this.handleCreateNewListing}>Create New Listing</button>
												<button onClick={this.handleLogout}>Logout</button>
												<button onClick={this.handleEditAccount}>Edit Account</button>
												<button onClick={this.handleDeleteAccount}>Delete Account</button>
											</div>

										</div>
									</div>
									
									)	
							}


			 			}
			 		}
 		} 
	}
}




export default Account;