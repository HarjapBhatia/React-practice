import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import First from './First.jsx'

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click here to visit'
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  // ReactDOM is used for rendering and updating of the component tree
  reactElement
  // <React.StrictMode>
  //   {/* <>
  //   <First/> 
  //   <App />
  //   </> */}
  // </React.StrictMode>
)

