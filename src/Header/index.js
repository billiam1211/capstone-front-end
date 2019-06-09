import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';



const Header = () => {

  return (
    <header>
        <div className="container">
        	<div id="headerDiv">
                <Link to="/home"> <h4>Home</h4> </Link>
                <Link to="/index"> <h4>Listings</h4> </Link>
    	        <Link to="/account"> <h4>My Account</h4></Link>
    	        <Link to="/register"> <h4>Register</h4> </Link> 
                <Link to="/about"><h4>About</h4></Link>
            </div>
        </div>
    </header>
    )
}

export default Header;