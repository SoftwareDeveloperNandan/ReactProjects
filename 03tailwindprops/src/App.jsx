import './App.css'
import Card from './Components/Card'

function App() {
  let myObj = {
    userName: "Nandan Pandit",
    age: 25
  }

  let myArr = [1, 2, 3]

  return (
    <>
     <h1 className='bg-green-200 text-black p-4 rounded-xl mb-3'>Hello Tailwind CSS.</h1>
      <Card userName = "Nandan Pandit" btnText = "Click me"/>
      <Card userName = "Chandan Pandit" btnText = "Visit me"/>
    </>
  )
}

export default App
