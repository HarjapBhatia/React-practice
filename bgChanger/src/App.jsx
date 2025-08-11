import { useState } from 'react'
function App() {
  const [color, setColor] = useState("white")

  return (
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor: color}}>
      <h1 className='flex justify-center font-bold text-4xl '
      style={{color: color != "white" ? "white" : "black"}}
      >Click the colors below to change the background color</h1>
      <div className='fixed flex flex-wrap justify-center bottom-13 text-red-400 inset-x-0 px-2 py-8'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button
            className='outline-none px-4 py-2 rounded-3xl shadow-lg text-white duration-200 cursor-pointer'
            style={{backgroundColor: "red"}}
            onClick={() => setColor("red")}
          >Red</button>
          <button
            className='outline-none px-4 py-2 rounded-3xl shadow-lg text-white duration-200 cursor-pointer'
            style={{backgroundColor: "blue"}}
            onClick={() => setColor("blue")}
          >Blue</button>
          <button
            className='outline-none px-4 py-2 rounded-3xl shadow-lg text-white duration-200 cursor-pointer'
            style={{backgroundColor: "green"}}
            onClick={() => setColor("green")}
          >Green</button>
          <button
            className='outline-none px-4 py-2 rounded-3xl shadow-lg text-white duration-200 cursor-pointer'
            style={{backgroundColor: "yellow"}}
            onClick={() => setColor("yellow")}
          >Yellow</button>
          <button
            className='outline-none px-4 py-2 rounded-3xl shadow-lg text-white duration-200 cursor-pointer'
            style={{backgroundColor: "gray"}}
            onClick={() => setColor("gray")}
          >Gray</button>
          <button
            className='outline-none px-4 py-2 rounded-3xl shadow-lg text-white duration-200 cursor-pointer'
            style={{backgroundColor: "black"}}
            onClick={() => setColor("black")}
          >Black</button>
          <button
            className='outline-1 px-4 py-2 rounded-3xl shadow-lg text-black duration-200 cursor-pointer'
            style={{backgroundColor: "white"}}
            onClick={() => setColor("white")}
          >White</button>

        </div>
      </div>
    </div>
  )
}

export default App
