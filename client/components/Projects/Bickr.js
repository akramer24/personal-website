import React from 'react';
import { Col, Carousel } from 'react-bootstrap';

export default function Bickr() {
  return (
    <div className="page-container">
      <Col md={6} sm={8} xs={12}>
        <div id="bickr-header">
          <h3>Bickr <small><a target="_blank" href="https://bicker.herokuapp.com/">(Try it here)</a></small></h3>
          <p>A live-stream debate app.</p>
        </div>
        <Carousel>
          <Carousel.Item>
            <img src="/bickr-ss-1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/bickr-ss-2.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/bickr-ss-3.png" />
          </Carousel.Item>
        </Carousel>
        <div id="bickr-body">
          <p><span className="bold">Collaborators: </span>Abe Johnson, Max Legocki, Shayan Sheikh</p>
          <h5>Why did we build this app?</h5>
          <p>
            I had the privilege of working with three enthusiastic, fun partners on this project, our Capstone at Fullstack Academy. As we brainstormed
            ideas for what to build, nothing captivated us quite like Bickr. We knew we were in for a challenge -- none of us had ever worked on
            a video-streaming project -- but we were excited to learn the ins and outs of webRTC and other relevant technologies that we would come across.
          </p>
          <p>
            We have seen Reddit and Twitch grow rapidly in popularity, and we thought Bickr could fuse the tenets of each into one cohesive app. What makes Reddit great
            is its inclusive community. Anyone can sign up and participate, sharing their opinions by commenting or voting. Twitch, on the other hand, does not promote
            as much engagement, but allows users the opportunity to create channels dedicated to whatever they choose.
          </p>
          <p>
            We thought we could bridge the two: users can sign up and create a channel, and others can tune in to either join or watch the debate and vote for a winner.
          </p>
          <h5>How does it work?</h5>
          <p>
            React-Redux renders the client-side, and we store our user and channel data using PostgreSQL and sequelize.
            Bickr relies heavily on users having synchronized data, so to achieve fluidity in our application we utilized
            web-sockets as well as webRTC to create peer-to-peer live video streaming.
          </p>
        </div>
      </Col>
    </div>
  )
}