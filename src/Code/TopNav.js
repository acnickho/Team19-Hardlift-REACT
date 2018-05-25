import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/hardlift.png';
import './topnav.css';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// The Header creates links that can be used to navigate
// between routes.
const TopNav = () => (
		<header classname = "topnav">
		<div className = "topnavcontainer">
			<div classname="logo">
				<img src={logo} className="HL-logo" alt="logo" Link to={"./HomePage"} />
			</div>
			<div className="topnav">
				<ul className="navlist">

					<li><Link to={"./HomePage"}>Home</Link></li>
					<li><Link to={"./AboutPage"}>About</Link></li>
					<li><Link to={"./WorkoutPage"}>Workouts</Link></li>
					<li><Link to={"./BlogPage"}>Blog</Link></li>
					<li><Link to={"./ShopPage"}>Shop</Link></li>
					<li><Link to={"./ContactUs"}>Contact Us</Link></li>
					<li id="searchicon"><Icon name="small search"/></li>
					<li id="shoppingicon"><Icon name="small shopping cart icon"/></li>

				</ul>
			</div>
		</div>

		</header>
)

export default TopNav
