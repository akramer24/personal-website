import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { Col } from 'react-bootstrap';

export default function Resume() {
  return (
    <div className="page-container">
      <Col id="resume" md={6} sm={8} xs={12}>
        <div id="resume-header">
          <h1>Ari Kramer</h1>
          <div className="resume-sub-header">
            <p className="resume-sub-header-item">Bronx, NY</p>
            <p>|</p>
            <p className="resume-sub-header-item">(917) 612-5770</p>
          </div>
          <div className="resume-sub-header">
            <a target="_blank" className="resume-sub-header-item" href="mailto:arikramer24@gmail.com">arikramer24@gmail.com</a>
            <p>|</p>
            <a target="_blank" className="resume-sub-header-item" href="https://github.com/akramer24">Github</a>
            <p>|</p>
            <a target="_blank" className="resume-sub-header-item" href="https://www.linkedin.com/in/arikramer/">LinkedIn</a>
          </div>
        </div>
        <div id="resume-body">
          <div id="resume-technologies">
            <h3>TECHNOLOGIES</h3>
            <p><span className="bold">Proficient:</span> JavaScript, React, Redux, Express, Sequelize, Node, HTML, CSS, Git</p>
            <p><span className="bold">Familiar:</span> jQuery, Cheerio, Mocha, Chai, SQL, SEO, Request-Promise, Socket.io</p>
          </div>
          <div id="resume-projects">
            <h3>PROJECTS</h3>
            <div className="resume-item">
              <a target="_blank" className="resume-company" href="https://brackapptology.herokuapp.com/">Brackapptology</a>
              <div className="resume-sub-header">
                <p className="resume-sub-header-item">Sole Developer</p>
                <p>|</p>
                <p className="resume-sub-header-item">Jan. 2018</p>
              </div>
              <ul>
                <li>A web app for comparing NCAA tournament resumes and forming a personal bracketology</li>
                <li>Built with React-Redux, Express, Sequelize and Cheerio</li>
              </ul>
            </div>
            <div className="resume-item">
              <a target="_blank" className="resume-company" href="https://bicker.herokuapp.com/">Bickr</a>
              <div className="resume-sub-header">
                <p className="resume-sub-header-item">Developer</p>
                <p>|</p>
                <p className="resume-sub-header-item">Jan. - Feb. 2018</p>
              </div>
              <ul>
                <li>A live-stream debate app, built with React-Redux, Express, Sequelize, webRTC and Socket.io</li>
                <li>Used sockets to assemble a functioning chat room for each channel</li>
                <li>Constructed user and channel pages, set up backend routes, integrated animation</li>
              </ul>
            </div>
          </div>
          <div id="resume-experience">
            <h3>EXPERIENCE</h3>
            <div className="resume-item">
              <p className="resume-company">Newsday</p>
              <div className="resume-sub-header">
                <p className="resume-sub-header-item">Sports Reporter</p>
                <p>|</p>
                <p className="resume-sub-header-item">Aug. 2014 - Aug. 2017</p>
              </div>
              <ul>
                <li>Wrote more than 400 game stories and features on high school, college and pro sports for the country’s eighth-most circulated newspaper</li>
                <li>Proved worthy of earning pro sports assignments within first four months on job</li>
                <li>Worked with team of 3-4 reporters to layout and edit daily high school sports section</li>
                <li>Newsday Digital Piece of the Month, March 2016</li>
              </ul>
            </div>
            <div className="resume-item">
              <p className="resume-company">Camp Ramah in the Berkshires</p>
              <div className="resume-sub-header">
                <p className="resume-sub-header-item">Counselor</p>
                <p>|</p>
                <p className="resume-sub-header-item">Summers 2010 - 2011</p>
              </div>
              <div className="resume-sub-header">
                <p className="resume-sub-header-item">Assistant Sports Director</p>
                <p>|</p>
                <p className="resume-sub-header-item">Summer 2012</p>
              </div>
              <ul>
                <li>Served as head coach of the varsity softball team</li>
                <li>Mediated relations between sports staff and athletics director</li>
                <li>Delegated tasks and classes to staff</li>
              </ul>
            </div>
          </div>
          <div id="resume-education">
            <h3>EDUCATION</h3>
            <div className="resume-item">
              <p className="resume-company">Fullstack Academy</p>
              <div className="resume-sub-header">
                <p className="resume-sub-header-item">Feb. 2018</p>
              </div>
              <ul>
                <li>13-week software development bootcamp in Javascript</li>
              </ul>
            </div>
            <div className="resume-item">
              <p className="resume-company">Binghamton University</p>
              <div className="resume-sub-header">
                <p className="resume-sub-header-item">May 2014</p>
              </div>
              <ul>
                <li>B.A. in English | Tony Kornheiser Scholarship Recipient</li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
    </div>
  )
}
