import Navbar from './components/Navbar';
import './App.css';
import React, { Component } from 'react';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  str = 'Sans';
  size = 10;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress:0
  }
  setProgress = (progress) => {
    this.setState({progress: progress});
  }
  render() {
    return (
      <>
        <Router>
          
            <Navbar />
             <LoadingBar
             height={4}
        color="white"
        progress={this.state.progress}
        
      />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.size} country="us" category="general" />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.size} country="us" category="business" />} />
                <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.size} country="us" category="entertainment" />} />
                <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.size} country="us" category="health" />} />
                <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.size} country="us" category="science" />} />
                <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.size} country="us" category="sports" />} />
                <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.size} country="us" category="technology" />} />
              </Routes>
            </div>
            <Footer />
       
        </Router>
      </>
    )
  }
}
