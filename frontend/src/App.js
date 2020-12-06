import MovieList from "./components/MovieList";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  render() {
    return <MovieList movies={this.state.movies} />;
  }

  componentDidMount() {
    const api = "http://localhost:3000/movies";

    fetch(api, { method: "GET" })
      .then((res) => res.json())
      .then((movies) => {
        this.setState({ movies: movies });
      });
  }
}

export default App;
