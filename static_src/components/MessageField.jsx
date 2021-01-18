import React from 'react';
import Message from './Message';

import './MessageField.css';

export default class MessageField extends React.Component {
    state = {
        messages: ["Привет!", "Как дела?"],
        author: ['Автор']
    };

    handleClick = () => {
        this.setState({ messages: [...this.state.messages, 'Блин, как сделать автора?'] });
    };

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={index} text={text} />));


        return <div className='message'>
            <div>
                <img className='message__img' src='https://yt3.ggpht.com/a/AATXAJydJwHfUeMRt7VxuHM1KZC6SC_ZSiq1F2YXbEI7=s900-c-k-c0xffffffff-no-rj-mo' alt='img' height='50px'/>
                {this.state.author}
            </div>
            <div>
                <div>{messageElements}</div>
                <button onClick={this.handleClick}>Отправить сообщение</button>
            </div>
        </div>

    };

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() =>
                this.setState(
                    { messages: [...this.state.messages, 'Не приставай ко мне, я робот!'] }),
                1000);
        }
    }
}
