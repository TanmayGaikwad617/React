import { useState } from 'react'
import './index.css'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="h-svh w-svw duration-200 "
    style={{backgroundColor:color}}
    >

       <div className="h-22 flex flex-wrap  justify-center gap-1 shadow-xl bg-white px-3 py-2 rounded-3xl text-black" 
            ><h1>BackGround Changer</h1></div>
    </div>
    
      <div className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2"
      >
            <div className="flex flex-wrap  justify-center gap-1 shadow-xl bg-white px-3 py-2 rounded-3xl " 
            >
              <button 
              onClick={() => setColor("black")}
              className="outline-none px-2 py-1
              rounded-full text-white shadow-lg"
              style={{backgroundColor:"black"}} >
                Black
              </button>

              <button 
              onClick={() => setColor("green")}
              className="outline-none px-2 py-1
              rounded-full text-white shadow-lg"
              style={{backgroundColor:"green"}} >
                Green
              </button>

              <button 
              onClick={() => setColor("yellow")}
              className="outline-none px-2 py-1
              rounded-full text-black
              shadow-lg"
              style={{backgroundColor:"yellow"}} >
                Yellow
              </button>

              <button 
              onClick={() => setColor("pink")}
              className="outline-none px-2 py-1
              rounded-full text-white shadow-lg"
              style={{backgroundColor:"Pink"}} >
                Pink
              </button>

              <button 
              onClick={() => setColor("red")}              
              className="outline-none px-2 py-1
              rounded-full text-white shadow-lg"
              style={{backgroundColor:"red"}} >
                red
              </button>

              <button
              onClick={() => setColor("blue")}
              className="outline-none px-2 py-1
              rounded-full text-white shadow-lg"
              style={{backgroundColor:"blue"}} >
                Blue
              </button>
            </div>
      </div>
    </> 

    

    
  );
}

export default App
