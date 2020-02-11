import React, { Component } from "react";
import jsLogo from "./imagenes/js.svg";
import cssLogo from "./imagenes/css3.jpg";
import htmlLogo from "./imagenes/html5.png";
import reactLogo from "./imagenes/reactJs.png";
import nodeLogo from "./imagenes/nodeJs.png";
import pythonLogo from "./imagenes/python.jpg";

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
          <div class="col s12 m4 l3 front">
            <div class="card-small">
              <div class="card-image">
                <img src={htmlLogo}  />
                <span class="card-title">HTML5</span>
              </div>
              <div class="card-content">
                <p>
                  HTML5 is a software solution stack that defines the properties
                  and behaviors of web page content by implementing a
                  markup-based pattern to it.
                </p>
              </div>
              <div class="card-action">
                <a
                  href="https://html.spec.whatwg.org/multipage/"
                  target="blank"
                >
                  More info
                </a>
              </div>
            </div>
          </div>

          <div class="col s12 m4 l3" >
            <div class="card-small">
              <div class="card-image">
                <img src={cssLogo} />
                <span class="card-title">CSS</span>
              </div>
              <div class="card-content">
                <p>
                  Cascading Style Sheets (CSS) is a style sheet language used
                  for describing the presentation of a document written in a
                  markup language like HTML.
                </p>
              </div>
              <div class="card-action">
                <a href="https://www.w3.org/Style/CSS/" target="blank">
                  More info
                </a>
              </div>
            </div>
          </div>

          <div class="col s12 m4 l3">
            <div class="card-small">
              <div class="card-image">
                <img src={jsLogo} />
                <span class="card-title">JavaScript</span>
              </div>
              <div class="card-content">
                <p>
                  JavaScript,often abbreviated as JS, is an interpreted
                  programming language that conforms to the ECMAScript
                  specification.JavaScript is high-level, often just-in-time
                  compiled, and multi-paradigm. It has curly-bracket syntax,
                  dynamic typing, prototype-based object-orientation, and
                  first-class functions.
                </p>
              </div>
              <div class="card-action">
                <a
                  href="https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Qu%C3%A9_es_JavaScript"
                  target="blank"
                >
                  More info
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12 m4 l3">
            <div class="card-small">
              <div class="card-image">
                <img src={reactLogo} />
                <span class="card-title">ReactJs</span>
              </div>
              <div class="card-content">
                <p>
                  React (also known as React.js or ReactJS) is a JavaScript
                  library for building user interfaces. It is maintained by
                  Facebook and a community of individual developers and
                  companies.React can be used as a base in the development of
                  single-page or mobile applications.
                </p>
              </div>
              <div class="card-action">
                <a href="https://es.reactjs.org/" target="blank">
                  More info
                </a>
              </div>
            </div>
          </div>

          <div class="col s12 m4 l3">
            <div class="card-small">
              <div class="card-image">
                <img src={nodeLogo} />
                <span class="card-title">NodeJs</span>
              </div>
              <div class="card-content">
                <p>
                  Node.js is an open-source, cross-platform, JavaScript runtime
                  environment that executes JavaScript code outside of a
                  browser. Node.js lets developers use JavaScript to write
                  command line tools and for server-side scripting—running
                  scripts server-side to produce dynamic web page content before
                  the page is sent to the user's web browser.
                </p>
              </div>
              <div class="card-action">
                <a href="https://nodejs.org/en/" target="blank">
                  More info
                </a>
              </div>
            </div>
          </div>

          <div class="col s12 m4 l3">
            <div class="card-small">
              <div class="card-image">
                <img src={pythonLogo} />
                <span class="card-title">Python</span>
              </div>
              <div class="card-content">
                <p>
                  Python es un lenguaje de programación interpretado cuya
                  filosofía hace hincapié en la legibilidad de su código. Se
                  trata de un lenguaje de programación multiparadigma, ya que
                  soporta orientación a objetos, programación imperativa y, en
                  menor medida, programación funcional. Es un lenguaje
                  interpretado, dinámico y multiplataforma.
                </p>
              </div>
              <div class="card-action">
                <a href="https://www.python.org/" target="blank">More info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
