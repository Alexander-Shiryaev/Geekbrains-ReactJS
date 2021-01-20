import React from 'react';
import Header from '../Header/Header';
import MessageField from '../MessageField/MessageField';
import ChatList from '../ChatList/ChatList';
import './Layout.scss';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="layout">
                    <ChatList />
                    <MessageField />
                </div>
            </div>
        )
    }
}