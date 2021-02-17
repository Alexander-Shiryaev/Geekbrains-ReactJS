import React from 'react';

export default class Input extends React.Component {
    state = {
        messages: [{text: "Нормально", sender: "me"}],
    };

    handleChange = (event) => {
        console.log(event.target.value);
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.setState({ messages: [...this.state.messages, { text: message, sender: 'me' }] });
        }
    };

    render() {
        return (
            <input onChange={ this.handleChange } onKeyUp={ (event) => this.handleKeyUp(event, 'Нормально') } />
        )
    }

}