import React,{useState,useEffect} from 'react'
import axios from 'axios'

const API = () => {

    const [info,setInfo] = useState({})

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    useEffect(() => {
        // fetch('https://api.github.com/users')
        // .then((res) => res.json())
        // .then((data) => console.log(data))

        // axios.get('https://api.github.com/users')
        //         .then((res) => console.log(res.data))

        getData()

    },[])

    const getData = async () => {
      const res = await axios.get('http://localhost:8900/getdata')
    //   console.log(res.data)
      setInfo(res.data)
    }

    const frmSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:8900/senddata',{email,password})
          console.log(res.data)
        //   setInfo(res.data)
    }
    // const forSubmit =async (e) => {
    //   e.preventDefault()
    //   const res = await axios.post('http://localhost:8900/sendpost'),{address,password})
        

    // }

  return (
    <div>
        <h1>API Integration</h1>
        <div>
            <h2>Name : {info.name}</h2>
            <h2>Age : {info.age}</h2>
        </div>
        <form onSubmit={frmSubmit}>
            Email : <input type='text' value={email} onChange={e => setEmail(e.target.value)} /><br/>
            Password : <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
            <input type='submit' value='Save'/>
        </form>
    </div>
  )
}

export default API