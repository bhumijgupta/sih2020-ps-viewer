import React, { Component } from "react";
import IdeaCard from "./IdeaCard";
import Loader from "./Loader";

class IdeasList extends Component {
  constructor(props) {
    super(props);
    this.divToFocus = React.createRef();
  }

  componentDidUpdate = () => {
    if (this.props.ideas.length > 0) {
      this.scrollToDiv();
    }
  };

  scrollToDiv = () => {
    if (this.divToFocus.current) {
      console.log("object");
      this.divToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  };
  generateAllCards = () =>
    this.props.ideas.map(idea => {
      return <IdeaCard idea={idea} key={idea._id} />;
    });
  render() {
    if (this.props.showLoader) return <Loader />;
    else if (this.props.ideas.length === 0) return <div></div>;
    return (
      <div className="card-columns" ref={this.divToFocus}>
        {this.generateAllCards()}
      </div>
    );
  }
}

export default IdeasList;
