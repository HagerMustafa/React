import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="text-center text-white bg-dark">
          <div className="container pt-4">
            <section className="mb-4">
              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-google"></i>
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div className="text-center text-light p-3">
            © 2020 Copyright:
            <a className="text-light" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
