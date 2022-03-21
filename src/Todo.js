import React,{useState} from 'react'
import axios from 'axios'

const Todo = () => {

    var [todo,setTodo] = useState('');
    var [todos,setTodos] = useState([]);
    var [btntext,setBtnText] = useState('Add Todo')
    var [mode,setMode] = useState(0)
    var [index,setIndex] = useState(null)
    // arr = ['hi','bye']
    // arr = [{name:'hi',time:'2'}]

    var frmSubmit = async (e) =>{
        e.preventDefault();
        // console.log(todo);

        // var temparr = todos;
        // temparr.push(todo);
        // setTodos(temparr);
        if(mode === 0) {
            var toSend = [...todos,todo]
            setTodos([...todos,todo]);
            setTodo('')
            console.log(todos)
            const res = await axios.post('http://localhost:8900/savetodo',{toSend})

        }
        else if(mode === 1) {
            var _arr = todos
            _arr.splice(index,1,todo)
            setTodos([..._arr])
            setTodo('')
        }
    }


    const btnEdit = (index) => {
        setMode(1)
        setBtnText('Edit Todo')
        setTodo(todos[index])
        setIndex(index)
    }

    const btnDelete = (index) => {
        var _arr = todos
        todos.splice(index,1)
        setTodos([...todos])
    }


  return (
    <div>
        <form onSubmit={frmSubmit} >
            <input type='text' value={todo} onChange={e =>{setTodo(e.target.value) }} />
            <input type='submit' value={btntext} />
        </form>

        <h1>list</h1>

        <ol>
            {
                todos.map(
                    (item,index)=> {
                    return (
                        <>
                            <li>{item}</li>
                            <button onClick={() => btnEdit(index)}>Edit</button>
                            <button onClick={() => btnDelete(index)}>Delete</button>
                        </>
                        )
                    })
            }
        </ol>

    </div>
  )
}

export default Todo