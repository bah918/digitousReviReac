
import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div>
          <h1> L'affiche : {this.state.props.movies.poster_path}</h1>
          <h1> Le titre :</h1>
          <h1> L'année de sortie :</h1>
          <h1> La description :</h1>
      </div>
    );
  }
}

export default Card;
