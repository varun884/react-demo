import React,{useState,useEffect} from 'react'

const Effect = () => {

    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    // RUNS ON EVERY RENDER
    // useEffect(() => {
    //     console.log("useEffect Called")
    // })

    // RUNS ON PAGE LOAD
    // useEffect(() => {
    //     console.log("useEffect Called")
    // },[])

    // RUNS ON PAGE LOAD
    useEffect(() => {
        console.log("useEffect Called")
    },[count])

    const btnPress = () => {
        setCount(count => count+1)
    }

    const btnPress2 = () => {
        setName('ram')
    }

  return (
    <div>
        <h1>useEffect Hook</h1>
        <button onClick={btnPress}>Click Me</button>
        <h2>Count : {count}</h2>
        <button onClick={btnPress2}>Click Me</button>
        <h2>Name : {name}</h2>
    </div>
  )
}

export default Effect