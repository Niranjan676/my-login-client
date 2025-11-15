import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nvabar from './Nvabar'

function Dashboard() {
  const [userCount, setUserCount] = useState(0)

  // useEffect(() => {
  //   const storedUsers = JSON.parse(localStorage.getItem("users")) || []
  //   setUserCount(storedUsers.length)
  // }, [])

  const getusercount = async () => {
    try{
      const res = await axios.get('http://localhost:3000/users/')
      setUserCount(res.data.data.length)
    }catch(err){
      console.log("Error", err)
    }
  }

useEffect(()=>{
  getusercount()
}, [])

  return (
    <div className='grid h-screen grid-cols-4'>
      <div>
        <Nvabar/>
      </div>
      <div className='col-span-3 bg-slate-200'>
        <div className='mx-5 my-3'>
          <div className='w-48 h-24 bg-green-500 rounded-lg'>
            <h1 className='text-center text-white py-3 text-2xl'>
              Users: {userCount}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
