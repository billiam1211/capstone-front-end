import React from 'react';


function ListingShow (props) {
		// console.log(props.state.listingToShow);
		
const arrayBufferToBase64 = (buffer) => {
		    let binary = '';
		    let bytes = [].slice.call(new Uint8Array(buffer));
		    bytes.forEach((b) => binary += String.fromCharCode(b));
		    return window.btoa(binary);
		}
	
		// this calls the function above and converts the buffer to a string 
		// for each listing so we can render the image 
		const data = arrayBufferToBase64(props.state.listingToShow.img.data.data)

		return(
				<div className="listingContainer">
					<li>
						<ul className="listingUl">
							<li>
								<strong>Title:</strong> {props.state.listingToShow.name}
							</li>
							<li>
								<strong>Category:</strong> {props.state.listingToShow.category}
							</li>
							<li>
								<strong>Price:</strong> {props.state.listingToShow.price}
							</li>
							<li>
								<strong>Quantity:</strong> {props.state.listingToShow.quantity}
							</li>
							<li>
								<strong>Description:</strong> {props.state.listingToShow.description}
							</li>

							<button onClick={ props.back }>Back to Index</button>
							<button onClick={ props.contactSeller }>Contact Seller</button>

						</ul>
					</li>
					<img alt="listing images" src={`data:image/jpeg;base64,${data}`} /><br/>
				</div>
			)


}





export default ListingShow;