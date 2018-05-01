import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './contactus.css';


const ContactUs = () => (
<div>
	<h1>Contact Us</h1>
	<div className="container">
	
		<div className="one">
			<div>
			List_of_ contact number, opening hour,
			email and stuff
			</div>
		</div>
		<div className="two">	
			This is a form
			<div className="name">
			Name/Email
			</div>
			
			<div className="question">
			Dropdown list questions
			</div>		
			
			<div className="phone">
			Phone number?
			</div>

			<div className="details">
			Details_of_ questions?
			</div>		
		</div>
	</div>
</div>
)


export default ContactUs
