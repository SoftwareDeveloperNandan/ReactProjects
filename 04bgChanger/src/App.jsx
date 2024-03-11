import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl p-2">

          <button className="outline-none p-3 bg-red-700 rounded-3xl text-rose-50" onClick={() => {setColor("#C13131")}}>
            Red
          </button>
          <button className="outline-none p-3 bg-yellow-700 rounded-3xl text-rose-50" onClick={() => {setColor("yellow")}}>
            Yellow
          </button>
          <button className="outline-none p-3 bg-green-700 rounded-3xl text-rose-50" onClick={() => {setColor("green")}}>
            Green
          </button>
          <button className="outline-none p-3 bg-blue-700 rounded-3xl text-rose-50" onClick={() => {setColor("blue")}}>
            Blue
          </button>
          <button className="outline-none p-3 bg-pink-700 rounded-3xl text-rose-50" onClick={() => {setColor("#FF8080")}}>
            Rose
          </button>
          <button className="outline-none p-3 bg-red-600 rounded-3xl text-rose-50" onClick={() => {setColor
          ("red")}}>
            Red
          </button>
          <button className="outline-none p-3 bg-black rounded-3xl text-rose-50" onClick={() => {setColor("black")}}>
            Black
          </button>
          <button className="outline-none p-3 bg-orange-500 rounded-3xl text-rose-50" onClick={() => {setColor("orange")}}>
            Orange
          </button>
          <button className="outline-none p-3 bg-white rounded-3xl text-black" onClick={() => {setColor("white")}}>
            White
          </button>
          <button className="outline-none p-3 bg-slate-500 rounded-3xl text-black" onClick={() => {setColor("#91C8E4")}}>
            Sky
          </button>
          <button className="outline-none p-3 bg-lime-500 rounded-3xl text-rose-50" onClick={() => {setColor("#468966")}}>
            Slate Green
          </button>
          <button className="outline-none p-3 bg-rose-700 rounded-3xl text-rose-50" onClick={() => {setColor("#A94438")}}>
            Warm
          </button>
          <button className="outline-none p-3 bg-fuchsia-700 rounded-3xl text-rose-50" onClick={() => {setColor("#C9D7DD")}}>
            Sea
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
