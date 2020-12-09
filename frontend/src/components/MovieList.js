import React from "react";
import "./MovieList.css";
import MovieDes from "./MovieDes.js";
import * as api from "../api.js";
import { Route, Link, BrowserRouter } from "react-router-dom";

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <table className="movie-table">
          <thead>
            <tr className="movie-row">Title</tr>
          </thead>
          {this.props.movies
            ? this.props.movies.map((mv) => (
                <tr className="movie-row">
                  <td>
                    <Link to="/MovieDes">{mv.title}</Link>
                  </td>
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
        <Route path="/MovieDes" component={MovieDes} />
      </BrowserRouter>
    );
  }
}
