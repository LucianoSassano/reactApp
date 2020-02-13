import React, { Component } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

export default class CardContent extends React.Component {
  constructor(props) {
    super(props);
    this.hideCard = this.hideCard.bind(this);
    console.log(this);
    

    this.state = {
      cards: [
        {
          title: "HTML",
          langType: "front",
          content:
            "HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing amarkup-based pattern to it ",
          link: "https://html.spec.whatwg.org/multipage/"
        },
        {
          title: "JavaScript",
          langType: "front",
          content:
            "JavaScript,often abbreviated as JS, is an interpreted programming language that conforms to the ECMAScript specification.JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
          link:
            "https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Qu%C3%A9_es_JavaScript"
        },
        {
          title: "CSS",
          langType: "front",
          content:
            "Cascading Style Sheets (CSS) is a style sheet language usedfor describing the presentation of a document written in markup language like HTML.",
          link: "https://www.w3.org/Style/CSS/"
        },
        {
          title: "NodeJs",
          langType: "back",
          content:
            "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.",
          link: "https://nodejs.org/en/"
        }
      ]
    };
  
  }
  

  hideCard(langType) {
    this.setState({
      cards: this.state.cards.filter(card => card.langType !== langType)
      
    });
  }




  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.cards.map((card, key) => (
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
