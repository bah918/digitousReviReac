
import React from "react";

class Card extends React.Component {
  render() {
     let url=`https://image.tmdb.org/t/p/w300/${film.poster_path}`
    return (
      <div>
          
          <h1> {this.props.film.title}</h1>
          <p>{this.props.film.release_date}</p>
          <p>{this.props.film.overview}</p>
          <img src={url}/>
      </div>
    );
  }
}

export default Card;
