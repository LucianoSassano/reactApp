import React, { Component } from "react";
/*import jsLogo from "./imagenes/js.svg";
import cssLogo from "./imagenes/css3.jpg";
import reactLogo from "./imagenes/reactJs.png";
import nodeLogo from "./imagenes/nodeJs.png";
import pythonLogo from "./imagenes/python.jpg";*/
import htmlLogo from "./imagenes/html5.png";

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
      <div className="container">
        <div className="col s12 m4 l3 front">
          <div className="card-small">
            <div className="card-image">
              <img src={htmlLogo} alt="logo"/>
              <span className="card-title">{this.props.title}</span>
            </div>
            <div className="card-content">
              <p>{this.props.content}</p>
            </div>
            <div className="card-action">
              <a href={this.props.link} target="blank">
                More info
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
