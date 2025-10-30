import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

  const [login, setLogin] = useState({email: "", password: ""})

  const handleclick = (e) =>{
    setLogin({...login, [e.target.id]: e.target.value})
  }

  const userLogin = () =>{
    axios.post("http://localhost:3000/users/login", users)
    console.log("Login success", res.data)
  }
  return (
    <div className='bg-slate-200 min-h-screen'>
      <div className='flex items-center justify-center w-full h-screen'>
        <div className='w-96 h-auto bg-white rounded-md p-4'>
          <h1 className='text-center text-xl font-bold mb-5'>Login</h1>
          <div className='flex gap-2 flex-col mb-4'>
            <label htmlFor='email'>Enter your email address</label>
            <input type='text' id="email" name="email" value={login.email} className='w-full outline focus:outline-none focus:ring focus:border-blue-500 p-2 text-xl' onClick={handleclick}></input>
          </div>
          <div className='flex gap-2 flex-col mb-2'>
            <label htmlFor='password'>Enter the password</label>
            <input type='password' id="password" name="password" value={login.password} className='w-full outline focus:outline-none focus:ring focus:border-blue-500 p-2 text-xl'></input>
          </div>
          <p><span className='text-cyan-400 hover:underline underline-offset-3 decoration-black'><Link to='/register'>click here</Link></span> to register</p>
          <button className='text-center bg-cyan-400 w-full py-3 text-2xl hover:text-white mt-8' onClick={userLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
