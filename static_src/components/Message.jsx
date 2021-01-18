import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div>
                <div className='message-item'>{this.props.author}</div>
                <div className='message-item'>{this.props.text}</div>
            </div>

        )
    }
}
