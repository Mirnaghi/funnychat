import React from 'react';
import './Message.css';

function Message({ text, send }) {

    let messageAlign = "message-right";

    return (
        <p className={`message ${messageAlign}`}
            style={{ backgroundColor: send ? '#b5179e' : '#f72585'}}
        >{text}</p>);
}

export default Message;
