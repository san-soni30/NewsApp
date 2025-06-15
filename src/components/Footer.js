import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="bg-body-tertiary text-center">
          <div className="container p-4 pb-0">
            {/* Section: Social media */}
            <section className="mb-4">
              {/* Facebook */}
              <Link
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: '#3b5998' }}
                to="/"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>

              {/* Twitter */}
              <Link
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: '#55acee' }}
                to="/"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </Link>

              {/* Google */}
              <Link
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: '#dd4b39' }}
                to="/"
                role="button"
              >
                <i className="fab fa-google"></i>
              </Link>

              {/* Instagram */}
              <Link
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: '#ac2bac' }}
                to="/"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </Link>

              {/* Linkedin */}
              <Link
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: '#0082ca' }}
                to="/"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>

              {/* Github */}
              <Link
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: '#333333' }}
                to="/"
                role="button"
              >
                <i className="fab fa-github"></i>
              </Link>
            </section>
          </div>

          {/* Copyright */}
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2020 Copyright:
            <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </footer>
      </div>
    )
  }
}
