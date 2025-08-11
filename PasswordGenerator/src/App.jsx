import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false) 
  const [charactersAllowed, setCharAllowed] = useState(false) 
  const [password, setPassword] = useState("")
  // useRef hook
  const passwordRef = useRef(null);

  //function to generate password in input
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "1234567890"
    if(charactersAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i=1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charactersAllowed, setPassword])
  // In useCallback(), the 1st argument is the function which you want to run 
  // above array(2nd argument in useCallback) is when any of the values 
  // inside the array will change, the function will run again (callback)


  // function to copy password to clipboard
  const copyPasswordToClipbord = useCallback(()=>{
    // in this we'll use useRef so that we'll get to know when the text is copied
    // overall enhancing user experience
    passwordRef.current?.select(); // this will select whole input box text content
    //you can also select the specific range in text content
    // example : passwordRef.current?.setSelectionRange(0,3); // this will select 3 letters from start

    window.navigator.clipboard.writeText(password)
  },[password])

  // using useEffect for rendering the functions while refreshing
  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charactersAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white font-bold text-center my-3'>Password Generator</h1>
      
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password}
            className='outline-none w-full bg-amber-50 py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef} // for refering, to copying to clipboard 
          />
          
          {/* copy button, we'll use useref for this, it is a reference hook */}
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'
            onClick={copyPasswordToClipbord}
          >Copy</button>
        </div>
        
        {/* it consists of range input and both the checkboxes */}
        <div className='flex text-sm gap-x-5'>
          {/* for length range input  */}
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="">Length: {length} </label>
          </div>

          {/* checkbox for number including */}
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {setNumberAllowed((e) => !e);}}
            />
            <label htmlFor="numberInputf">Include Numbers </label>
          </div>
            
          {/* checkbox for character including */}
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={charactersAllowed}
            id='characterInput'
            onChange={() => {setCharAllowed((e) => !e);}}
            />
            <label htmlFor="characterInput">Include Characters </label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
