import React from "react";

const Works = () => {
  return (
    <div id="works" className="section">
      <div className="row">
        <div className="col s12 center">
          <div className="heading-primary">My Works</div>
          <div className="subtitle-container">
            <p className="subtitle">These are some of my best works</p>
          </div>
        </div>
      </div>
      <div id="projects">
        <div className="project row">
          <div className="col s12">
            <div
              className="card horizontal"
              style={{ backgroundColor: "inherit" }}
            >
              <div className="card-image project-image left valign-wrapper">
                <img
                  src="/assets/projects/photo1.jpg"
                  alt=""
                  className="responsive-img"
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <div className="project-about">
                    <div className="text">
                      <h2 className="heading-about">FoodTime</h2>
                      <div className="content">
                        <p>
                          A Food-Ordering Application built for both Consumers
                          and Restaurants.
                        </p>
                        <br />
                        <p>
                          Restaurants can post their outlets with various
                          dishes, and Consumers can place order from restaurant
                          by adding dishes of specific quantity.
                        </p>
                        <br />
                        <p>
                          Built with <strong>MERN</strong> Stack
                        </p>
                      </div>
                      <div className="card-action">
                        <p className="left">
                          <a
                            href="https://foodapp-dkut.onrender.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            View Project
                          </a>
                        </p>
                        <p className="right">
                          <a
                            href="https://github.com/vivekiet22/FoodApp"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Code
                          </a>
                        </p>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project row">
          <div className="col s12">
            <div
              className="card horizontal"
              style={{ backgroundColor: "inherit" }}
            >
              <div className="card-image project-image left valign-wrapper">
                <img
                  src="/assets/projects/photo2.jpg"
                  alt=""
                  className="responsive-img"
                />
              </div>
              <div className="card-content">
                <div className="project-about">
                  <div className="text">
                    <h2 className="heading-about">NoteBook-App</h2>
                    <div className="content">
                      <p>
                      NoteBook-App is a React Application for managing personal notes or daily tasks 
                      </p>
                      <br />
                      <p>
                        You can add your tasks/notes and delete when complete.It is very simple to use.
                      </p>
                    </div>
                    <div className="card-action">
                      
                      <p className="left">
                        <a
                          href="https://github.com/vivekiet22/NoteBook-App"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Code
                        </a>
                      </p>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project row">
          <div className="col s12">
            <div
              className="card horizontal"
              style={{ backgroundColor: "inherit" }}
            >
              <div className="card-image project-image left valign-wrapper">
                <img
                  src="/assets/projects/photo3.jpg"
                  alt=""
                  className="responsive-img"
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <div className="project-about">
                    <div className="text">
                      <h2 className="heading-about">TravellingSalesmanProblem</h2>
                      <div className="content">
                        <p>
                        A Desktop application to calculate the optimum path to travel the selected cities.
                        </p>
                        
                        
                      </div>
                      <div className="card-action">
                        
                        <p className="left">
                          <a
                            href="https://github.com/vivekiet22/TravellingSalesmanProblem"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Code
                          </a>
                        </p>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project row">
          <div className="col s12">
            <div
              className="card horizontal"
              style={{ backgroundColor: "inherit" }}
            >
              <div className="card-image project-image left valign-wrapper">
                <img
                  src="/assets/projects/photo4.jpg"
                  alt=""
                  className="responsive-img"
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <div className="project-about">
                    <div className="text">
                      <h2 className="heading-about">NewsApp</h2>
                      <div className="content">
                        <p>
                        A Web application where you can read all news category wise.
                        </p>
                        <br />
                        <p>
                          whether It is entertainment,sports,science or political ,you can find all categories here and enjoy reading news.
                        </p>
                        <br />
                        
                      </div>
                      <div className="card-action">
                        <p>
                          <a
                            href="https://github.com/vivekiet22/News-App"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Code
                          </a>
                        </p>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
