import React, { Component } from 'react'

export default class About extends Component {
  constructor(props) {
    super(props);
    document.title = "About - NeoNews";
  }
  render() {
    return (
      <div className="container py-5">
        <h1 className="section-heading text-center mb-4">About NeoNews – The Smart News App for Real-Time Updates</h1>
        <p className="lead text-center mb-5">
          NeoNews is a cutting-edge news app designed for today's fast-moving world. We bring you breaking news, live updates, trending stories, and expert analysis — all customized to your interests. With NeoNews, you stay informed on what matters, whenever and wherever you are.
        </p>

        <h2 className="section-heading mb-4">Your Personalized News Hub</h2>
        <p className="mb-4">
          In the age of information overload, NeoNews makes it simple to find the stories you care about. Our AI-powered personalization ensures you receive news that matches your preferences, from world news and politics to technology, sports, business, entertainment, and more.
        </p>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="icon-box text-center">
              <i className="bi bi-clock-history"></i>
              <h5>Breaking News 24/7</h5>
              <p>Get instant access to breaking headlines and live updates as events unfold.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-box text-center">
              <i className="bi bi-globe-americas"></i>
              <h5>Global & Local News</h5>
              <p>Stay connected to both international stories and local events near you.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-box text-center">
              <i className="bi bi-graph-up-arrow"></i>
              <h5>AI-Personalized Feed</h5>
              <p>Enjoy a custom news experience that adapts to your reading habits.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-box text-center">
              <i className="bi bi-bar-chart-line"></i>
              <h5>In-Depth Reports & Expert Opinions</h5>
              <p>Go beyond headlines with detailed articles, interviews, and expert commentary.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-box text-center">
              <i className="bi bi-phone"></i>
              <h5>User-Friendly Interface</h5>
              <p>Our clean, intuitive design ensures a smooth and enjoyable reading experience on any device.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-box text-center">
              <i className="bi bi-shield-lock"></i>
              <h5>Secure, Private & Ad-Free</h5>
              <p>Read your news with no distractions or unwanted ads.</p>
            </div>
          </div>
        </div>

        <div className="mission-box mt-5">
          <h2 className="text-center mb-3">Our Mission</h2>
          <p className="lead text-center">
            At NeoNews, our mission is to make high-quality news fast, reliable, and accessible for everyone. We combine technology with trusted journalism to help you stay ahead, make informed decisions, and stay connected to the world around you.
          </p>
        </div>

        <h2 className="section-heading mt-5 mb-4">Why NeoNews Stands Out</h2>
        <p>
          Unlike traditional news apps, NeoNews is built for modern readers who value speed, accuracy, personalization, and simplicity. Our smart platform filters out the noise, so you get the most relevant news — real news, real-time.
        </p>
      </div>
    )
  }
}
