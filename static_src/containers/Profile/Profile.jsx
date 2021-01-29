import React from 'react';
import PropTypes from "prop-types";
import './Profile.scss'

export default class Profile extends React.Component {
    static propTypes = {
        profileId: PropTypes.number,
    };

    state = {name: 'Brendan ', lastname: 'Eich', about: 'I created a Javascript!'};

    render() {
        let userName = this.state.name;

        return(
            <div className='profile-wrapper'>
                <img src="https://avatarko.ru/img/avatar/14/multfilm_Futurama_Bender_13773.jpg" alt="img" height="160px" />
                <span>{this.state.name} {this.state.lastname}</span>
                <p>About: {this.state.about}</p>
            </div>
        )
    }
};

