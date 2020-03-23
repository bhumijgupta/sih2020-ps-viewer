import React, { Component } from "react";
import JumboTron from "./JumboTron";
import sihApi from "../apis/sih";
import IdeasList from "./IdeasList";

class App extends Component {
  state = {
    ideas: []
  };
  onFormSubmit = async ({ category, technology }) => {
    let rawIdeas = await sihApi.post("/", {
      category,
      technology
    });
    this.setState({ ideas: rawIdeas.data.body });
  };
  render() {
    return (
      <div>
        <JumboTron onFormSubmit={this.onFormSubmit} />
        <div className="container">
          <IdeasList ideas={this.state.ideas} />
        </div>
      </div>
    );
  }
}

export default App;
