import React from 'react';
import { Col } from 'react-bootstrap';

export default class Showdown extends React.Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="page page-container animated fadeIn">
        <Col md={6} sm={8} xs={12} id="showdown-container">
          <div className="project-header">
            <h3>MLB Showdown <small><a target="_blank" href="https://mlb-showdown-2018.herokuapp.com/">(Try it here)</a></small></h3>
            <p className="project-subheader">An online baseball card game.</p>
          </div>
          <iframe id="showdown-demo" width="560" height="315" src="https://www.youtube.com/embed/K0VJ1gIdYx8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <div className="project-body">
            <h5 className="project-section-head">Why did I build this app?</h5>
            <p>
              My brother and I used to play MLB Showdown -- the greatest card game ever -- when we were younger.
              When the game went out of print about 13 years ago, we were devastated. This online version is the
              next best thing.
              </p>
            <h5 className="project-section-head">How does it work?</h5>
            <p>
              Users can buy packs of cards and pit their team against someone else's on a game-board rendered
              by React and React-Redux. Game state is transferred from client to client via Socket.io, and
              players can talk smack in the WebRTC video chat.
          </p>
            <br />
          </div>
        </Col>
      </div>
    )
  }
}