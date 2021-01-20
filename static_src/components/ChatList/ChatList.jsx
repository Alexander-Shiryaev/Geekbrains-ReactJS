import React from 'react';
import List from 'material-ui/styles/MuiThemeProvider';
import './ChatList.scss';

export default class ChatList extends React.Component {
    render() {
        return (
            <List>
                <div className="chat-list layout__item">
                    <p>chat 1</p>
                    <p>chat 2</p>
                    <p>chat 3</p>
                    <p>chat 4</p>
                    <p>chat 5</p>
                </div>
            </List>
        )
    }
}