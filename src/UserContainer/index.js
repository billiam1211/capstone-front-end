import React, { Component } from 'react';
import UserAccount from '../UserAccount';


class UserContainer extends Component {
	constructor(props){
		super()
	}

	render(){
		// console.log('UserContainer: ', this.props);
		return(
			<div>
				<UserAccount loggedUser={this.props} />
			</div>
			)
	}


}


export default UserContainer;