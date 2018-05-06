import React from 'react';
import { Col } from 'react-bootstrap';

export default function Blog() {
  return (
    <div id="blog-container">
    <Col md={6} sm={8} xs={12}>
      <div className="blog-post">
        <h3>Taking the leap into coding was the best decision of my life</h3>
        <p>I’m a sports-writer-turned-software-engineer. I know. You don’t see that every day.</p>
        <p>When I tell people that I used to cover sports for Newsday, the most typical response takes some form of, “Woah, that’s so cool!” and then “Why did you want to leave?”</p>
        <p>This is my explanation.</p>
        <a href="https://medium.com/@arikramer24/taking-the-leap-into-coding-was-the-best-decision-of-my-life-1ed40b6b347b" target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
      <div className="blog-post">
        <h3>How to work around Sequelize’s unique constraints in belongsToMany associations</h3>
        <p>For so many things, Sequelize is fantastic. The Node-based ORM allows JavaScript programmers to easily construct models, create instances on those models, query for specific instances and — why we’re here — set up associations between models.</p>
        <a href="https://medium.com/@arikramer24/how-to-work-around-sequelizes-unique-constraints-in-belongstomany-associations-20eb72dabeac" target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </Col>
    </div>
  )
}