import React, { Component } from "react";
import IdeaCard from "./IdeaCard";

class IdeasList extends Component {
  generateAllCards = () =>
    this.props.ideas.map(idea => {
      return <IdeaCard idea={idea} key={idea._id} />;
    });
  render() {
    if (this.props.ideas === []) return <div></div>;
    return <div className="card-columns">{this.generateAllCards()}</div>;
  }
}

export default IdeasList;
