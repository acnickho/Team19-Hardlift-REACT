import React from 'react'
import './homepage.css';
import nike from '../images/nike.png';

const HomePage = () => (
<div>
    <h1 className="h1">Hard Lift</h1>
	<div className="slideshow">
		<img src={nike} className="nike" alt="nike"/>
	</div>


	<div className ="middlecontainer">
		<div className="feeddiv">
			<h3 className="feed">Live social/Media feed</h3>
			<p>Lorem Ipsum</p>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
			<p>#It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
		</div>
		
		<div className="blogdiv">
			<h3 className="blog">Latest News/Blogs</h3>
			<p>Lorem Ipsum</p>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
		</div>
	</div>
	<h2 className="midh2"> What my Clients say</h2>
	<div className="botdiv1">
		<h3>Testimonial from client</h3>
		<p>Training with Hard Lift for me was that it's definitely worth getting a professional opinion and help with how to use equipment at the gym and also being pushed to do things you wouldn't do by yourself. From this training I am more confident at the gym and have learnt workouts that I can do by myself. My greatest take away is confidence and a great leg work out! If you're feeling on the fence I recommend do it! Start today and see the results sooner.</p>
		<p>Kate Byrne</p>
	</div>	
	
	<div className="botdiv1">
		<h3>Testimonial from client</h3>
		<p>I enjoyed training with Chloe. She made it fun and interesting, explaining to me why we were doing each exercise as we went. I would highly recommend training with Chloe as she encourages me to push myself harder than I would have done on my own. I would also tell them if they are feeling anxious to start exercising (particularly in a busy gym) not to let that stop them as Chloe made me feel comfortable at all times. Chloe taught me a lot of exercises that I can now incorporate into my own training. To someone who is on the fence about getting started I would tell them to stop procrastinating! It is always easier to train with someone’s help.</p>
		<p>Jess Keeble</p>
	</div>

	<div className="botdiv1">
		<h3>Testimonial from client</h3>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
		<p>Client name</p>
	</div>
</div>
  
)

export default HomePage
