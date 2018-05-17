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


    <li><Link to={"./AboutPage"}><b>ABOUT</b></Link></li>
    <li><Link to={"./WorkoutPage"}><b>WORKOUT</b></Link></li>
    <li><Link to={"./BlogPage"}><b>BLOG</b></Link></li>
    </ul>


<ul className="col3">


    <li><Link to={"./ShopPage"}><b>SHOP</b></Link></li>
    <li><Link to={"./ContactUs"}><b>CONTACT US</b></Link></li>

    </ul>

<ul className="col4">

    <h5>JOIN OUR NEWSLETTER</h5>
    <form className="ui form">
		<div className="field">
      	<input type="text" name="email" placeholder="example@example.com" size="39"/>

    </div>
	<button className="ui mini button">Submit</button>

	</form>
</ul>
    	</div>
	</div>
)

export default Footer
