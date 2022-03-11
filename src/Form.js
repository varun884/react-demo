import React,{useState} from 'react'

const Form = () => {

    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    const frmSubmit = (e) => {
        e.preventDefault()
        console.log(email,pass)
    }


  return (
    <div>
        <form onSubmit={frmSubmit}>
            Email : <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            Password : <input type='text' value={pass} onChange={(e) => setPass(e.target.value)}/><br />
            <input type='submit' value='Save'/>
        </form>
    </div>
  )
}

export default Form