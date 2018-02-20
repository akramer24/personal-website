import React from 'react';
import { Col } from 'react-bootstrap';

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
            I'm a sports-writer-turned-software-engineer. I know. You don't see that every day.
          </p>
          <p>
            When I tell people that I used to cover sports for Newsday, the most typical response takes some form of,
            "Woah, that's so cool!" and then "Why did you want to leave?"
          </p>
          <p>
            This is my explanation.
          </p>
          <p>
            As a high schooler, I probably would have passed out if someone told me I would one day interview Robinson Cano
            and stand inside the Yankees' clubhouse. I lived both those dreams as a sports reporter for Newsday and remained
            conscious to remember them forever.
          </p>
          <img src="cano.png" id="cano" />
          <p>
            Journalism will always have a special place in my heart and memory. As a freshman at Binghamton University, I joined
            the student paper as a track and field beat writer and eventually ascended the hierarchy to sports editor as a senior.
            Binghamton did not have a journalism program, but I read constantly and incorporated styles and techniques
            I gleaned from my favorite writers as I wrote stories of my own.
          </p>
          <p>
            When I graduated in 2014, I landed a job with Newsday. I worked alongside reporters with degrees from the country's
            most prestigious journalism schools, and I earned more demanding, high-profile assignments than them. I wrote more than
            400 stories for the country's eighth-most circulated paper. I am extremely proud of my journalism accomplishments.
          </p>
          <p>
            But my interest in journalism did not extend beyond sports, and if you want to cover sports, you need to work
            nights and weekends forever -- that's when the games happen. I did not realize how straining that would be
            until living through it for three years. There are also fewer and fewer full-time jobs each year.
          </p>
          <p>
            As a duo, those factors made long-term career prospects bleak. I was not willing to leave journalism for just any
            career, however. While working for Newsday, I seriously looked into transitioning to TV and marketing. I even got
            accepted into the NYC Teaching Fellowship. None of those fields captivated me enough.
          </p>
          <iframe id="about-video" src="https://www.youtube.com/embed/7uFhanTKc2Q" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <p>
            Then I started writing JavaScript on Codecademy.
          </p>
          <p>
            I got hooked instantly. As I spoke to my software developer friends and researched the field, I became even more
            passionate about a career as an engineer. I learned that the creativity, persistence and precision I cultivated as a writer would
            be required every day. That excited me. Those traits helped make me a great reporter, and they have propelled me
            through the early stages of my coding journey.
          </p>
          <p>
            I left Newsday in August just to take a JavaScript prep course -- working nights and weekends precluded me from
            collecting a paycheck during the day and learning to code at night. But I was all in.
          </p>
          <p>
            By October, I was a student at Fullstack Academy, widely regarded as one of the top coding bootcamps. I spent four
            months immersing myself in their full-time program and built apps with React, Redux, Express, Sequelize and many
            more technologies.
          </p>
          <p>
            I performed well enough that Fullstack offered me a Teachers' Assistant position for the February cohort. I am eager
            to continue to learn over these next three months, and I cannot wait to formally enter the field as a full-time
            software engineer in the spring.
          </p>
          <p>
            Thank you for reading.
          </p>
        </Col>
      </div>
    )
  }
}
