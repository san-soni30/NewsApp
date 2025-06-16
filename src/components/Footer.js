import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-body-tertiary fixed-bottom text-center">
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2020 Copyright: 
            <a className="text-body" href="https://github.com/san-soni30"> Sanskruti </a>
          </div>
        </footer>
      </div>
    )
  }
}
