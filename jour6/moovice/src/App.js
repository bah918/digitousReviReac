
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Favorites from "./Components/Favorites";
import WeeklyBattle from "./Components/WeeklyBattle";
import Weekly from "./Components/Weekly";
import Popular from "./Components/Popular";
import PopularBattle from "./Components/PopularBattle";
import Hme from "./Components/Card";
import Home from "./Components/Home";

//import "./App.css";
//33d0ed6a66c274ae93491e7b03a8bec7 
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/favorites" className="nav-link">Favorites</Link>
              </li>
              <li className="nav-item">
                <Link to="/weekly" className="nav-link">Weekly</Link>
              </li>
              <li className="nav-item">
                <Link to="/weeklyBattle" className="nav-link">WeeklyBattle</Link>
              </li>
              <li className="nav-item">
                <Link to="/popular" className="nav-link">Popular</Link>
              </li>
              <li className="nav-item">
                <Link to="/popularBattle" className="nav-link">PopularBattle</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/favorites" component={Favorites}/>
          <Route exact path="/weekly" component={Weekly}/>
          <Route exact path="/weeklyBattle" component={WeeklyBattle}/>
          <Route exact path="/popular" component={Popular}/>
          <Route exact path="/popularBattle" component={PopularBattle}/>
          
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
