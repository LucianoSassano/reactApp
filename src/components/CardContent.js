import React, { Component } from "react";
import Card from "./Card";



export default class CardContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     cards : [
        { title :"HTML",langType:"front", content : "mi contenido" ,link :"https://stackoverflow.com/questions/49081549/passing-object-as-props-to-jsx"},
        { title :"JavaScript",langType:"front",content : "mi contenido" ,link :"https://stackoverflow.com/questions/49081549/passing-object-as-props-to-jsx"},
        { title :"CSS",langType:"front",content : "mi contenido" ,link :"https://stackoverflow.com/questions/49081549/passing-object-as-props-to-jsx"},
        { title :"NodeJs",langType:"back",content : "mi contenido" ,link :"https://stackoverflow.com/questions/49081549/passing-object-as-props-to-jsx"}
      ]
    }
  }

  hideCard(langType){
    this.setState({cards : this.state.cards.filter(card => card.langType)})
  }

  render() {
    return (
    
    <div className="container"> 

    { this.state.cards.map( card => 

        <Card
            title= {card.title} 
            img = {card.img}
            content = {card.content} 
            link = {card.link}
        />
    ) }
        
     </div>
    );
  }
}
