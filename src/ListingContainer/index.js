import React, { Component } from 'react';
import axios from 'axios';


class ListingContainer extends Component {
	constructor(){
		super()
		this.state = {
			selectedFile: null,
			name: '',
			category: '',
			price: '',
			quantity: '',
			description: ''
		}
	}


	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSelectChange = (e) => {
		this.setState({category: e.target.value});
		console.log(this.state);
	}

	// this function selects a file that the user specifies using the form
	fileSelectedHandler = (event) => {
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
		formData.append('name', this.state.name)
		formData.append('category', this.state.category)
		formData.append('price', this.state.price)
		formData.append('description', this.state.description)
		formData.append('quantity', this.state.quantity)
		console.log(formData);
		await axios.post('http://localhost:9000/api/v1/listing/new', formData, { withCredentials: true }, {
			onUploadProgress: progressEvent => {
				console.log('Upload Progress: ' + Math.round((progressEvent.loaded / progressEvent.total) * 100) + '%');
			}
		})
		.then(res => {
			console.log(res);
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log('hit submit button on the form');
		//line below causes everything to crash...
		this.fileUploadHandler();

	}








	render(){
		console.log(this.state);
		return(
			<div>
				<h1>LISTING CONTAINER</h1>

				<form onSubmit={this.handleSubmit}>
					<input type="text" name="name" placeholder="listing title" onChange={this.handleChange} />
					<input type="text" name="price" placeholder="price" onChange={this.handleChange} />
					<input type="text" name="quantity" placeholder="quantity" onChange={this.handleChange} />
					<input type="textarea" name="description" placeholder="description" onChange={this.handleChange} />
					<select name="category" placeholder="category" onChange={this.handleSelectChange}>
						<option value="apparel">Apparel</option>
						<option value="ceremony">Ceremony</option>
						<option value="partyfavors">Party favors</option>
						<option value="decorations">Decorations</option>
						<option value="reception">Reception</option>
						<option value="other">Other</option>
					</select>

					<p>Please upload an image</p>
					
					<input style={{display: 'none'}} type="file" name="img" onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput} />
					<button onClick={ 
						(e) => { 
							e.preventDefault()
							this.fileInput.click()
						} 
					}>Select File</button>
					<button>Submit</button>
				</form>
			</div>
			)
	}
}


export default ListingContainer;