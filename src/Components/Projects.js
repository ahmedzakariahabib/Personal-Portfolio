import React, { useState } from "react";
import imageProject from "../assets/project-img1.png";
import imageProject2 from "../assets/project-img2.png";
import imageProject3 from "../assets/project-img3.png";
import { Nav, Tab } from "react-bootstrap";

export default function Projects() {
  return (
    <>
      <section className="projects">
        <div className="parentProjects">
          <h2 className="text-white text-center  display-2">Projects</h2>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav
              variant="pills"
              className="nav-pills    justify-content-center align-items-center"
              id="pills-tab"
            >
              <Nav.Item>
                <Nav.Link eventKey="first">1st Section</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">2st Section</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">3st Section</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content id="slideInUp" className="pb-5">
              <Tab.Pane eventKey="first">
                <div className="parentforPhotes row container mx-auto pt-5">
                  <div className=" col-sm-6 col-md-4 mb-3">
                    <div className="image-container">
                      <img
                        className="img-fluid  "
                        src={imageProject}
                        alt="imageproject"
                      />
                      <div class="overlay">
                        <h1 className="text-white">Business Startup</h1>
                        <p className="text-white">Design & Development</p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-sm-6 col-md-4 mb-3">
                    <div className="image-container">
                      <img
                        className="img-fluid  "
                        src={imageProject2}
                        alt="imageproject"
                      />
                      <div class="overlay">
                        <h1 className="text-white">Business Startup</h1>
                        <p className="text-white">Design & Development</p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-sm-6 col-md-4 mb-3">
                    <div className="image-container">
                      <img
                        className="img-fluid  "
                        src={imageProject3}
                        alt="imageproject"
                      />
                      <div class="overlay">
                        <h1 className="text-white">Business Startup</h1>
                        <p className="text-white">Design & Development</p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-sm-6 col-md-4 mb-3">
                    <div className="image-container">
                      <img
                        className="img-fluid  "
                        src={imageProject}
                        alt="imageproject"
                      />
                      <div class="overlay">
                        <h1 className="text-white">Business Startup</h1>
                        <p className="text-white">Design & Development</p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-sm-6 col-md-4 mb-3">
                    <div className="image-container">
                      <img
                        className="img-fluid  "
                        src={imageProject2}
                        alt="imageproject"
                      />
                      <div class="overlay">
                        <h1 className="text-white">Business Startup</h1>
                        <p className="text-white">Design & Development</p>
                      </div>
                    </div>
                  </div>
                  <div className=" col-sm-6 col-md-4 mb-3">
                    <div className="image-container">
                      <img
                        className="img-fluid  "
                        src={imageProject3}
                        alt="imageproject"
                      />
                      <div class="overlay">
                        <h1 className="text-white">Business Startup</h1>
                        <p className="text-white">Design & Development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="second"></Tab.Pane>
              <Tab.Pane eventKey="third">
                <p className="text-white text-center threeTab pt-5">
                  My name is Ahmed , I live in menofia
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
    </>
  );
}
