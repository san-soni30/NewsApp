import React, { Component } from 'react'
import './NewsItem.css'; 
export default class NewsItem extends Component {
 
  render() {
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card news-card shadow-sm">         
          <img src={!imgUrl ? "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" : imgUrl} className="card-img-top news-img" alt="News" />
          <div className="card-body">
             <span className="badge rounded-pill bg-danger">{!source ? "Unknown" : source}</span>
             <h5 className="card-title my-2">{title}...</h5>
    <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-outline-danger btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
