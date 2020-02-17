import React, { Component, Fragment } from "react";
import Card from "./Card";


//usar una funcion para la creacion de las cards , que me filtre  en mi state de Card content , el evento que le paso
//si el evento es null creame todas las cards pero si tiene algo filtrame

export default class CardContent extends React.Component {
  constructor(props) {
    super(props);
    this.filterRender1 = this.filterRender1.bind(this);
    this.filterRender2 = this.filterRender2.bind(this);

    this.state = {
      cards1: [
        {
          title: "HTML",
          img: "./imagenes/html5.png",
          langType: "front",
          content:
            "HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing amarkup-based pattern to it ",
          link: "https://html.spec.whatwg.org/multipage/"
        },
        {
          title: "JavaScript",
          img: "./imagenes/js.svg",
          langType: "front",
          content:
            "JavaScript,often abbreviated as JS, is an interpreted programming language that conforms to the ECMAScript specification.JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
          link:
            "https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Qu%C3%A9_es_JavaScript"
        },
        {
          title: "CSS",
          img: "./imagenes/css3.jpg",
          langType: "front",
          content:
            "Cascading Style Sheets (CSS) is a style sheet language usedfor describing the presentation of a document written in markup language like HTML.",
          link: "https://www.w3.org/Style/CSS/"
        }
      ],
      cards2: [
        {
          title: "NodeJs",
          img: "./imagenes/nodeJs.png",
          langType: "back",
          content:
            "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.",
          link: "https://nodejs.org/en/"
        },
        {
          title: "ReactJs",
          img: "./imagenes/reactJs.png",
          langType: "front",
          content:
            "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.",
          link: "https://es.reactjs.org/"
        },
        {
          title: "Python",
          img: "./imagenes/python.jpg",
          langType: "back",
          content:
            "Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código.Se trata de un lenguaje de programación multiparadigma, ya que soporta orientación a objetos, programación imperativa y, en menor medida, programación funcional. Es un lenguaje interpretado, dinámico y multiplataforma.",
          link: "https://www.python.org/"
        }
      ]
    };
  }

  filterRender1() {
    let arrCards1 = this.state.cards1.filter(
      card =>
        card.langType == this.props.language || this.props.language === null
    );

    arrCards1 = this.state.cards1.filter(
      card =>
        card.title.toLowerCase() === this.props.result ||
        this.props.result === ""
    );
    // debo convertir mi object a un string para usar methodos de string sobre el mismo , split para dividir los caracteres y comparar letra por letra
    //contains para chequear la existencia.
    return arrCards1;
  }

  filterRender2() {
    let arrCards2 = this.state.cards2.filter(
      card =>
        card.langType == this.props.language || this.props.language === null
    );

    arrCards2 = this.state.cards2.filter(
      card =>
        card.title.toLowerCase() === this.props.result ||
        this.props.result === ""
    );
    // debo convertir mi object a un string para usar methodos de string sobre el mismo , split para dividir los caracteres y comparar letra por letra
    //contains para chequear la existencia.
    return arrCards2;
  }

  handleChart() {}

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.filterRender1().map((card, key) => (
            <Card
              title={card.title}
              img={card.img}
              content={card.content}
              link={card.link}
              key={key}
            />
          ))}
        </div>
        <div className="row">
          {this.filterRender2().map((card, key) => (
            <Card
              title={card.title}
              img={card.img}
              content={card.content}
              link={card.link}
              key={key}
            />
          ))}
        </div>
      </div>
    );
  }
}
