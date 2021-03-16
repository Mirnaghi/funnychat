import React, { useState } from 'react';
import './SignIn.css';

function SignIn({ handleClick }) {

    const [nameInput, setNameInput] = useState('');


    return (
        <form className="signin__form">
           <h1>FUNNY CHAT</h1>
            <input onChange={(e) => {setNameInput(e.target.value)}} placeholder="Enter name to join chat"></input>
            <button onClick={(e) => {
                e.preventDefault();
                handleClick(nameInput);
            }}>SUBMIT</button>
        </form>
    );
}

export default SignIn;
