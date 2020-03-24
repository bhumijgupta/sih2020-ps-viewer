import React, { Component } from "react";
import "./JumboTron.css";
import Form from "./Form";

class JumboTron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div>
          <h1 className="text-center display-5">
            SIH 2020 Problem Statement Viewer
          </h1>
          <p className="lead text-center">
            A user friendly interface to view SIH 2020 problem statements
          </p>
        </div>
        <Form
          onFormSubmit={this.props.onFormSubmit}
          disableForm={this.props.disableForm}
        />
      </div>
    );
  }
}

export default JumboTron;
