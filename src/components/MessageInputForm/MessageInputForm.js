import React from 'react';
import './MessageInputForm.css';

function MessageInputForm({ handleChange, handleClick }) {
    return (
          <form className="message-input-form">
              <input className="message-input" placeholder="Type message..." onChange={handleChange}/>
              <button className="send-button" onClick={handleClick}>SEND MESSAGE</button>
          </form>
        );
}

export default MessageInputForm;
