
import React from "react";

class Box extends React.Component {
   affiche(){
         if(this.props.icon !== "local_drink"){
           return (<input type="range" min={this.props.minmin} max={this.props.maxmax} value={this.props.value} onInput={this.props.onChange} className="form-range"></input>);
        }
   }

    render() {
        const { color, icon, value, unit } = this.props;
            return (
                <div className="box col-sm-3 col-6">
                    <span className="material-icons" style={{ color: color, fontSize: 100 }}>
                        {icon}
                    </span>
                    <p>{value} {unit}</p>
                     {this.affiche()}
                </div>
                )} 
}
export default Box;
