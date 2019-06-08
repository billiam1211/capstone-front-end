import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';



const Header = () => {

  return (
    <header>
    	<div id="headerDiv">
            <Link to="/home"> <h3>Home</h3> </Link>
            <Link to="/index"> <h3>Listings</h3> </Link>
	        <Link to="/account"> <h3>My Account</h3></Link>
	        <Link to="/register"> <h3>Register</h3> </Link> 

        </div>
    </header>
    )
}

export default Header;