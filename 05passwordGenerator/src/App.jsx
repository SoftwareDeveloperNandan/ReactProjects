import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState("false");
  const [charAllowed, setCharAllowed] = useState("false");
  const [password, setPassword] = useState("");
  // Reference useRef
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(function () {
    let pass ="" ;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if ( numberAllowed ) str += "0123456789" ;
    if ( charAllowed ) str +="!@#$%^&*()~{}[]+=/" ;

    for (let i = 0; i < length; i++) {

      let char = Math.floor( Math.random() * str.length + 1 ) ;
      pass += str.charAt( char );
      
    }
    setPassword( pass );

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect( () => {
    passwordGenerator()
  }, [numberAllowed, charAllowed, passwordGenerator, length])

  return (
    <>
      
      <div className="bg-gray-700 w-full max-w-lg mx-auto shadow-md rounded-lg p-4 my-8 text-orange-700">

        <h1 className="text-3xl my-3 text-center"> Password Generator </h1>

        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4 ">
          <input
          type="text"
          value={password}
          placeholder="Password"
          className="outline-none w-full px-3 py-2"
          ref={passwordRef}
          readOnly
          />
          <button 
            className="outline-none bg-blue-600 text-white px-3 py-1"
            onClick={ copyPasswordToClipboard }
          >Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2" >

          <div className="flex items-center gap-x-2">
            <input 
              type="range" 
              min={10}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={ (e) => {setLength(e.target.value)} }
              />
              <label> Length : {length} </label>
          </div>
          
          <div className="flex items-center gap-x-3">
            <input 
            type="checkbox" 
            defaultChecked = {numberAllowed}
            id="numberInput"
            onChange={ () => {
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-3">
            <input 
            type="checkbox" 
            defaultChecked = {charAllowed}
            id="numberInput"
            onChange={ () => {
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="numberInput">Charectors</label>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
