import React, {useState} from 'react';
import "./css/tailwindBuild.css"

import './App.css';

function App() {
  // light on of state
  const[light, lightFunc] = useState(true)
  // temperature state
  let[temp, tempFunc] = useState(22)


  function LightOff(){
    lightFunc(!light)
  }


  function increment(){
    tempFunc(temp++)
  }

  function decrement(){
    tempFunc(temp--)
    
  }

  return (
    <div className={`h-screen  text-2xl text-center py-4 ${light ? "bg-gray-200":"bg-gray-900"}`}>
    
       <h1 className={`${light ? "text-black" : "text-white"}`}> Light is {light ? 'On' : 'Off'}</h1>
      <button onClick={LightOff} className={` px-6 py-2 my-4 text-white rounded-md block mx-auto ${light ? "bg-red-600" : "bg-blue-600"}`}>{light ? 'Off' : 'On'}</button>
      <h1 className={`${light ? "text-black" : "text-white"}`}>Current temperature is {temp}</h1>

      <button onClick={increment} className="bg-gray-600 px-4 py-2 my-2  text-white rounded-md inline  mx-auto ">+</button>
      <div className="inline-block w-2 h-2 "></div> 
      <button onClick={decrement} className="bg-gray-600 px-5 py-2 my-2  text-white rounded-md inline  mx-auto ">-</button>
    </div>
  );
}

export default App;
