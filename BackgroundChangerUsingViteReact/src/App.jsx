import { useState } from 'react'
import './App.css'

function App() {

  const [background, setBackground] = useState ('olive');


  return (
    <div className='w-screen h-screen duration-200' style={{backgroundColor: background}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl">
          <button 
            onClick={() =>  setBackground('red')} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500'>
              Red
          </button>
          <button 
            onClick={() =>  setBackground('green')} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500'>
              Green
          </button>
          <button 
            onClick={() =>  setBackground('blue')} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500'>
              Blue
          </button>
          <button 
            onClick={() =>  setBackground('yellow')} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-500'>
              Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
