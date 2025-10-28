import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {

  const navigate = useNavigate();

  const [users, setUsers] = useState({name: "", email: "", password: ""})
  const [message, setMessage] = useState("")

  const handleChange = (e) =>{
    setUsers({...users, [e.target.id]: e.target.value})
  }

  const addUser = async () =>{
    try{
      await axios.post('http://localhost:3000/users/create', users)
      setMessage("User registered successfully")
      setUsers({name: "", email: "", password: ""})
      setTimeout(()=>{
        navigate('/')
      }, 1000)
    }catch(err){
      console.log("Error", err)
      setMessage("Error creating the user")
    }
  }

  // const handleAddUser = () => {
  //   const userCopy = { ...users }
  
  //   // ✅ Merge previous users from localStorage
  //   const existingUsers = JSON.parse(localStorage.getItem("users")) || []
  
  //   // ✅ Add the new user to the array
  //   const updatedUsers = [...existingUsers, userCopy]
  
  //   // ✅ Update state and localStorage
  //   setUserdata(updatedUsers)
  //   localStorage.setItem('users', JSON.stringify(updatedUsers))
  
  //   // ✅ Reset the form fields
  //   setUsers({ name: "", email: "", password: "" })
  // }



  return (
    <div className='bg-slate-200 min-h-screen'>
      <div className='flex items-center justify-center w-full h-screen'>
        <div className='w-96 h-auto bg-white rounded-md p-4'>
          <h1 className='text-center text-xl font-bold mb-5'>Register</h1>
          <div className='flex gap-2 flex-col mb-4'>
            <label htmlFor='name'>Enter your name</label>
            <input type='text' id='name' name='name' className='w-full outline focus:outline-none focus:ring focus:border-blue-500 p-2 text-xl' value={users.name} onChange={handleChange}></input>
          </div>
          <div className='flex gap-2 flex-col mb-4'>
            <label htmlFor='email'>Enter your email address</label>
            <input type='text' id='email' name='email' className='w-full outline focus:outline-none focus:ring focus:border-blue-500 p-2 text-xl' value={users.email} onChange={handleChange}></input>
          </div>
          <div className='flex gap-2 flex-col mb-2'>
            <label htmlFor='password'>Enter the password</label>
            <input type='password' id='password' name='password' className='w-full outline focus:outline-none focus:ring focus:border-blue-500 p-2 text-xl' value={users.password} onChange={handleChange}></input>
          </div>
          {message && <p className="text-sm text-red-600 mb-3">{message}</p>}
          <p><span className='text-cyan-400 hover:underline underline-offset-3 decoration-black'><Link to='/'>click here</Link></span> to login</p>
          <button className='text-center bg-cyan-400 w-full py-3 text-2xl hover:text-white mt-8' onClick={addUser} >Register</button>
        </div>
      </div>
    </div>
  )
}

export default Register
