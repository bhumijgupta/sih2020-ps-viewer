import React, { Component } from "react";
import JumboTron from "./JumboTron";
import sihApi from "../apis/sih";
import IdeasList from "./IdeasList";

class App extends Component {
  state = {
    ideas: [],
    showLoader: false
  };
  onFormSubmit = async ({ category, technology }) => {
    this.setState({ ideas: [], showLoader: true });
    let rawIdeas = await sihApi.post("/", {
      category,
      technology
    });
    this.setState({ ideas: rawIdeas.data.body, showLoader: false });
  };
  render() {
    return (
      <div>
        <JumboTron onFormSubmit={this.onFormSubmit} />
        <div className="container">
          <IdeasList
            ideas={this.state.ideas}
            showLoader={this.state.showLoader}
          />
        </div>
      </div>
    );
  }
}

export default App;
