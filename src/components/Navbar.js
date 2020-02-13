import React, { Component } from "react";
import fondo from "./imagenes/fondo.jpg";
import profile from "./imagenes/profile.jpeg";
import CardContent from "./CardContent";

class Navbar extends Component {
  componentDidMount() {
    const M = window.M;

    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }



  render() {
    return (
      <div>
        <nav className="black">
          <div className="nav-wrapper">
            <a
              href="#"
              data-target="slide-out"
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </a>
            <div className="input-field right col s12">
              <input id="search" type="search" required />
              <label className="label-icon" for="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src={fondo} alt="background"></img>
              </div>
              <a href="#user">
                <img className="circle" src={profile} alt="profile pic" />
              </a>
              <a href="#name">
                <span className="white-text name">Luciano Sassano</span>
              </a>
              <a href="#email">
                <span className="white-text email">
                  lucianosassano1@gmail.com
                </span>
              </a>
            </div>
          </li>
          <li>
            <a href="https://github.com/LucianoSassano" target="blank">
              <i className="material-icons">account_circle</i>Follow me on
              GitHub!
            </a>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <form>
              <label>
                <input type="checkbox" id="front-check" className="filled-in" />
                <span>Front-end</span>
              </label>
              <label>
                <input type="checkbox" id="back-check"  className="filled-in" />
                <span>Back-end</span>
              </label>
            </form>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
