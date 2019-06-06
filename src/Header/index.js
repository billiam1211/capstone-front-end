import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';



const Header = () => {

  return (
    <header>
    	<div id="headerDiv">
            <Link to="/home"> <h2>Home</h2> </Link>
	        <Link to="/login"> <h2>Login</h2></Link>
	        <Link to="/register"> <h2>Register</h2> </Link> 
        </div>
    </header>
    )
}

export default Header;