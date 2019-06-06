import React, { Component } from 'react';


class AccountEdit extends React.Component {
	constructor(props){
		super()
	}



	render(){
		return(
			<div className="form" onSubmit={this.props.submitAccountUpdate}>
				<form>
					<h1>Edit Account Info:</h1>
						<input type="text" name="email" placeholder="email" onChange={this.props.handleChange} /><br />
						<input type="password" name="password" placeholder="password" onChange={this.props.handleChange} /><br />
						<input type="password" name="confirmPassword" placeholder="confirm password" onChange={this.props.handleChange} /> <br />
					<button type="submit">Update</button>
				</form>
			</div>
			)	
	}


}


export default AccountEdit;