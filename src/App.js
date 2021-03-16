import React, { useState, useEffect } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import MessageList from './components/MessageList/MessageList';
import MessageInputForm from './components/MessageInputForm/MessageInputForm';
import db from './services/firebase.js';
import firebase from 'firebase';

function App() {
  /*
    STATE VARIABLES
  */
  // create state for storing new user


  // create state for storing message that user typed in


  // create state for storing all messages we got from database (firestore)


  /*
    METHODS
  */


  // create method for removing username from username state


  // crete method for getting user message and store it in message state


  // create method for sending message


  // create component lifecycle method for retrieving messages from database and store in messages state



  return (
    <div className="App">
        <SignIn handleClick={ /* you should sign user in */ } />
      <div className="container">
        <header>
          <h1>Welcome {/* username in here */}</h1>
          <button onClick={/* user should exit chat when clicked */}>EXIT CHAT</button>
        </header>
        <MessageList {/* pass username and messages as props */}/>
        <MessageInputForm handleClick={/* send user`s message */} handleChange={/* get user message */}/>
      </div>
    </div>
  );
}

export default App;
