import React from 'react'
import profilepic from '../images/profilepic.jpg';
import gym from '../images/profilepic.jpg';
import stark from '../images/profilepic.jpg'
import thor from '../images/profilepic.jpg'
import cap from '../images/profilepic.jpg'

import './AboutPage.css'


const AboutPage = () => (
<div>
{/*contains the code for the text in the about me section, calls the .aboutText class in the css file*/}
	<div className="container">
		<div className="aboutText">
			<h1 className = 'h1'>About Us</h1>
				<p>My Name is Chloe Martin; I am the owner and creator of Hard Lift. I have had a love for the fitness industry for 3 years now and have my Certificate 3 and 4 in Fitness. I decided to turn my love for fitness and helping people into a career to encourage women in particular become the best version of themselves. Self-empowerment is the greatest thing you can do for someone I believe and that’s why I am here to help people reach that goal. My core values include respectfulness, kindness, honesty, compassion and thoughtfulness.</p><br>

			</br><p>My vision is to create a community of women who are empowered and strong, working on becoming the best versions of themselves.</p><br>

		</br><p>I offer individual and small group personal training. I believe in the power of strength training, mindfulness and community to create positivity and personal growth. Having experienced self-esteem issues I can relate well with those who are feeling stuck and don't know where to start. </p><br>

	</br><p>I specialize in weight loss, muscle building, body sculpting, mindset training, and functional training.</p>
		</div>

 { /*		<div className = "aboutImageRight">
			<img src={gym} className="gym" alt="gym" style={{width: '800', height: '650'}}></img>
		</div>
 */ }
	</div>

	<h2 className = "h2">meet the team</h2>

	<div className="MeetTeam">
		<table><tr>
			<td>
				<div className = "card">
				<img src={stark} className="stark" alt="stark" style={{width: '300', height: '300'}}></img>
				<div className = "cardimage">
					<h4>Tony Stark</h4>
					<p className = "title"> Member of avengers, Billionaire</p>
					<p>the marvel version of batman , if we're honest </p>
						<p><button className="button">Contact</button></p>
						</div>
					</div>
			</td>


			<td>
				<div className = "card">
				<img src={thor} className="thor" alt="thor" style={{width: '300', height: '300'}}></img>
					<div className = "cardimage">
						<h4>Steve Rogers</h4>
						<p className = "title"> Member of avengers</p>
						<p> Leader of the avengers , carris a shield , a heavy one. Is really old </p>
							<p><button className="button">Contact</button></p>
							</div>
						</div>
			</td>
			<td>
				<div className= "card">
				<img src={cap} className="cap" alt="cap" style={{width: '300', height: '300'}}></img>
					<div className = "cardimage">
						<h4>Thor</h4>
						<p className = "title"> Member of avengers, god of thunder</p>
						<p> IS A GOD , also carries a hammer so maybe a good handyman</p>
							<p><button className="button">Contact</button></p>
							</div>
						</div>
			</td>
		</tr></table>
	</div>
</div>
)

export default AboutPage
