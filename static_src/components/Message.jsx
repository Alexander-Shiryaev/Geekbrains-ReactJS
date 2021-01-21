import React from 'react';

export default function Message({ message }) {

    return (
        <div className='message-item'>{message.author}: {message.text}</div>
    )
}