import axios from 'axios'
import React, { useState } from 'react'

function Update({closeUpdate, users, refreshUsers}) {

  const [userToUpdate, setUserToUpdate] = useState({name: users.name, email: users.email, password: users.password})

  const handleChange = (e)=>{
    setUserToUpdate({...userToUpdate, [e.target.id]: e.target.value})
  }

  const updateUser = async ()=>{
    try{
      await axios.patch(`http://localhost:3000/users/update/${users._id}`, userToUpdate)
      await refreshUsers()
      closeUpdate()
    }
    catch(err){
      console.log("Error updating the user", err)
    }
  }


  return (
    <div className='fixed bg-black opacity-50 h-full inset-0 flex items-center justify-center'>
      <div className='bg-white w-1/2 h-1/2 rounded-md p-5'>
        <h1 className='text-black text-center'>Update</h1>
        <div>
          <div className='flex flex-col mb-5 gap-3'>
            <div>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name='name' className='w-full outline focus:outline-none focus:ring focus:border-blue-500 p-2 text-xl' value={userToUpdate.name} onChange={handleChange}></input>
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='text' id='email' name='email' className='w-full outline focus:outline-none focus:ring focus:border-blue-500 p-2 text-xl' value={userToUpdate.email} onChange={handleChange}></input>
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' className='w-full outline focus:outline-none focus:ring focus:border-blue-500 p-2 text-xl' value={userToUpdate.password} onChange={handleChange}></input>
            </div>
          </div>
          <div className='flex items-center justify-center gap-5'>
            <button className='bg-cyan-700 py-2 px-4 text-white rounded-md w-24' onClick={()=>updateUser()}>Update</button>
            <button className='bg-cyan-700 py-2 px-4 text-white rounded-md w-24' onClick={closeUpdate}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update
