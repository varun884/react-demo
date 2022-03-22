import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <Link to='/todo'>Todo</Link>{` `}
        <Link to='/form'>Form</Link>{`  `}
        <Link to='/api'>API</Link>
    </div>
  )
}

export default Navbar