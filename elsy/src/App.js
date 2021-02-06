

import React from "react";
import Box from "./components/Box";
import './App.css';
import "./styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

export class App extends React.Component {
  constructor(){
    super();
    this.state={
       water : 0,
       heart :120,
       temperature :-10,
       steps :3000,
    }
  }
  recuperValHeart=(e)=>{
          //console.log(e.target.value);
          this.setState({heart:e.target.value})
          //console.log(e.target)
         // console.log(e)
  }
  render() {
      
    
    return (
      <div className="container-fluid">
        <div className="row">
          <p>Heart: {heartMin}</p>
          <p>Temperature: {tempMin}</p>
          <p>Steps: {stepsMin}</p>
        </div>
        <div className="row">
          {/*Water*/}
          <Box  icon={"local_drink"} color={"#3A85FF"} value={1.5} unit={"L"}/>
          {/*Steps*/}

          <Box icon={"directions_walk"} color={"black"} onChange={this.recuperValSteps} minmin={stepsMin} maxmax={stepsMax} value={3000} unit={"steps"}/>
          {/*Heart*/}
          <Box  icon={"favorite"} color={"red"} onChange={this.recuperValHeart} value={this.state.heart} minmin={heartMin} maxmax={heartMax} unit={"bpm"}/>
          {/*Temperature*/}
          <Box  icon={"wb_sunny"} color={"yellow"} value={-10} onChange={this.recuperValTemp}  minmin={tempMin} maxmax={tempMax} unit={"°C"}/>
        </div>
      </div>
    );
  }
}
export default App;