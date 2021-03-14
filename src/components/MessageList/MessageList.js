import React from 'react';
import './MessageList.css';
import Message from '../Message/Message';

function MessageList({ messages }) {
    return (
            <div className="message-list">
                {messages.map(msg => {console.log(msg); return  <Message text={msg} />})}
            </div>
        );
}

export default MessageList;
