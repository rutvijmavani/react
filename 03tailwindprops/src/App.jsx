import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username : 'hitesh chaudhary' ,
    age : 21
  }

  let newArr = [1 , 2, 3]

  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-xl'> Tailwind Test </h1>
      {/* < Card channel = "chai aur code" someObj = {myObj} /> */}
      {/* <Card channel = "chai aur code" someObj = {newArr} /> */}

      <Card username = "chaiaurcode" />
      <Card username = "hitesh chaudhary" btntxt = "click me" />
    </>
  )
}

export default App
