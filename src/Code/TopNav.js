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
			<div className="topnav">
				<table><tr>
					<td><Link to={"./AboutPage"}><h4>About</h4></Link></td>
					<td><Link to={"./WorkoutPage"}><h4>Workouts</h4></Link></td>
					<td><Link to={"./BlogPage"}><h4>Blog</h4></Link></td>
					<td><Link to={"./ShopPage"}><h4>Shop</h4></Link></td>
					<td><Link to={"./ContactUs"}><h4>Contact Us</h4></Link></td>
					<td><Link to={"./ContactUs"}><h4>Contact Us</h4></Link></td>
					<td><Icon name="huge search"/></td>
					<td><Icon name="huge shopping cart icon"/></td>

				</tr></table>
			</div>
		</header>
)

export default TopNav
