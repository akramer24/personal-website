import React from 'react';
import { Carousel, Col } from 'react-bootstrap';
import navTo from '../../utils/navTo';

export default function AllProjects() {

  return (
    <div id="all-projects-container" >
      <Col md={6} sm={8} xs={12}>
        <div id="all-projects-header">
          <h3>These are my projects.</h3>
          <p>
            For more detailed information on each one, please click anywhere on the imamge or description.
            </p>
        </div>
        <Carousel>
          <Carousel.Item onClick={() => navTo('/projects/brackapptology')}>
            <img src="/brackapptology-ss-1.jpeg" />
            <Carousel.Caption>
              <h3>BRACKAPPTOLOGY</h3>
              <p>A web app for comparing NCAA Tournament resumes and projecting the field.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item onClick={() => navTo('/projects/bickr')}>
            <img src="/bickr-ss-1.png" />
            <Carousel.Caption>
              <h3>BICKR</h3>
              <p>A live-stream debate app.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </div>
  )
}