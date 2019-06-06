import React, { Component } from 'react';



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
	const listingLis = props.loggedUser.loggedUser.listings.map((listing, i) => {

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
								<button>Edit Listing</button>
								<button data-id={listing._id}>Delete Listing</button>
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
					<h3>Active Listings:</h3>
					<ul>
						{ listingLis }
					</ul>
				</div>

			</div>
			)
}


export default Listings;