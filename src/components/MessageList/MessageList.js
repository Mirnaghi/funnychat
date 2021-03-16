import React, { useEffect, useRef } from 'react';
import './MessageList.css';
import Message from '../Message/Message';

function MessageList() {
    // ref to dummy div
    const messageEndDiv = useRef(null);

    // auto scroll to end when new message is send or received
    const scrollDown = () => {
        messageEndDiv.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollDown()
    }, [messages])

    return (
            <div className="message-list">
                {
                    /* show all messages to user */
                }
                <div ref={messageEndDiv}></div>
            </div>
        );
}

export default MessageList;
