import React from 'react';
import Message from './Message';
import Input from './Input'

import './MessageField.css';

export default class MessageField extends React.Component {
    state = {
        messages: [
            {author: "user", text: "Привет!"}, 
            {author: "user", text: "Как дела?"}
        ],
    };

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    componentDidUpdate(prevProps, prevState) {
        const lastAuthor = this.state.messages[this.state.messages.length - 1].author;
        if (prevState.messages.length < this.state.messages.length && lastAuthor !== 'bot') {
            this.timeout = setTimeout(() => {
                this.handleAddMessage('Не приставай ко мне, я робот!', 'bot')
            }, 1000);
        }
    }

    renderMessage = (message, i) => {
        return (
            <Message message={message} key={i} />
        )
    }

    handleAddMessage = (text, author = 'user') => {
        this.setState(state => ({
            messages: [...state.messages, {text, author}]
        }));
    }

    // handleClick = () => {
    //     this.setState({ messages: [...this.state.messages, 'Блин, как сделать автора?'] });
    // };

    render() {
        // const messageElements = this.state.messages.map((text, index) => (
        //     <Message key={index} text={text} />));


        return <div className='message'>
            <div>
                {this.state.messages.map(this.renderMessage)}
                <Input onAddMessage={this.handleAddMessage} />
                {/* <div>{messageElements}</div> */}
                {/* <button onClick={this.handleClick}>Отправить сообщение</button> */}
            </div>
        </div>

    };

    // componentDidUpdate() {
    //     if (this.state.messages.length % 2 === 1) {
    //         setTimeout(() =>
    //             this.setState(
    //                 { messages: [...this.state.messages, 'Не приставай ко мне, я робот!'] }),
    //             1000);
    //     }
    // }
}
