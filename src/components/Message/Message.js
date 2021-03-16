import React from 'react';
import './Message.css';

function Message({ text, user, youSent }) {

    let messageAlign = youSent ? "message-right" : "message-left";

    return (
        <p className={`message ${messageAlign}`}
            style={{ backgroundColor: youSent ? '#b5179e' : '#f72585'}}
        >
            {text}
            <p className={`username ${youSent ? 'user-right' : 'user-left'}`}>{user}</p>
        </p>);

}

export default Message;
