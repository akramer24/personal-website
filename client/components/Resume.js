import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { Col } from 'react-bootstrap';

export default class Resume extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="page page-container animated fadeIn">
        <a href="https://resume.creddle.io/resume/1iz7bnsm4oa" target="_blank">View resume as PDF</a>
        <iframe src="https://resume.creddle.io/embed/1iz7bnsm4oa"
          width="850" height="1100" seamless></iframe>
      </div>
    )
  }
}
