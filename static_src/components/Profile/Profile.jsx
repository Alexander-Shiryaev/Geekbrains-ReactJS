import React from 'react';
import PropTypes from "prop-types";
import './Profile.scss'

export default class Profile extends React.Component {
    static propTypes = {
        profileId: PropTypes.number,
    };

    render() {
        return(
            <div>
                <img src="https://avatarko.ru/img/avatar/14/multfilm_Futurama_Bender_13773.jpg" alt="img" height="60px" />
            </div>
        )
    }
}