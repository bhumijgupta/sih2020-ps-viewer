import React, { Component } from "react";
import JumboTron from "./JumboTron";
import sihApi from "../apis/sih";
import IdeasList from "./IdeasList";

class App extends Component {
  state = {
    ideas: [],
    showLoader: false,
    category: "",
    technology: ""
  };
  onFormSubmit = async ({ category, technology }) => {
    this.setState({ ideas: [], showLoader: true, category, technology });
    let rawIdeas = await sihApi.post("/", {
      category,
      technology
    });
    this.setState({
      ideas: rawIdeas.data.body,
      showLoader: false
    });
  };
  render() {
    return (
      <div>
        <JumboTron
          onFormSubmit={this.onFormSubmit}
          disableForm={this.state.showLoader}
        />
        <div className="container IdeaListContainer">
          <IdeasList
            category={this.state.category}
            technology={this.state.technology}
            ideas={this.state.ideas}
            showLoader={this.state.showLoader}
          />
        </div>
      </div>
    );
  }
}

export default App;
