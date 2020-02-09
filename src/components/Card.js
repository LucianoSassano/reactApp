import React, { Component } from "react";
import jsLogo from "./imagenes/js.svg";
import cssLogo from "./imagenes/css3.jpg"
import htmlLogo from "./imagenes/html5.png"
import reactLogo from "./imagenes/reactJs.png"
import nodeLogo from "./imagenes/nodeJs.png"
import pythonLogo from "./imagenes/python.jpg"

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
      <div class="container">
        <div class="row">
          <div class="col m4">
            <div class="card-small">
              <div class="card-image">
                <img src={htmlLogo} />
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

          <div class="col m4">
            <div class="card-small">
              <div class="card-image">
                <img src={cssLogo} />
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


          <div class="col m4">
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
          <div class="col m4">
            <div class="card-small">
              <div class="card-image">
                <img src={reactLogo} />
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

          <div class="col m4">
            <div class="card-small">
              <div class="card-image">
                <img src={nodeLogo} />
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


          <div class="col m4">
            <div class="card-small">
              <div class="card-image">
                <img src={pythonLogo} />
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
