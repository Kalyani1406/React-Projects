import './App.css';

import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';



function App() {
  let passwordCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const numberCharacters = ['0','1','2','3','4','5','6','7','8','9'];
  const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','-','+','='];
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charactersAllowed]);

  const generatePassword = () => {
    if (numberAllowed) {
      passwordCharacters = passwordCharacters.concat(numberCharacters);
    }

    if (charactersAllowed) {
      passwordCharacters = passwordCharacters.concat(specialCharacters);
    }

    let generatedPassword = "";

    for(let i = 0; i < length; i++){
      generatedPassword +=passwordCharacters[Math.floor(Math.random() *  passwordCharacters.length)];
    }

    setPassword(generatedPassword);
    console.log(generatedPassword);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    .then(() => {
      console.log('Password copied to clipboard');
    })
    .catch((err) => {
      console.error('Unable to copy password to clipboard', err);
    });
  };


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-300 text-slate-500">
      <h1 className="text-center my-3 font-bold">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden my-3">
        <input 
          type="text"
          value = {password}
          className='outline-none w-full py-1 px-3' 
          id="password"
          placeholder='Password'
        />
        <button 
          onClick={copyToClipboard}
          className='bg-slate-500 text-white px-3 py-0.5 shrink-0'>
          <FontAwesomeIcon icon={ faCopy } />
        </button>
      </div>
      <div className="flex text-sm gap-x-2 my-3">
        <div className="flex items-center gap-x-1">
          <input 
            type="range"
            min={8}
            max={16}
            value={length}
            name="length"
            id="" 
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            checked={numberAllowed}
            onChange={ () => {
              setNumberAllowed((prev) => !prev)
            }}
            name="number"
            id="" 
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            checked={charactersAllowed}
            onChange={ () => {
              setCharactersAllowed((prev) => !prev)
            }}
            name="character"
            id="" 
          />
          <label htmlFor="character">Characters</label>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <button onClick={generatePassword} className='bg-slate-500 text-white px-4 py-1 shrink-0 rounded-2xl'>
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
