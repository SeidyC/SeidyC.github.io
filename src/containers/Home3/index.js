import React from 'react'
import { Title, Subtitle, Div } from '../Home/styles'
import { Link } from 'react-router-dom'

const Home3 = () => (
  <Div>
   <center>
<img src = "http://www.freepngclipart.com/download/line/2245-line-to-use-resource-download-png.png"width="170" height="130" />
</center>

<Title primary>
  Extracurriculars
</Title>
<center>
<img src = "https://www.gblions.org/cms/lib/NY01913664/Centricity/Domain/198/Key-Club-Simplified-Big-1024x1018.png" width="120" height="120" />
</center>
<Title>
<Link to="/Key-Club.com">Key Club</Link>
</Title>
  <Subtitle>
    My position: Webmaster, Editor
  </Subtitle>
  <center>
  <p>
  In Key Club, the members make a positive impact as they serve and work with others in their schools and communities. 
  <div> They also learn leadership skills by running meetings, planning projects, and holding elected leadership positions at the club, district, and international levels. </div>
  </p>
  </center>
<center>
  <img src = "https://upload.wikimedia.org/wikipedia/commons/5/5f/GWC_Logo_2020_-_Teal.png" width="200" height="120"/>
</center>
<Title>
Gils who code
</Title>
<Subtitle>
    My position: Participent
  </Subtitle>
  <center>
  <p>
  Girls Who Code is a nonprofit organization which aims to support and increase the number of women in computer science
  <div>by equipping young women with the necessary computing skills to pursue 21st century opportunities. Girls Who Code is on a mission to close the gender </div> 
     gap in technology and to change the image of what a programmer looks like and does.
  </p>
  </center>

<center>
  <img src = "https://www.gcpsk12.org/cms/lib/GA02204486/Centricity/Domain/9834/studentCouncillogo.png" width="135" height="142"/>
</center>
<Title>
Student Council
</Title>
<Subtitle>
    My position: Freshman class President
  </Subtitle>
  <center>
  <p>
  The purpose of the student council is to give students an opportunity to develop leadership by organizing and carrying out school 
  <div> activities and service projects. They help share student ideas, interests and concerns with the school wide community. Student council truly gives you the </div>
    opportunity to foster skills like leadership, communication, teamwork, organization 
    <div>and public speaking -- all which are life skills.</div>
  </p>
  </center>

<center>
  <img src = "https://www.manhassetschools.org/cms/lib/NY01913789/Centricity/Domain/538/denounced-clipart-mock-trial-2.png" width="130" height="130"/>
</center>
<Title>
Mock Trial
</Title>
<Subtitle>
    My position: Participent
  </Subtitle>
  <center>
  <p>
  Students who participate in Mock Trial gain analytical skills from analyzing cases and facts, and learn how to compose effective   
  <div>arguments and respond to questions or disputes; these kinds of abilities are extremely useful in college-level writing and discussion in general. Mock Trial teaches </div>
    essential skills such as public speaking, critical thinking, and the art of forming a 
    <div>persuasive, cohesive argument. </div>
  </p>
  <div> ~ </div>
  <div>
        <Subtitle>
<Link to="/">Home Page</Link>
&nbsp;  &nbsp;
<Link to="/contact-info.com">Contact Information</Link>
        </Subtitle>     
    </div>
  <img src = 'https://i.pinimg.com/originals/b1/76/48/b17648506ef6069202e10475118c8ffc.png'width="700" height="200"/>
  </center>

    </Div>

)

export default Home3
