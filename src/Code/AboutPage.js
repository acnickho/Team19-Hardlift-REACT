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
        <td> Description of self e.g. name, experience, other stuff </td>
      </tr>
    </table>
  </div>
)

export default AboutPage
