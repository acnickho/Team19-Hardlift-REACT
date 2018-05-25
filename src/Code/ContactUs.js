import React from 'react'
import './contactus.css';


const ContactUs = () => (
<div>

{/*Puts both the contact form and FAQ in a container*/}
	<div className="container">

{/* Contact form being left container*/}
		<div className="contactform">
		{/* Spacing above contact us*/}
		<p></p>
			<h2>Contact Us</h2>

		{/* Input for first name*/}
				<label for="fname">First Name</label>
					<br></br>
    		<input type="text" id="fname" name="firstname" placeholder="Your name..">
				</input>
					<br></br>

				{/* Input for last name*/}
				<label for="lname">Last Name</label>
					<br></br>
    		<input type="text" id="lname" name="lastname" placeholder="Your last name..">
				</input>
					<br></br>

				{/* Input for email add.*/}
				<label for="email">Email</label>
					<br></br>
    		<input type="text" id="email" name="email" placeholder="Your Email Address..">
				</input>
						<br></br>

				{/* Drop down list of subjects*/}
				<label for="subject">Subject</label>
						<br></br>
				<select id="subject" name="subject">
						<option value="generalenquiry">General Enquiry</option>
						<option value="nutrition">Nutrition</option>
						<option value="mediaenquiry">Media Enquiry</option>
				</select>
						<br></br>

				{/* Input for messages */}
				<label for="message">Message</label>
							<br></br>
				<textarea rows="4" cols="50" placeholder="Write your Message Here...">
				</textarea>
						<br></br>
			<input type="submit" value="Submit"></input>
			{/* Spacing after submit button*/}
			<br></br>
			<br></br>
		</div>

		{/* FAQ being right container */}
		<div className = "faq">
			<h2>Contact Details</h2>
			<h3><b> Chloe Martin </b></h3>
			<p><b> Ph:</b> 0499999999 </p>
			<p><b> Address:</b> 123 Hardlift Street, 3000, VIC </p>
			<p><b> Email:</b> email@server.com </p>
			<h2> Frequently Asked Questions</h2>
			{/* Questions */}
			<h3> Operating hours</h3>
			{/* Answers*/}
			<p> We are open from 9am to 9pm everyday</p>
			<h3> What do you specialise in?</h3>
			<p> We specialise in doing stuff</p>
			<h3> Some question</h3>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
				ullamcorper	enim, ut cursus orci semper a. Quisque sollicitudin tellus
				sit amet nisi rutrum, sit amet lacinia tortor fringilla. Mauris faucibus
				mi et gravida pretium. Aenean congue viverra est, consectetur tincidunt mi
				commodo et. Curabitur et massa sapien. Donec sit amet nibh interdum felis
				mattis tincidunt. Phasellus vitae lectus eu erat tincidunt ultrices. Mauris
				placerat sollicitudin metus, eu sagittis magna rhoncus in. Pellentesque efficitur
				ultricies augue.
			</p>
			<h3> Questions </h3>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
				sapien eros, Proin varius ullamcorper dolor in eleifend. Curabitur sagittis,
				tortor nec pulvinar volutpat in nisi at, finibus posuere metus. Nam venenatis
				congue tellus a bibendum. congue, ex turpis aliquet odio, vel porta dolor felis
				vitae sem. Nulla quis metus a tortor egestas semper. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Donec massa tellus, sollicitudin eu nunc ut, imperdiet
				congue turpis. Maecenas vulputate, nulla ac vestibulum blandit, sapien nisl
				ultricies nulla, ut suscipit libero enim et odio. Duis molestie lacus est. Nunc
				molestie cursus ex eget sollicitudin. Suspendisse vel eleifend lectus. Fusce posuere
				dapibus dui a convallis. Nullam tempus orci nec tortor aliquet, eleifend elementum elit
				hendrerit. Donec euismod purus felis.
			</p>
			<h3> Questions </h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet
				id sem non blandit. Pellentesque fermentum orci sodales leo sollicitudin
				sodales. Nam gravida quam metus, eu molestie odio luctus id. Donec magna
				odio, sagittis vel lacus sed, sagittis ultrices urna. Mauris sagittis
				accumsan purus, luctus laoreet mauris tincidunt sit amet. Maecenas at massa
				dignissim sapien vehicula egestas at sed dui. Fusce vitae maximus est.
			</p>
		</div>
	</div>
</div>
)


export default ContactUs
