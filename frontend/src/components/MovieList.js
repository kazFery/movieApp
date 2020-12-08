import React from "react";
import "./MovieList.css";
import * as api from "../api.js";

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="movie-table">
        <thead>
          <tr className="movie-row">Title</tr>
        </thead>
        {this.props.movies
          ? this.props.movies.map((mv) => (
              <tr className="movie-row">
                <td>{mv.title}</td>
                <td>
                  <button
                    onClick={() => {
                      api.deleteMovie(mv.id).then((res) => {
                        this.props.onDelete();
                      });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          : null}
      </table>
    );
  }
}
