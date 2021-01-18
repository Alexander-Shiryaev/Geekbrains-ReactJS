import React from 'react';
import PropTypes from 'prop-types';

export default class Author extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render () {
        return <div>{ this.props.text }</div>
    }
}