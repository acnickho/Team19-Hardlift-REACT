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
					<br></br>
    		<input type="text" id="fname" name="firstname" placeholder="Your name..">
				</input>
					<br></br>

				<label for="lname">Last Name</label>
					<br></br>
    		<input type="text" id="lname" name="lastname" placeholder="Your last name..">
				</input>
					<br></br>

				<label for="email">Email</label>
					<br></br>
    		<input type="text" id="email" name="email" placeholder="Your Email Address..">
				</input>
						<br></br>

				<label for="subject">Subject</label>
						<br></br>
				<select id="subject" name="subject">
						<option value="generalenquiry">General Enquiry</option>
						<option value="nutrition">Nutrition</option>
						<option value="mediaenquiry">Media Enquiry</option>
				</select>
						<br></br>

				<label for="message">Message</label>
							<br></br>
				<textarea rows="4" cols="50" placeholder="Write your Message Here...">
				</textarea>
						<br></br>
			<input type="submit" value="Submit"></input>

				</div>
		</div>
	</div>
</div>
)


export default ContactUs
