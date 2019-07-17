import React, { Component } from 'react';
import axios from 'axios';


class CreateListing extends Component {
	constructor(props){
		super()
		this.state = {
			selectedFile: null,
			name: '',
			category: 'apparel',
			price: '',
			quantity: '',
			description: '',
			sellerEmail: props.globalState.email,
			uploadProgress: ''
		}
	}




	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}




	handleSelectChange = (e) => {
		this.setState({category: e.target.value});
	}



	// this function selects a file that the user specifies using the form
	fileSelectedHandler = (event) => {
		this.setState({
			selectedFile: event.target.files[0]
		})
	}



	// FUNCTION UPLOADS THE SELECTED FILE BY SENDING IT TO THE SPECIFIED ROUTE
	// USES AXIOS TO SEND THE POST REQ TO EXPRESS
	fileUploadHandler = async () => {
		// console.log('file upload working...');
		const formData = new FormData();
		formData.append('image', this.state.selectedFile, this.state.selectedFile.name);
		formData.append('name', this.state.name)
		formData.append('category', this.state.category)
		formData.append('price', this.state.price)
		formData.append('description', this.state.description)
		formData.append('quantity', this.state.quantity)
		formData.append('sellerEmail', this.props.globalState.email)
		await axios.post(process.env.REACT_APP_BACKEND_URL + '/api/v1/listing/new', formData, { withCredentials: true }, {
			onUploadProgress: progressEvent => {
				console.log('Upload Progress: ' + Math.round((progressEvent.loaded / progressEvent.total) * 100) + '%')
			}
		})
		.then(res => {
			console.log(res);
		})
		this.props.history.push('/account');
	}




	handleSubmit = (e) => {
		e.preventDefault()
		// console.log('hit submit button on the form');
		this.fileUploadHandler();
	}







	render(){
		console.log(this.state);
		console.log(this.props.globalState.email);
		return(
			<div>
				<form className="form" onSubmit={this.handleSubmit}>
					<h2>Create New Listing</h2>
					<input type="text" name="name" placeholder="listing title" onChange={this.handleChange} /> <br />
					<input type="text" name="price" placeholder="price" onChange={this.handleChange} /> <br />
					<input type="text" name="quantity" placeholder="quantity" onChange={this.handleChange} /> <br />
					<textarea id="inputBig" type="text" name="description" placeholder="description" onChange={this.handleChange} /> <br />
					<select name="category" placeholder="category" onChange={this.handleSelectChange}>
						<option value="apparel">Apparel</option>
						<option value="ceremony">Ceremony</option>
						<option value="partyfavors">Party favors</option>
						<option value="decorations">Decorations</option>
						<option value="reception">Reception</option>
						<option value="other">Other</option>
					</select> <br />
					<input style={{display: 'none'}} type="file" name="img" onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput} />
					<h3>{ this.state.uploadProgress }</h3>
					<button className="homeBtn" onClick={ 
						(e) => { 
							e.preventDefault()
							this.fileInput.click()
						} 
					}>Upload Image</button> <br /><br /><br /> 
					<button>Submit</button>
				</form>
			</div>
			)
	}
}





export default CreateListing;