import React, { Component } from "react";
import jsLogo from "./imagenes/js.svg";

class Card extends Component {
  componentDidMount() {
    const M = window.M;

    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".card");
      var instances = M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col s3 m3">
            <div class="card-small">
              <div class="card-image">
                <img src={jsLogo} />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s3 m3">
            <div class="card-small">
              <div class="card-image">
                <img src={jsLogo} />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s3 m3">
            <div class="card-small">
              <div class="card-image">
                <img src={jsLogo} />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s3 m3">
            <div class="card-small">
              <div class="card-image">
                <img src={jsLogo} />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s3s m3">
            <div class="card-small">
              <div class="card-image">
                <img src={jsLogo} />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s3 m3">
            <div class="card-small">
              <div class="card-image">
                <img src={jsLogo} />
                <span class="card-title">Card Title</span>
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
