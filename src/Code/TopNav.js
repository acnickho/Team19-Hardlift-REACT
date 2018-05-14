import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/hardlift.png';
import './topnav.css';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// The Header creates links that can be used to navigate
// between routes.
const TopNav = () => (
		<header classname = "topnav">
		<div className = "topnavcontainer">
			<div classname="logo">
				<Link to={"./HomePage"}>
				<img src={logo} className="HL-logo" alt="logo" Link to={"./HomePage"} />
				</Link>
			</div>
			<div className="topnav">
				<ul className="navlist">
					
					<li><Link to={"./HomePage"}><h4 >Home</h4></Link></li>
					<li><Link to={"./AboutPage"}><h4>About</h4></Link></li>
					<li><Link to={"./WorkoutPage"}><h4>Workouts</h4></Link></li>
					<li><Link to={"./BlogPage"}><h4>Blog</h4></Link></li>
					<li><Link to={"./ShopPage"}><h4>Shop</h4></Link></li>
					<li><Link to={"./ContactUs"}><h4>Contact Us</h4></Link></li>
					<li id="searchicon"><Icon name="huge search"/></li>
					<li id="shoppingicon"><Icon name="huge shopping cart icon"/></li>
					
				</ul>
			</div>
		</div>
			
		</header>
)

export default TopNav
