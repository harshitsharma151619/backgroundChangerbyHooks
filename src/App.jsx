import { useState } from "react"



function App() {
  let [color,setColor] = useState("black");

  return (
    <>
    <div className='w-full h-screen duration-200 bg-red-500' style={{backgroundColor: color}}>
      <div className="fixed flex w-full justify-center   gap-3 shadow-xl bg-white bottom-12 inset-x-0 px-2 py-2 rounded-2xl ">
        <button 
        onClick={()=>setColor("Green")}
        className="outline-none px-4 m-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"Green"}}>
          Green
        </button>
        <button 
        onClick={()=>setColor("red")}
         className="outline-none px-4 m-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"red"}}>
          red
        </button>
        <button 
        onClick={()=>setColor("yellow")}
        className="outline-none m-4 px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>
          yellow
        </button>
        <button
        onClick={()=>setColor("white")}
         className="outline-none m-4 px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}>
          white
        </button>
        <button 
        onClick={()=>setColor("black")}
         className="outline-none m-4 px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>
          black
        </button>
        <button
        onClick={()=>setColor("gray")}
        className="outline-none m-4 px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"gray"}}>
          gray
        </button>
      </div>
    </div>
    </>
  )
}

export default App
