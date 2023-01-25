import React from "react";

const About = () => {
  return (
    <div id="about" className="section">
      <div className="row">
        <div className="col s12 offset-l4" style={{ padding: 0 }}>
          <div className="heading-primary">
            About Me
            {/* <span className="line"></span> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 l4">
          <img
            src="/assets/me.jpg"
            alt="Profile"
            className="responsive-img circle"
          />
          {/* <div className="about-image"></div> */}
        </div>
        <div id="about-content" className="col s12 l8">
          <p className="content-text">
            Hi, I am <span className="bold">Vivek Maddeshiya,</span> graduated from Institute of Engineering and Technology,Lucknow. 
          </p>
          <br />
          <p className="content-text">
            <br />I have a keen interest in programming and Web-Development. I
            am a developer with experience in some javascript
            frameworks like reactjs, nodejs. I like creating web
            applications.
          </p>
          <br />
          <p className="content-text">
            <br />I have worked with many frameworks and always try to learn more new technologies.
          </p>
          <div id="about-contact" style={{ marginTop: "30px" }}>
            <span>Contact Me</span>
            <button
              id="contact-btn"
              className="btn white"
              onClick={() => {
                window.location.href = "/#contact";
              }}
            >
              <i className="black-text material-icons">arrow_right_alt</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
