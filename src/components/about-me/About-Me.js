import React from 'react';
import author from "../../img/mypic.jpg";
import './aboutme.css';

const AboutMe = () => {
    return (
      <div id="Aboutme" className="container-fluid py-5">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img className="profile-img" src={author} alt="author..." />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">About Me:</h1>
            <p>
              Hello! I am Joseph Caldwell. I have been developing websites for over 2 years and mobile apps for close to 2 years. I'm Full-Stack Web Developer. I graduated Persevere's Code Camp. I have certifications in "Responsive Web Design", "APIs and MicroServices", "Data Visulazation", "Front End Libraries", "Information Services and Quality Assurance", "JavaScript Algorithms and Data Structures", a Linkedin certificate of completion in "Learning the JavaScript Language", "The Emitter particle course for Blender 2.8 and above", "The 2021 Blender Primer: 3D Modeling, Animation & Rendering" and a certificate for 20 hours of peer mentoring from when I worked at Banyan Labs Inc. band mentored a fellow peer. I have also received a certificate for "Using Google Maps Api in React Native for IOS & Android" from Udemy'
                </p><p>
              I create responsive websites that are displayed on all devices desktops and smartphones. I also build fully functional and responsive mobile apps. Before I begin building any app or webpage, I thoroughly discuss the details with my client and then make a mock working prototype, usually using Figma, Adobe XD, or Adobe Photoshop, and demonstrate it to the client to ensure that it it what the client is seeking. It is much easier and cheaper to make as few changes as possible oncee the code is written.
              </p><p>
              I will also break the project down into weekly sprints and have weekly meetings with my client to report  progress and demonstrate already built UI's and functionality. If I am doing a business site or ecommnerce site, I will thoroughly research my client's competition and use search engine optimization, so I can greatly improve my clients traffic to the site.
              </p><p>
              Payment for services can be broken down into hourly, weekly, bi-weekly, or even monthly intervals. I am an excellent developer with unlimited potential and also take extreme pride in any project I am involved with. 
   
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default AboutMe;