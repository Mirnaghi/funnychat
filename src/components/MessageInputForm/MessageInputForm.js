import React from 'react';
import './MessageInputForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function MessageInputForm() {
    return (
          <form className="message-input-form">
              <input
                name="message_input" 
                className="message-input"
                placeholder="Type message..."
                {/* handle user`s message input */}/>
              <button className="send-button" {/* send message */}>
                <FontAwesomeIcon icon={faPaperPlane} style={{width: 20, height: 20}}/>
              </button>
          </form>
        );
}

export default MessageInputForm;
