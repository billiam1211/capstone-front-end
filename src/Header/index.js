import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {

  return (
    <header>
        <div className="container">
        	<div id="headerDiv">
                <Link to="/home"> <h6>Home</h6> </Link>
                <Link to="/index"> <h6>Listings</h6> </Link>
    	        <Link to="/account"> <h6>My Account</h6></Link>
    	        <Link to="/register"> <h6>Register</h6> </Link> 
                <Link to="/about"><h6>About</h6></Link>
            </div>
        </div>
    </header>
    )
}

export default Header;