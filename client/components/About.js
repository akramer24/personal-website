import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class About extends React.Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="about" className="page animated fadeIn">
        <Col id="about-header" md={6} sm={8} xs={12}>
          <h1 id="about-header-name">Hi, I'm Ari Kramer</h1>
          <h3 id="about-header-thanks">Thanks for visiting my website</h3>
        </Col>
        <Col id="about-body" md={6} sm={8} xs={12}>
          <p>
          I am a software engineer who has built several projects with React, React-Redux, Node, Express, Sequelize
            and many more technologies.
          </p>
          <p>
          In my previous life as a sports journalist, I used my persistence, creativity and precision every day to pursue, craft and submit a
            story. I love using those skills as a software engineer to develop products that make people’s days easier and more enjoyable.
          </p>
          <p>
          I am currently pursuing a full-time developer job. If you are interested, please see<NavLink to="/resume"> my resume.</NavLink>
          </p>
          <div id="about-images-container">
            <div className="home-image-container">
              <img src="/difara.JPEG" className="home-image" />
            </div>
            <div className="home-image-container">
              <img src="/me.jpeg" className="home-image" />
            </div>
            <div className="home-image-container">
              <img src="/coding.jpg" className="home-image" />
            </div>
          </div>
        </Col>
      </div>
    )
  }
}
