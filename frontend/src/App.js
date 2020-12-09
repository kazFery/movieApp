import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";
import React from "react";
import * as api from "./api.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
    this.loadMovies = this.loadMovies.bind(this);
  }

  render() {
    return (
      <div>
        <MovieList
          movies={this.state.movies}
          onDelete={() => this.loadMovies()}
        />
        <MovieForm onAdd={(movie) => this.loadMovies()} />
      </div>
    );
  }

  loadMovies() {
    api.getMovies().then((movies) => {
      this.setState({ movies: movies });
    });
  }

  componentDidMount() {
    this.loadMovies();
  }
}

export default App;
