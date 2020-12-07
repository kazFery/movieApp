import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";
import React from "react";
import * as api from "./api.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  render() {
    return (
      <div>
        <MovieList movies={this.state.movies} />
        <MovieForm />
      </div>
    );
  }

  componentDidMount() {
    api.getMovies().then((movies) => {
      this.setState({ movies: movies });
    });
  }
}

export default App;
