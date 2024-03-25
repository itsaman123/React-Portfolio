import React from 'react'
import './about.css'
import myImage from '../../assets/my-image3.png'
import { GiGraduateCap } from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <GiGraduateCap className='about__icon' />
              <h5>Degree</h5>
              <small> Computer Science and Engineering <br /><i>NIET, Greater Noida
              </i></small>
            </article>

            {/* <article className='about__card'>
              <BsBookmarkStar className='about__icon' />
              <h5>Current GPA</h5>
              <small>3.13</small>
            </article> */}

            {/* <article className='about__card'>
              <TfiWorld className='about__icon' />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Net Centric</li>
                  <li>Mobile Applications</li>
                </ul>
              </small>
            </article> */}



          </div>
          <p>
          Hello! I'm Aman Maurya, a final year Computer Science and Engineering student at NIET, Greater Noida.
          I am currently working as a SDE Intren at Prutor.ai. I have a strong foundation in computer science and engineering concepts and have developed a passion for software development. I am proficient in front-end and back-end technologies and have experience working with Node.js, Express.js, React, and MongoDB. I have experience in React.js as I have worked as a SDE Intern at Fastfindfirm.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About