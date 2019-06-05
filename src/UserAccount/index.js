import React, { Component } from 'react';



function UserAccount (props) {

	console.log(props.loggedUser, '<----<<<');
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
			<div>
				<div key={i} className="listings">
					<li>
						<ul className="listingUl">
							<br />
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
			</div>
			)
	})
		return(
			<div className="form">
				<div >
					<h1>Account Overview</h1>
						<h3>Email: { props.loggedUser.loggedUser.email } </h3><br />
						<h3>UserId: { props.loggedUser.loggedUser.userId }</h3><br />
						<h3>Listings: </h3><br />
						<button>Edit Account</button><br />
	        			<button>Delete</button><br />
	        			<button>Log Out</button><br />
				</div>

				<div>
					<h3>Active Listings:</h3>
					<ul>
						{ listingLis }
					</ul>
				</div>

			</div>
			)
}


export default UserAccount;