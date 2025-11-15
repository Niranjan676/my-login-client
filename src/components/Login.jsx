import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [loginuser, setLoginuser] = useState({email: "", password: ""})
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  const handlechange = (e)=>{
    setLoginuser({...loginuser, [e.target.id]: e.target.value})
  }

  const userLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3000/users/login', loginuser);
      localStorage.setItem("user", JSON.stringify(res.data.data));
      setMessage(res.data.message); // backend's message (e.g. "Login successful")
      setTimeout(()=>{
        navigate('/dashboard')
      }, 2000)
    } catch (err) {
      // if backend sends 400 or 500 response
      console.log("Error", err);
      setMessage(err.response?.data?.message || "Invalid user email or password");
    }
  };

  return (
    <div className='bg-slate-200 min-h-screen'>
      <div className='flex items-center justify-center w-full h-screen'>
        <div className='w-96 h-auto bg-white rounded-md p-4'>
          <h1 className='text-center text-xl font-bold mb-5'>Login</h1>
          <div className='flex gap-2 flex-col mb-4'>
            <label htmlFor='email'>Enter your email address</label>
            <input type='text' id='email' value={loginuser.email} className='w-full outline focus:outline-none focus:ring focus:border-blue-500 p-2 text-xl' onChange={handlechange}></input>
          </div>
          <div className='flex gap-2 flex-col mb-2'>
            <label htmlFor='password'>Enter the password</label>
            <input type='password' id='password' value={loginuser.password} className='w-full outline focus:outline-none focus:ring focus:border-blue-500 p-2 text-xl' onChange={handlechange}></input>
          </div>
          {message === "Login successful" ? <p className='text-green-600'>{message}</p>: <p className='text-red-600'>{message}</p>}
          <p><span className='text-cyan-400 hover:underline underline-offset-3 decoration-black'><Link to='/register'>click here</Link></span> to register</p>
          <button className='text-center bg-cyan-400 w-full py-3 text-2xl hover:text-white mt-8' onClick={userLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
