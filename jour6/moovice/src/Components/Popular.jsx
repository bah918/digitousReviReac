
import React from "react";

class Popular extends React.Component {
  constructor(props){
    super(props);
    this.state={
      movies : []
    };
  }
  componentDidMount=()=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=33d0ed6a66c274ae93491e7b03a8bec7 `)
    .then((res) => res.json())
    .then((laReponseAPI) => {
      console.log(laReponseAPI.results)
      this.setState({

        movies: laReponseAPI.results
      });
      console.log(this.setState.movies);
    });
  }
  
  render() {
    return (
      <div>
          <h1>Popular : les pépites du cinéma</h1>
          <h2>{this.state.movies.map((elem, index)=>{
            {/*<p key={index}><Card film={elem.title}/></p> */}
            return <nav>{elem.title}</nav>
          })}</h2>
      </div>
    );
  }
}

export default Popular;
