import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class ListingContainer extends Component {
	constructor(){
		super()
		this.state = {
			selectedFile: null
		}
	}


	// this function selects a file that the user specifies using the form
	fileSelectedHandler = event => {
		console.log(event.target.files[0]);
		this.setState({
			selectedFile: event.target.files[0]
		})
	}
	// this function uploads the selected file by sending it to the specified route
	// using axios to send the post request and express-formidable is parsing the formData
	// in the back end 
	fileUploadHandler = async () => {
		console.log('file upload working...');
		const formData = new FormData();
		formData.append('image', this.state.selectedFile, this.state.selectedFile.name);
		axios.post('http://localhost:9000/api/v1/listing/new', formData, {
			onUploadProgress: progressEvent => {
				console.log('Upload Progress: ' + Math.round((progressEvent.loaded / progressEvent.total) * 100) + '%');
			}
		})
		.then(res => {
			console.log(res);
		})
	}


	render(){
		return(
			<div>
				<h1>This is the Listing Container</h1>
				<input style={{display: 'none'}} type="file" onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput} />
				<button onClick={() => this.fileInput.click()}>Select File</button>
				<button onClick={this.fileUploadHandler}>Upload</button>
			</div>
			)
	}
}


export default ListingContainer;