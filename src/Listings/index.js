import React, { Component } from 'react';
import Collapsible from 'react-collapsible';



function Listings (props) {

	console.log(props, '<----<<<');



	// this function converts the buffer of the image to a string
	const arrayBufferToBase64 = (buffer) => {
		    let binary = '';
		    let bytes = [].slice.call(new Uint8Array(buffer));
		    bytes.forEach((b) => binary += String.fromCharCode(b));
		    return window.btoa(binary);
		}

	// stores the mapped out listings inot a variable to render below
	const listingLis = props.listings.map((listing, i) => {

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
							<li>
								<button data-listing-id={listing._id} onClick={props.editListing} >Edit Listing</button>
								<button data-listing-id={listing._id} onClick={props.deleteListing} >Delete Listing</button>
							</li>
						</ul>

					</li>
					<img src={`data:image/jpeg;base64,${data}`} /><br/>
				</div>
			)
	})
		return(
			<div>
				<div className="listingDiv">
					<ul>
						{ listingLis }
					</ul>
				</div>

			</div>
			)
}


export default Listings;