import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Footer = () => (
    <div id="footer">

    
<ul class="col1">
    <h4>STAY CONNECTED</h4>
    <li>Image 1</li>
     <li>Image 2</li>
    <li>Image 3</li>
    </ul>
    
<ul class="col2">
    <li>ABOUT</li>
    <li>WORKOUT</li>
    <li>BLOG</li>
    </ul>


<ul class="col3">
    <li>SHOP</li>
    <li>CONTACT US</li>
    <li>LOGIN/SIGNUP</li>
    </ul>

<ul class="col4">
    <h4>JOIN OUR NEWSLETTER</h4>
    <li><input type="text" placeholder="example@exmaple.com"/></li>
    <li><input type="submit" value="SUBSCRIBE NOW"/></li>
</ul>
    </div>
)

export default Footer