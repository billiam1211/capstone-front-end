import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {

  return (
    <header>
        <div className="container">
        	<div id="headerDiv">
                <Link to="/home"> <h5>Home</h5> </Link>
                <Link to="/index"> <h5>Listings</h5> </Link>
    	        <Link to="/account"> <h5>My Account</h5></Link>
    	        <Link to="/register"> <h5>Register</h5> </Link> 
                <Link to="/about"><h5>About</h5></Link>
            </div>
        </div>
    </header>
    )
}

export default Header;