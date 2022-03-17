import React,{useEffect} from 'react'
import axios from 'axios'

const API = () => {

    useEffect(() => {
        // fetch('https://api.github.com/users')
        // .then((res) => res.json())
        // .then((data) => console.log(data))

        // axios.get('https://api.github.com/users')
        //         .then((res) => console.log(res.data))

        getData()

    },[])

    const getData = async () => {
      const res = await axios.get('https://api.github.com/users')
      console.log(res.data)
    }

  return (
    <div>
        <h1>API Integration</h1>
    </div>
  )
}

export default API