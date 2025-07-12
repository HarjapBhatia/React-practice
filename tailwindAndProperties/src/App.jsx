import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card songName = "Shape Of You" artistName = "Ed Sheeran" />
      <Card songName = "What Do You Mean?" artistName = "Justin Bieber" />
    </>
  )
}

export default App
   