import React from "react";
import "./MovieList.css"
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
                {
                    this.props.movies ?
                    (this.props.movies.map(mv => <tr className="movie-row">{mv.title}</tr>)) :
                    null
                }
            </table>
        )
    }
}