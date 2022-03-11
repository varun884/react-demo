import React,{useState} from 'react'

const TextInput = () => {

    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')

    const [msg,setMsg] = useState('')

    const btnShow = () => {

    }

    const inpChange = (e) => {
        setEmail(e.target.value)
        console.log("working")
        // console.log(email)
        if(e.target.value == 'email@gmail.com') {
            setMsg('Success')
        }
        else {
            setMsg('Invalid')
        }

    }

  return (
    <div>
        <h1>Text Input</h1>

        Email : <input type='text' value={email} onChange={(e) => inpChange(e)} placeholder='Enter Email'/>
        Phone : <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter Phone'/>


        {/* <button onClick={btnShow}>Show</button> */}

        <h1>Email is :- {email}</h1>
        <h1>Phone is :- {phone}</h1>
        <h1>Message :- {msg}</h1>
    </div>
  )
}

export default TextInput