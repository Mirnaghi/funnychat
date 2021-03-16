import React, { useState } from 'react';
import './SignIn.css';

function SignIn() {

    /*
        STATE VARIABLES
    */
    // create state variable for storing username input


    return (
        <form className="signin__form">
           <h1>FUNNY CHAT</h1>
            <input {/* get username and store in state */} placeholder="Enter name to join chat"></input>
            <button { /* sign in user */ }>ENTER CHAT</button>
        </form>
    );
}

export default SignIn;
