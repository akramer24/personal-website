import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="home" className="page animated fadeIn">
        <NavLink to="/about" className="home-image-container">
          <img src="/difara.JPEG" className="home-image" />
          <div className="middle">
            <div className="home-image-text">About Me</div>
          </div>
        </NavLink>
        <NavLink to="/resume" className="home-image-container">
          <img src="/me.jpeg" className="home-image" />
          <div className="middle">
            <div className="home-image-text">Resume</div>
          </div>
        </NavLink>
        <NavLink to="/projects" className="home-image-container">
          <img src="/coding.jpg" className="home-image" />
          <div className="middle">
            <div className="home-image-text">Projects</div>
          </div>
        </NavLink>
      </div>
    )
  }
}
