import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import MessageList from './components/MessageList/MessageList';
import MessageInputForm from './components/MessageInputForm/MessageInputForm';
import db from './services/firebase.js';
import firebase from 'firebase';

function App() {
  // logged in user
  const [username, setUsername] = useState('');

  // state for message input
  const [messageInput, setMessageInput] = useState('');

  // all messages
  const [messages, setMessages] = useState([]);

  // get username
  const handleUserName = (username) => {
    setUsername(username);
    console.log(username)
  }

  // sign in user with username

  // sign out user
  const signOut = () => {
    setUsername('');
  }

  // get text input from user
  const handleChange = (e) => {
    e.preventDefault();
    setMessageInput(e.target.value);
    console.log(e.target.value);
  }

  // send message
  const sendMessage = (e) => {
    e.preventDefault();

    if(messageInput) {
        db.collection('funnyMessages').add({
          text: messageInput,
          username: username,
          date: firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    // clear input field after sending message
    e.target.form.message_input.value = "";
    setMessageInput('');
  }

  // listener for data in database
  useEffect(() => {
    db.collection('funnyMessages')
      .orderBy('date')
      .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    })
  }, [])


  return (
    <div className="App">
    { !username ? <SignIn handleClick={handleUserName} /> :
      <div className="container">
        <header>
          <h1>Welcome {username}</h1>
          <button onClick={signOut}>EXIT CHAT</button>
        </header>
        <MessageList username={username} messages={messages}/>
        <MessageInputForm handleClick={sendMessage} handleChange={handleChange}/>
      </div>}
    </div>
  );
}

export default App;
