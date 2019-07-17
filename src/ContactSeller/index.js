import React, { Component } from 'react';

class ContactSeller extends Component {
	constructor(props){
		super()
		this.state = {
			listingThatBuyerWants: [],
			subject: '',
			msg: '',
			name: '', 
			email: '',
			message: '',
		}
	}



	handleChange = (e) => {
	this.setState({[e.target.name]: e.target.value});
	}



	sendMsg = (e) => {
		e.preventDefault()
	}


	render(){
		console.log(this.state);
		return(

			<div>
				<div>
				    <a href="mailto:bbakopoulos@gmail.com?subject=Wedding Exchange Listing">
				        <h3>Email Seller</h3>
						</a>
				</div>

				<form onSubmit={this.sendMsg} className="message">
					<input type="text" name="subject" placeholder="subject" onChange={this.handleChange} />
					<textarea id="inputBig" type="textarea" wrap="soft" name="msg" placeholder="please enter a message to send to the seller" onChange={this.handleChange} />
					<button type="submit">Send</button>
				</form>
			</div>
			)
	}
}





export default ContactSeller;