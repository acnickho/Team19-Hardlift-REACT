import React from 'react'
import './blogpage.css';
import 'semantic-ui-css/semantic.min.css';
const BlogPage = () => (


    <div className="container">


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
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada molestie consectetur. Ut quis ante a mi consectetur pellentesque vel sed tortor. In hac habitasse platea dictumst. Quisque id sollicitudin neque. Curabitur sodales orci sapien, eleifend scelerisque dolor vehicula eget. Nunc et metus sed lacus sagittis pulvinar. Aliquam egestas metus vel arcu commodo commodo. Cras elementum justo id ultricies pretium.

             Maecenas lacinia fermentum ex, quis venenatis urna laoreet in. Praesent tincidunt, nisl quis euismod fringilla, massa magna pharetra dui, nec mattis ligula tortor a arcu. Integer porttitor tellus eget mattis vestibulum. Nullam non tortor sit amet lorem volutpat finibus et vitae sapien. Morbi sed ipsum at felis sodales mattis ac quis neque. Vivamus vitae quam in ipsum porta tincidunt ac et dolor. Quisque at aliquam sapien. Etiam volutpat commodo nulla, et consequat nulla suscipit volutpat.</p>
            </div>

        <div className="blog2">
            <h4>BLOG TITLE</h4>
            <ul className="bloglist">
                <li className="bloglist">POSTED BY USER</li> | <li className="bloglist">DATE</li> | <li className="bloglist">CATEGORY</li>
            </ul>
             <p>Maecenas id turpis sit amet ligula rutrum vulputate. Praesent sed metus ante. Vestibulum et congue eros. Maecenas aliquam felis aliquam mi euismod, ac tristique ante tincidunt. Suspendisse a nunc pharetra, aliquet elit vitae, mollis massa. Nunc semper volutpat feugiat. In vitae metus aliquam metus rutrum euismod vel at massa. Quisque eu nulla a leo accumsan fermentum ut interdum libero.

             Nunc tellus nulla, tempus in luctus facilisis, tempus quis massa. Suspendisse enim lorem, bibendum quis arcu at, feugiat mollis mauris. Mauris vel velit convallis, viverra quam consequat, consequat orci. Maecenas justo turpis, tempus sodales est eget, rutrum tincidunt leo. Etiam ac lacinia nibh. Mauris elementum quam justo, ut pharetra justo fermentum ac. Vivamus in tincidunt nunc. Nam quis vestibulum dolor, sit amet suscipit neque. Fusce sed efficitur purus, sit amet placerat odio. Curabitur feugiat tempor tincidunt. Nunc dignissim eu dui nec ullamcorper. Praesent aliquet ligula ac ullamcorper imperdiet. Pellentesque nec lobortis nunc, eu maximus orci.</p>
            </div>




        </div>
    </div>
)


export default BlogPage
