import React from 'react'
import { Title, Subtitle, Div } from './styles'
import { Link } from 'react-router-dom'

const Home = () => (
  <Div>
    <center>
    <img src = "http://www.freepngclipart.com/download/line/2245-line-to-use-resource-download-png.png"width="170" height="130" />
    </center>
    <Title primary>
      Seidy Castillo :D
    </Title>
    <Subtitle>
    Hello and Welcome to my resume webpage!
    </Subtitle>
   
    <Title>
    Introduction: 
  </Title>
    <center>
  <p>
  Highly focused and responsible upcoming high school sophomore who demonstrates strong work ethic and artistic creativity. 
  <div>Excellent time-management skills, resources, and flexibility. Outgoing and passionate, accustomed to working under pressure </div>
   and in fast-paced environments. Great communicator with a well-developed work ethic and excellent problem-solving skills. 
  <div>Special interests include code, robotics, literature and art.</div>
  </p>
  </center>

   
   <Title>About me: </Title>
   <center>
    <p>
    14 year old bilingual girl born in the Dominican Republic, raised in Passaic, New Jersey. My life is full of experiments and 
    <div> achievements. This all has truly taught me the importance of rising again and striking again. I continue to update myself to be </div> 
     the better version of myself. I value personal development and human ethics. One’s self is essentially linked to what one does
    <div> and practices in his life. Honesty, dedication, sincerity and humbleness are the virtues one learns during their childhood life </div>
     with family, friends and at their school. Therefore, I value honesty and strive hard to serve my community.
    </p> 
    </center>

    <Title>
    Education:
  </Title>
    <center>
  <p>
  School: Passaic Academy for Science and Engineering (3rd year) 
  <div>GPA: 4.5 (W) Class Rank: 1 of 200</div>
  <div>Completed Honors Course: English H/Research II, Chemistry with Lab H, Geometry Honors</div> 
  <div>Completed AP Courses: AP United States History I DE</div>
  Elective Courses: Computer Science Essentials, PLTW

  </p>
<div> ~ </div>
  <Subtitle>
    <Link to="/contact-info.com">Contact Information</Link>
    &nbsp;  &nbsp;
    <Link to="/Extracurriculars.com">Extracurriculars</Link>
    </Subtitle>

  </center>
    {/* <img src = 'https://lh3.googleusercontent.com/proxy/akJZDVORzpiVwFTyKXG6WsGtHJ8GdX_bPbpFXoEUJMRaOuEe0bPNusLQ55jhPdEBRXcbtaRXUJHG-511hMiU48mRU1cBX6TqLQUn61snkeqoGQw-MOrLmg'/> */}
    {/* <img src = 'https://i.pinimg.com/originals/b1/76/48/b17648506ef6069202e10475118c8ffc.png'/> */}
    <center>
     {/* <img src = "https://www.pngimages.pics/images/quotes/english/general/transparent-page-break-art-cartoon-52650-263996.png" width="300" height="200"/> */}
     <img src = 'https://i.pinimg.com/originals/b1/76/48/b17648506ef6069202e10475118c8ffc.png'width="650" height="200"/>

    </center>

  </Div>
)

export default Home
