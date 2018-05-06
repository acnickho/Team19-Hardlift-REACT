import React from 'react'
import { Link } from 'react-router-dom'
import './blogpage.css';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const BlogPage = () => (
  <div className="container">
    
    <h1>Blog</h1>
    <div className="sidebar">
  
        <h2>Categories</h2>
        <ul className="sidecol">
            <li>Clothing</li>
            <li>Coaching</li>
            <li>Fitness</li>
            <li>Life Style</li>
            <li>General</li>
            <li>Nutrition</li>
            <li>Workout</li> 
        </ul>
            </div>
        
    <div className="blogcontainer">
     <div className="blog1">
        <h4>BLOG TITLE</h4>
         <ul className="bloglist">
             <li className="bloglist">POSTED BY USER</li> | <li className="bloglist">DATE</li> | <li className="bloglist">CATEGORY</li>
         </ul>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu egestas mi. Nulla facilisi. Ut suscipit ante ac felis posuere, at tempus leo fermentum. In hac habitasse platea dictumst. Vivamus pharetra turpis enim, laoreet suscipit ipsum efficitur quis. Mauris a condimentum dolor. Praesent vehicula varius quam. Ut orci arcu, gravida ornare scelerisque in, consectetur nec nunc. Praesent egestas vehicula quam euismod pretium. Curabitur mollis felis efficitur enim commodo dignissim. Ut vulputate rhoncus sapien, sit amet molestie sem ultrices sit amet. In id suscipit augue.

         Phasellus pretium hendrerit mi, sed tristique nulla auctor vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur efficitur augue vestibulum tempus finibus. Nulla aliquam tincidunt aliquam. Suspendisse consequat odio purus, vitae fringilla velit eleifend et. Duis vitae porta est. Nam vel tempor augue. Sed porta, nisi a porttitor faucibus, ex arcu congue est, quis lobortis quam sem a nisi. Duis nec iaculis lectus. Duis blandit ante id laoreet mollis. Donec pulvinar, massa mollis sollicitudin faucibus, ex magna feugiat quam, laoreet sagittis arcu mauris bibendum orci.</p>
         
        </div>    
        <div className="blog2">
        <h4>BLOG TITLE</h4>
         <ul className="bloglist">
             <li className="bloglist">POSTED BY USER</li> | <li className="bloglist">DATE</li> | <li className="bloglist">CATEGORY</li>
         </ul>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu egestas mi. Nulla facilisi. Ut suscipit ante ac felis posuere, at tempus leo fermentum. In hac habitasse platea dictumst. Vivamus pharetra turpis enim, laoreet suscipit ipsum efficitur quis. Mauris a condimentum dolor. Praesent vehicula varius quam. Ut orci arcu, gravida ornare scelerisque in, consectetur nec nunc. Praesent egestas vehicula quam euismod pretium. Curabitur mollis felis efficitur enim commodo dignissim. Ut vulputate rhoncus sapien, sit amet molestie sem ultrices sit amet. In id suscipit augue.

         Phasellus pretium hendrerit mi, sed tristique nulla auctor vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur efficitur augue vestibulum tempus finibus. Nulla aliquam tincidunt aliquam. Suspendisse consequat odio purus, vitae fringilla velit eleifend et. Duis vitae porta est. Nam vel tempor augue. Sed porta, nisi a porttitor faucibus, ex arcu congue est, quis lobortis quam sem a nisi. Duis nec iaculis lectus. Duis blandit ante id laoreet mollis. Donec pulvinar, massa mollis sollicitudin faucibus, ex magna feugiat quam, laoreet sagittis arcu mauris bibendum orci.</p>
         
        </div>    
    </div>    
  </div>
)


export default BlogPage
