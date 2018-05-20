import React from 'react'
import profilepic from '../images/profilepic.jpg';

const AboutPage = () => (
  <div>
    <h1>Welcome to the About Me Page!</h1>
    <table>
      <tr>
        <td className = "profilepic">
          <img src={profilepic} className="profilepic" alt="profilepic" style={{width: '250px', height: '250px'}}></img>
        </td>
        <td>My Name is Chloe Martin; I am the owner and creator of Hard Lift. I have had a love for the
fitness industry for 3 years now and have my Certificate 3 and 4 in Fitness. I decided to turn my
love for fitness and helping people into a career to encourage women in particular become the
best version of themselves. Self-empowerment is the greatest thing you can do for someone I
believe and that’s why I am here to help people reach that goal. My core values include
respectfulness, kindness, honesty, compassion and thoughtfulness.
My vision is to create a community of women who are empowered and strong, working on
becoming the best versions of themselves.
I offer individual and small group personal training. I believe in the power of strength training,
mindfulness and community to create positivity and personal growth. Having experienced self-
esteem issues I can relate well with those who are feeling stuck and don&#39;t know where to start.
I specialize in weight loss, muscle building, body sculpting, mindset training, and functional
training.</td>
      </tr>
    </table>
  </div>
)

export default AboutPage
