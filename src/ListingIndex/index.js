import React, { Component } from 'react';




class ListingIndex extends Component {
	constructor(){
		super()
		this.state = {
			listings: []
		}
	}



	componentDidMount(){
		this.getListingIndex()
	}



	getListingIndex = async (e) => {
		
		const listings = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/listing/index', {
				method: 'GET', 
				credentials: 'include',
				headers: {
				  'Content-Type': 'application/json'
				}
		})

		const parsedResponse = await listings.json();
		console.log(parsedResponse.data);
		this.setState({
			listings: parsedResponse.data
		})
	}



	render(){

	const arrayBufferToBase64 = (buffer) => {
		    let binary = '';
		    let bytes = [].slice.call(new Uint8Array(buffer));
		    bytes.forEach((b) => binary += String.fromCharCode(b));
		    return window.btoa(binary);
		}

	// stores the mapped out listings inot a variable to render below
	const listingLis = this.state.listings.map((listing, i) => {

		// this calls the function above and converts the buffer to a string 
		// for each listing so we can render the image 
		const data = arrayBufferToBase64(listing.img.data.data)


		return(




				<div key={i} className="listingContainer">
					<li>
						<ul className="listingUl">
							<li>
								<strong>Title:</strong> {listing.name}
							</li>
							<li>
								<strong>Category:</strong> {listing.category}
							</li>
							<li>
								<strong>Price:</strong> {listing.price}
							</li>
							<li>
								<strong>Quantity:</strong> {listing.quantity}
							</li>
							<li>
								<strong>Description:</strong> {listing.description}
							</li>

						</ul>

					</li>
					<img src={`data:image/jpeg;base64,${data}`} /><br/>
				</div>
			)
	})
		return(
			<div>


				<select name="category" placeholder="category">
					<option value="apparel">Apparel</option>
					<option value="ceremony">Ceremony</option>
					<option value="partyfavors">Party favors</option>
					<option value="decorations">Decorations</option>
					<option value="reception">Reception</option>
					<option value="other">Other</option>
				</select> 



				<div className="listingDiv">
					<ul>
						{ listingLis }
					</ul>
				</div>

			</div>
			)





	}
}


export default ListingIndex;