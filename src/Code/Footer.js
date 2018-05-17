import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css';
import 'semantic-ui-css/semantic.min.css';

const Footer = () => (
    <div id="footercontainer">
	<div id="footer" className="center-div">


<ul className="col1">
    <h4>STAY CONNECTED</h4>
	<table><tr>
		<td>
			<button className="ui circular facebook icon button">
				<i className="facebook icon"></i>
			</button>
		</td>
		<td>
			<button className="ui circular youtube icon button">
				<i className="youtube icon"></i>
			</button>
		</td>
		<td>
			<button className="ui circular twitter icon button">
				<i className="twitter icon"></i>
			</button>
		</td>
	</tr></table>
</ul>

<ul className="col2">
    <li><Link to={"./AboutPage"}>ABOUT</Link></li>
    <li><Link to={"./WorkoutPage"}>WORKOUT</Link></li>
    <li><Link to={"./BlogPage"}>BLOG</Link></li>
    </ul>


<ul className="col3">
    <li><Link to={"./ShopPage"}>SHOP</Link></li>
    <li><Link to={"./ContactUs"}>CONTACT US</Link></li>
    <li>LOGIN/SIGNUP</li>
    </ul>

<ul className="col4">
    <h4>JOIN OUR NEWSLETTER</h4>
    <form className="ui form">
		<div className="field">
			<label>Email Address</label>
			<input type="text" name="email" placeholder="example@example.com"/>
		</div>
		<button className="ui mini button">Submit</button>
	</form>
</ul>
    	</div>
	</div>
)

export default Footer
