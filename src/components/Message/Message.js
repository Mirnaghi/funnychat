import React from 'react';
import './Message.css';

function Message() {

    let messageAlign = youSent ? "message-right" : "message-left";

    return (
        <p className={`message ${messageAlign}`}
            style={{ backgroundColor: youSent ? '#b5179e' : '#f72585'}}
        >
            { /* show message content */ }
            <p className={`username ${youSent ? 'user-right' : 'user-left'}`}>
                {/* show sender`s name */}
            </p>
        </p>);

}

export default Message;
