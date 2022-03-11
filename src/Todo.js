import React,{useState} from 'react'

const Todo = () => {

    const [todo,setTodo] = useState('')
    
    // const [todos,setTodos] = useState([])

    const [todos,setTodos] = useState({items:[]})

    const frmSubmit = (e) => {
        e.preventDefault()
        var _arr = todos.items
        _arr.push(todo)
        // console.log(_arr)

        // setTodos(_arr)

        // setTodos([...todos,todo])

        setTodos({items:_arr})
    }

  return (
    <div>
        <h1>TODO APP</h1>

        <form onSubmit={frmSubmit}>
            <input type='text' value={todo} onChange={e => setTodo(e.target.value)}/>
            <input type='submit' value='Add Todo'/>
        </form>
            <ol>
            {
                todos.items.map((item,index) => <li>{item}</li>)
            }
            </ol>

    </div>
  )
}

export default Todo