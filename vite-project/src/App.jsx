import { useState } from "react"

export default function App() {

  const [count, setCount] =useState(0)

  return (
    <h1 className="text-4xl font-bold underline">
  <button onClick={()=>setCount(count=>count-1)}>-</button>
  {count}
  <button onClick={()=>setCount(count+1)}>+</button>
    </h1>
  )
}