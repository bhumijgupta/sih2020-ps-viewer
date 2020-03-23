import React, { Component } from "react";
import "./Form.css";

const hardwareTech = [
  "miscellaneous",
  "clean water",
  "smart communication",
  "sustainable environment",
  "robotics & drones",
  "security & surveillance",
  "agriculture and rural development",
  "smart cities",
  "healthcare & biomedical devices",
  "smart vehicles",
  "energy / renewable energy",
  "food technology",
  "waste management",
  "smart education",
  "travel and tourism",
  "smart textiles",
  "sports and fitness",
  "software - web app development"
];
const softwareTech = [
  "smart communication",
  "healthcare & biomedical devices",
  "miscellaneous",
  "smart vehicles",
  "software - web app development",
  "energy / renewable energy",
  "agriculture and rural development",
  "robotics & drones",
  "software - mobile app development",
  "waste management",
  "security & surveillance",
  "finance",
  "smart cities",
  "travel and tourism",
  "smart education",
  "sustainable environment",
  "food technology",
  "smart textiles",
  "sports and fitness"
];

class Form extends Component {
  state = {
    category: "",
    technology: "",
    disabled: true
  };
  getTechnologyList = () => {
    if (this.state.category === "") return [];
    else if (this.state.category === "software") {
      return softwareTech.map(technology => {
        return (
          <option value={technology} key={technology}>
            {technology}
          </option>
        );
      });
    } else {
      return hardwareTech.map(technology => {
        return (
          <option value={technology} key={technology}>
            {technology}
          </option>
        );
      });
    }
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onFormSubmit({
            category: this.state.category,
            technology: this.state.technology
          });
        }}
      >
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <select
              value={this.state.category}
              className="form-control"
              id="category"
              onChange={e => {
                this.setState({ category: e.target.value, disabled: false });
              }}
            >
              <option disabled value="">
                Select a category
              </option>
              <option value="software">Software</option>
              <option value="hardware">Hardware</option>
            </select>
          </div>
          <div className="col-md-6 col-sm-8">
            <select
              value={this.state.technology}
              className="form-control"
              id="technology"
              onChange={e => {
                this.setState({ technology: e.target.value });
              }}
              disabled={this.state.disabled}
            >
              <option disabled value="">
                Select a technology
              </option>
              {this.getTechnologyList()}
            </select>
          </div>
          <div className="col-md-2 col-sm-12">
            <button
              className="btn btn-light w-100"
              disabled={this.state.disabled}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
