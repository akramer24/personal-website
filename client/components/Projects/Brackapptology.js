import React from 'react';
import { Col, Carousel } from 'react-bootstrap';

export default class Brackapptology extends React.Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="page page-container animated fadeIn">
        <Col md={6} sm={8} xs={12}>
          <div className="project-header">
            <h3>Brackapptology <small><a target="_blank" href="https://brackapptology.herokuapp.com/">(Try it here)</a></small></h3>
            <p className="project-subheader">A web app for comparing NCAA Tournament resumes and projecting the field.</p>
          </div>
          <Carousel>
            <Carousel.Item>
              <img src="/brackapptology-ss-1.jpeg" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/brackapptology-ss-2.png" />
            </Carousel.Item>
          </Carousel>
          <div className="project-body">
            <h5 className="project-section-head">Why did I build this app?</h5>
            <p>
              In my previous life as a Newsday sports reporter, I regularly compiled a bracketology in the weeks preceding the NCAA Tournament.
              There was always something exciting about forecasting how the bracket would look on Selection Sunday, after the selection committee had
              whittled the field to 68 teams and seeded them based on each one's resume.
            </p>
            <p>
              The problem I ran into when comparing teams was that important data was all over the place. Sometimes I would have 30 tabs open,
              looking at Team A's data on Site A and Site B so I could see how they stacked up against Team B, Team C, Team D and so forth on those sites.
            </p>
            <p>
              Brackapptology aimed to make things more convenient for bracketologists.
            </p>
            <h5 className="project-section-head">How does it work?</h5>
            <p>
              I use Cheerio and Request-Promise to scrape relevant data from several websites. That data gets saved to my PostgreSQL database every hour,
              making sure numbers are always up to date. Whenever a user lands on my site, I fetch all that data from the database in one quick call and
              use React to render the top 85 teams in the RPI and all projected conference champions side by side for quick, easy comparison.
            </p>
            <p>
              Visitors are prompted to log-in immediately so they can save their projections to my database upon submission. Any logged-in user can revisit
              and share old brackets from his or her user page.
            </p>
            <br />
          </div>
        </Col>
      </div>
    )
  }
}