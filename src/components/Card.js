import React, { Component } from "react";


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
              <img src={require("" + this.props.img )} />
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
