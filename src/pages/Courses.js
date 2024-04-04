import React from "react";
import Header from "../components/Header";
import courseslist from "./coursesdata";

function Courses() {
  return (
    <div>
      <Header />
      <div className="courses-intro" style={{ backgroundImage: `url('./courses.svg')` }}>
        <div className="courses-intro-content">
          <h1>TOKAM LEARNINGS</h1>
          <div>
            <p>"SOFTWARE DEVELOPMENT LIFE CYCLE."</p>
            <button className="primary-button"><a href="#courses-list">GET STARTED</a></button>
          </div>
        </div>
      </div>

      <div className="why-jb-parent">
        <div className="why-jb n-box1 flex-with-center">
          <h1>Why jb ?</h1>
          <div className="why-jb-content">
            <p style={{ marginBottom: "3px", fontWeight: "bold", color: "#FF5733" }}>Technical Skills: 
            <br></br>
            Proficient in Java, Spring Boot, JPA, Kubernetes, AWS DevOps CI/CD, Python, Selenium.</p>
            <p style={{ marginBottom: "3px", fontStyle: "italic", color: "#3366FF" }}>Team Collaboration: 
            Effective communication and adaptability for seamless teamwork.</p>
            <p style={{ marginBottom: "3px", fontStyle: "italic", color: "black" }}>Continuous Learning:
            <br></br> 
            Committed to staying updated with evolving technologies and best practices.</p>
            <p style={{ marginBottom: "3px", fontStyle: "italic", color: "green" }}>Attention to Detail: 
            <br></br>
            Ensuring clean, efficient, and well-documented code.</p>
            <p style={{ marginBottom: "3px", fontStyle: "italic", color: "indigo" }}>Adaptability: 
            <br></br>
            Flexible and quick to adapt to changing requirements.</p>
            <p style={{ marginBottom: "3px", fontStyle: "italic", color: "#3966FF" }}>Passion for Development: 
            Genuine enthusiasm for software engineering</p>
          </div>
        </div>
      </div>

      <div className="container courses-list mb-5" id='courses-list'>
        <h3 className="font-bold">Take a look of our courses</h3>
        <hr />
        <div className="row mt-5">
          {courseslist.map((course) => {
            return (
              <div className="col-md-4">
                <div className="position-relative course">
                  <img src={course.image} alt="" className='w-100'/>
                  <div className="course-content w-100">
                    <h3>{course.title}</h3>
                    <hr />
                    <p>{course.description}</p>
                    <button className="primary-button">DEMO</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses;
