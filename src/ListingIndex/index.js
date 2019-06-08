import React, { Component } from 'react';
import ListingShow from '../ListingShow';
import Guest from '../Guest';



class ListingIndex extends Component {
	constructor(props){
		super()
		this.state = {
			listings: [],
			listingToShow: [],
			indexOfListingToShow: -1,
			loggedIn: props.globalState.loggedIn
		}
	}



	componentDidMount(){
		this.getListingIndex()
	}



	showListing = (e) => {
		// CAPTURES THE INDEX VALUE OF THE LISTING IN THE LISTING ARRAY
		console.log(e.currentTarget.dataset.listingid);
		this.setState({
			indexOfListingToShow: e.currentTarget.dataset.listingid,
			listingToShow: this.state.listings[e.currentTarget.dataset.listingid]
		})
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



	back = (e) => {
		this.setState({
			listingToShow: [],
			indexOfListingToShow: -1
		})
		this.props.history.push('/index')
	}



	render(){
		// console.log(this.state);
		if(this.state.loggedIn == false){
		 			return(
		 				<div>
		 					<Guest />
						</div>
		 				)
		 		} else {
		 			if(this.state.indexOfListingToShow != -1){
						return(
							<ListingShow state={this.state} back={this.back} />
							)

		 			} else{
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
									<div key={i} data-listingId={i} className="listingContainer" onClick={this.showListing}>
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
	}
}


export default ListingIndex;