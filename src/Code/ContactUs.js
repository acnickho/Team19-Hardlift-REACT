import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './contactus.css';


const ContactUs = () => (
<div>
	<h1>Contact Us</h1>

	<div className="container">

		<div className="two">
			<h3>Contact Us</h3>

			<div className="container">
				<label for="fname">First Name</label>
    		<input type="text" id="fname" name="firstname" placeholder="Your name..">
				</input>

			<label for="lname">Last Name</label>
    	<input type="text" id="lname" name="lastname" placeholder="Your last name..">
			</input>

			<label for="email">Email</label>
    		<input type="text" id="email" name="email" placeholder="Your Email Address..">
				</input>
			</div>

						<label for="subject">Subject</label>
			<select id="subject" name="subject">
						<option value="generalenquiry">General Enquiry</option>
						<option value="nutrition">Nutrition</option>
						<option value="mediaenquiry">Media Enquiry</option>
			</select>

							<label for="message">Message</label>
				<textarea rows="4" cols="50" placeholder="Write your Message Here...">
				</textarea>

			<input type="submit" value="Submit"></input>

					</div>
	</div>
</div>
)


export default ContactUs
