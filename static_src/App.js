import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    increase = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }));
    };

    render() {
        return (
            <div className="wrapper">
                <span>{this.state.counter}</span>
                <button onClick={this.increase}>CLICK IT!</button>
            </div>
        );
    }
};