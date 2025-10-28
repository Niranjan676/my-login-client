import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='bg-slate-200 min-h-screen'>
      <div className='flex items-center justify-center w-full h-screen'>
        <div className='w-96 h-auto bg-white rounded-md p-4'>
          <h1 className='text-center text-xl font-bold mb-5'>Login</h1>
          <div className='flex gap-2 flex-col mb-4'>
            <label>Enter your email address</label>
            <input type='text' className='w-full outline focus:outline-none focus:ring focus:border-blue-500 p-2 text-xl'></input>
          </div>
          <div className='flex gap-2 flex-col mb-2'>
            <label>Enter the password</label>
            <input type='password' className='w-full outline focus:outline-none focus:ring focus:border-blue-500 p-2 text-xl'></input>
          </div>
          <p><span className='text-cyan-400 hover:underline underline-offset-3 decoration-black'><Link to='/register'>click here</Link></span> to register</p>
          <button className='text-center bg-cyan-400 w-full py-3 text-2xl hover:text-white mt-8'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
