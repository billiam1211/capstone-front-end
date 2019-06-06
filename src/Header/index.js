import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';



const Header = () => {

  return (
    <header>
    	<div id="headerDiv">
            <Link to="/home"> <h3>Home</h3> </Link>
	        <Link to="/login"> <h3>Login</h3></Link>
	        <Link to="/register"> <h3>Register</h3> </Link> 
        </div>
    </header>
    )
}

export default Header;