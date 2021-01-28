import React from 'react';
import PropTypes from "prop-types";
import Header from '../Header/Header';
import MessageField from '../MessageField/MessageField';
import ChatList from '../ChatList/ChatList';
import './Layout.scss';

export default class Layout extends React.Component {
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
            <div className="layout">
               <Header chatId={ this.props.chatId } profileId={this.props.profileId} />
               <div className="layout-canvas">
                   <div className="layout-left-side">
                       <ChatList />
                   </div>
                   <div className="layout-right-side">
                       <MessageField chatId={ this.props.chatId } />
                   </div>
               </div>
           </div>
        )
    }
}