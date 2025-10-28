import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Users() {
  const [users, setUsers] = useState([])

  const getUsers = async () =>{
    try{
      const res = await axios.get('http://localhost:3000/users/')
      setUsers(res.data.data)
    }catch(err){
      console.log("Error", err)
    }
  }

  useEffect(()=>{
    getUsers()
  }, [])

  return (
    <div className='grid h-screen grid-cols-4'>
      <div className='col-span-1 bg-cyan-700 flex justify-center'>
        <div className='py-5'></div>
      </div>
      <div className='col-span-3 bg-slate-200'>
        <div className='mx-5 my-3'>
            <div className='mb-5'>
              <h1 className='text-2xl font-bold text-center'>USERS</h1>
            </div>
            <div>
              <table className='table-auto border-collapse border border-gray-400 w-full'>
                <thead>
                  <tr>
                    <th className='border border-gray-500'>S.No</th>
                    <th className='border border-gray-500'>Name</th>
                    <th className='border border-gray-500'>Email</th>
                    <th className='border border-gray-500'>Password</th>
                    <th className='border border-gray-500'>Edit</th>
                    <th className='border border-gray-500'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-2">No users found</td>
                  </tr>
                  ) : (users.map((userdata, idx)=>(
                    <tr key={userdata._id}>
                    <td className='border border-gray-500 px-2'>{idx + 1}.</td>
                    <td className='border border-gray-500 px-2'>{userdata.name}</td>
                    <td className='border border-gray-500 px-2'>{userdata.email}</td>
                    <td className='border border-gray-500 px-2'>{userdata.password}</td>
                    <td className='border border-gray-500 px-2'>Edit</td>
                    <td className='border border-gray-500 px-2'>Delete</td>
                  </tr>
                  )))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Users
