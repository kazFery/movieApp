import React from "react";
import * as api from "../api.js";

export default class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    api.addMovie(this.state).then((res) => {
      if (!res.ok) {
        alert("Error when adding new movie!");
      }
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
