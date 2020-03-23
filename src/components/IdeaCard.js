import React, { Component } from "react";

class IdeaCard extends Component {
  render() {
    const { title, description } = this.props.idea;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    );
  }
}

export default IdeaCard;
