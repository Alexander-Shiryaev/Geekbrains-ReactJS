import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.scss";

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
    profileId: PropTypes.number,
  };

  static defaultProps = {
    chatId: 1,
    profileId: 2,
  };

  render() {
    return (
      <header className="header">
        <Link to="/profile/">
          <span>profile</span>
        </Link>
        <span>Чат {this.props.chatId}</span>
      </header>
    );
  }
}
