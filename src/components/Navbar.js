import React, { Component } from "react";
import fondo from "./imagenes/fondo.jpg";
import profile from "./imagenes/profile.jpeg";
import Card from "./Card";

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
        <nav class="black">
          <div className="nav-wrapper">
            <a
              href="#"
              data-target="slide-out"
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </a>
            <div class="input-field right col s12">
              <input id="search" type="search" required />
              <label class="label-icon" for="search">
                <i class="material-icons">search</i>
              </label>
              <i class="material-icons">close</i>
            </div>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src={fondo}></img>
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
                <input type="checkbox" id="front-check" class="filled-in" />
                <span>Front-end</span>
              </label>
              <label>
                <input type="checkbox" id="back-check" onclick={alert("hola")} class="filled-in" />
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
