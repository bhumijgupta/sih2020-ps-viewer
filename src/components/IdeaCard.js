import React, { Component } from "react";
import "./IdeaCard.css";

class IdeaCard extends Component {
  state = {
    hover: false
  };
  render() {
    const { title, description } = this.props.idea;
    return (
      <div
        className={this.state.hover ? "card highlight" : "card"}
        onMouseEnter={() => {
          this.setState({ hover: true });
        }}
        onMouseLeave={() => {
          this.setState({ hover: false });
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    );
  }
}

export default IdeaCard;
