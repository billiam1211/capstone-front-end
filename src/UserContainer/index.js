import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Home from '../Home'


class UserContainer extends Component {
	constructor(){
		super()
		this.state = {
		}
	}


	render(){
		return(
			<div>
				<Home />
			</div>
			)
	}
}


export default UserContainer;