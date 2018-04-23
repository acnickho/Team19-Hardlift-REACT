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
			<div classname="logo">
				<img src={logo} className="HL-logo" alt="logo"/>
			</div>
			<div className="navlinks">
				<table><tr>
					<td><Link to={"./AboutPage"}>About</Link></td>
					<td><Link to={"./WorkoutPage"}>Workouts</Link></td>
					<td><Link to={"./BlogPage"}>Blog</Link></td>
					<td><Link to={"./ShopPage"}>Shop</Link></td>
					<td><Link to={"./ContactUs"}>Contact Us</Link></td>
					<td><Icon name="huge search"/></td>
					<td><Icon name="huge shopping cart icon"/></td>
					
				</tr></table>
			</div>
		</header>
)

export default TopNav
