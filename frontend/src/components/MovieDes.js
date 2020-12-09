import React from "react";
import "./MovieList.css";
import * as api from "../api.js";

export default class MovieDes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="movie-table">
        <thead>
          <tr className="movie-row">
            <td> Title </td>
            <td> Summary </td>
            <td> Published Date</td>
          </tr>
        </thead>
        {this.props.movies
          ? this.props.movies.map((mv) => (
              <tr className="movie-row">
                <td>{mv.title}</td>
                <td>{mv.summary}</td>
                <td>{mv.published_date}</td>
              </tr>
            ))
          : null}
      </table>
    );
  }
}
