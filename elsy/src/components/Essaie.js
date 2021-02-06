
// HOME.JSX :
import React from 'react';
import Button from './components/Button';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = { // ici : le state contient la donnée "color"
            color: "red";
        };
    }

    changeColor = () => { // cette fonction change la valeur de "color" dans le state
        console.log("time to change the color !");
        this.setState({
            color: "blue";
        });
    }

    render() {
        return (
            <div>
		<h1 style={{color: this.state.color}}>Hello guys !</h1>
                <MagicButton onClick={() => this.changeColor()} />
            </div>
        );
    }
}

export default Home;
