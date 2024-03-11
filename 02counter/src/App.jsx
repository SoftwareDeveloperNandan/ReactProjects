import { useState } from 'react'
import './App.css'

function App() {

  let [myCounter, setCounter] = useState(15);

  let addValue = () => {

    myCounter = myCounter + 1;
    if (myCounter > 20) {
      
      alert("Value is not greater than 20 Please click on remove value...");
      return
      
    }else{

      setCounter( myCounter );
      
    }
  }

  let removeValue = () => {

    myCounter = myCounter - 1;
    if (myCounter < 0) {

      alert("Please click on add button......");
      return;
      
    }else{

      setCounter( myCounter );

    }
    

  }

  return (
    <>
      <h3>Chai aur React with vite....</h3>
      <p>Counter Value: { myCounter } </p>
      <button 
        onClick = { addValue }
      >
        Add Value { myCounter }
      </button>

      <br />
      <br />

      <button 
        onClick = { removeValue }
      >
        Remove Value { myCounter }
      </button>
      <p>Upadated value : { myCounter }</p>
    </>
  )
}

export default App
