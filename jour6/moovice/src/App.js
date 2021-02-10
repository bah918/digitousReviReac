
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Favorites from "./Components/Favorites";
import WeeklyBattle from "./Components/WeeklyBattle";
import Weekly from "./Components/Weekly";
import Popular from "./Components/Popular";
import PopularBattle from "./Components/PopularBattle";
//import "./App.css";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/weekly" className="nav-link">Favorites</Link>
              </li>
              <li className="nav-item">
                <Link to="/weekly-battle" className="nav-link">Weekly</Link>
              </li>
              <li className="nav-item">
                <Link to="/popular" className="nav-link">WeeklyBattle</Link>
              </li>
              <li className="nav-item">
                <Link to="/popular-battle" className="nav-link">Popular</Link>
              </li>
              <li className="nav-item">
                <Link to="/favorites" className="nav-link">PopularBattle</Link>
              </li>
            </ul>
          </div>
        </nav>
      </BrowserRouter>
    );
  }
}

export default App;
