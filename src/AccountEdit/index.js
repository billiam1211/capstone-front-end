import React, { Component } from 'react';


class AccountEdit extends React.Component {
	constructor(props){
		super()
		this.state = ({
			userId: props.globalState.userId,
			email: '',
			password: '',
			confirmPassword: ''
		})
	}


	// CHANGES STATE ON INPUTS FROM FORMS
	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}


	// UPDATES USER, RESETS SHOW ACCOUND EDIT TRIGGER, AND
	// REDIRECTS TO HOME
	submitAccountUpdate = async (e) => {
		e.preventDefault()
		console.log('hit the submit account update route');
		const userData = { email: this.state.email, password: this.state.password, confirmPassword: this.state.confirmPassword }
		try{
			const updatedAccountResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/user/${this.state.userId}`,{
				method: 'PUT', 
				credentials: 'include',
        		body: JSON.stringify(userData),
				headers: {
				  'Content-Type': 'application/json'
				}
			})
			const parsedResponse = await updatedAccountResponse.json()
			console.log(parsedResponse);
			// Sends the new user info to the Global State
			const info = { email: parsedResponse.data.email}
			this.props.setUserInfo(info);
			this.props.history.push('/account');
		}catch(err){
			console.log(err);
		}
	}



	render(){
		return(
			<div className="form">
				<form onSubmit={this.submitAccountUpdate}>
					<h1>Edit Account Info:</h1>
						<input type="text" name="email" placeholder="email" onChange={this.handleChange} /><br />
						<input type="password" name="password" placeholder="password" onChange={this.handleChange} /><br />
						<input type="password" name="confirmPassword" placeholder="confirm password" onChange={this.handleChange} /> <br />
					<button type="submit">Update</button>
				</form>
			</div>
			)	
	}


}


export default AccountEdit;