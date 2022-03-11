import {useState} from 'react'

function State() {

  const [count,setCount] = useState(0)
  const [name,setName] = useState('')

  const btnClick = () => {
    setCount(count => count+1)
  }

  const btnClick2 = () => {
    setName('Ram')    
  }



  return (
    <div className="App">
      <h1>Hello React</h1>
      <h2>Count : {count}</h2>
      <button onClick={btnClick}>Increase</button>

      <h2>Name : {name}</h2>
      <button onClick={btnClick2}>Change</button>

      
    </div>
  );
}

export default State;
