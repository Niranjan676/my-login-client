import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nvabar from './Nvabar'
import Update from './Update'

function Users() {
  const [users, setUsers] = useState([])
  const [updateUser, setUpdateUser] = useState(null)

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

  const openUpdateUser = (userdata) =>{
    setUpdateUser(userdata)
  }

  const closeUpdateUser = () =>{
    setUpdateUser(null)
  }

  const handleDelete = async (id) =>{
    try{
      await axios.delete(`http://localhost:3000/users/delete/${id}`)
      let userCopy = [...users]
      let userToDelete = userCopy.filter((userId) => userId._id !== id)
      setUsers(userToDelete)
    }catch(err){
      console.log("Error deleting the user", err)
    }
  }

  return (
    <div className='grid h-screen grid-cols-4'>
      <Nvabar />
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
                    <th className='border border-gray-500'>Avatar</th>
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
                    <td className='border border-gray-500 px-2'>{userdata.avatar}</td>
                    <td className='border border-gray-500 px-2 py-2 text-center'><button className='w-20 bg-yellow-500 px-2 py-2' onClick={()=>openUpdateUser(userdata)}>Edit</button></td>
                    <td className='border border-gray-500 px-2 py-2 text-center'><button className='w-20 bg-red-500 text-white px-2 py-2' onClick={()=>handleDelete(userdata._id)}>Delete</button></td>
                  </tr>
                  )))}
                </tbody>
              </table>
            </div>
        </div>
      </div>
      {updateUser && (
        <Update closeUpdate = {closeUpdateUser} users = {updateUser} refreshUsers = {getUsers}/>
      )}
    </div>
  )
}

export default Users
