import React, { useState } from 'react';
import './App.css';
import MessageList from './components/MessageList/MessageList';
import MessageInputForm from './components/MessageInputForm/MessageInputForm';

function App() {
  // state for message input
  const [messageInput, setMessageInput] = useState('');

  // for debug
  const [messages, setMessages] = useState([]);

  // get text input from user
  const handleChange = (e) => {
    e.preventDefault();
    setMessageInput(e.target.value);
    console.log(e.target.value)
  }

  // show message to user
  const handleClick = (e) => {
    e.preventDefault();
    setMessages([...messages, messageInput]);
    console.log(messages)
  }


  return (
    <div className="App">
      <MessageList messages={messages}/>
      <MessageInputForm handleClick={handleClick} handleChange={handleChange}/>
    </div>
  );
}

export default App;
