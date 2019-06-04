import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import UserContainer from '../UserContainer'

function Home(props){
	return (
		<div>
			<h1>This is the home component</h1>
		</div>
		)
}

export default Home;