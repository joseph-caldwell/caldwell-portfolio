import React from "react";
import './experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2019</h3>
            <p>Attended the Persevere Code Camp in Memphis, TN. Part of it was on line, but we also had a couple of instructors. Got personal one on one time with instrucors on a daily basis.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2019</h3>
            <p>Earned certifications in Responsive Web Design, JavaScript Algorithms and Data Structures, and Front End Libraries. Finished, submitted, and passed all required projects for Front End Developer. Earned certifications in APIs and MicroServices, Data Visulazation, and Information Services and Quality Assurance.  Finished, submitted, and passed all required projects for Back End Developer. </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2020</h3>
            <p>Worked for Banyan Labs on the Web Development Team. Also learned to use Blender for animation Project we were working on. Got certification in Blender:  3D Modeling, Animation & Rendering and The Emitter particle course for Blender 2.8 and above. Help build the Banyan Website at https://banyanlabs.io/, among other projects.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>While still working at Banyan Labs, got moved to the Mobile App Team and started developing apps with react-native. Earned certification in The Complete React-Native course 2021 edition and Using Google Maps Api in React Native for IOS & Android. Worked on ToDo App that comes out shortly, MyElevation App, along with other projects.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience;
