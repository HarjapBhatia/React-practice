import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const addCount = () => {
    if (count==20){
      alert("You have reached the highest limit!")
    }else{
      setCount(count+1);
    }
  }
  const removeCount = () => {
    if (count==0){
      alert("You have reached the lowest limit!")
    }else{
      setCount(count-1);
    }
  }

  return (
    <>
      <h1>Min Limit : 0 , Max Limit : 20</h1>
      <button onClick={addCount}>Add Count : {count}</button>
      <button onClick={removeCount}>Remove Count : {count}</button>
    </>
  )
}

export default App
