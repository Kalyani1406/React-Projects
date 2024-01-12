import React,{ useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter]= useState(15);

  const addValue = () => {
    setCounter(counter + 1);
    // setCounter(counter + 1); // batching 
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter ((prevCounter) => prevCounter + 1) // call back function
    // setCounter ((prevCounter) => prevCounter + 1)
    // setCounter ((prevCounter) => prevCounter + 1)
    // setCounter ((prevCounter) => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer: {counter} </p>
    </>  
  );
}

export default App;
