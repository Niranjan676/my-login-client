import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get logged-in user details from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("User from localStorage:", storedUser);
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className='col-span-1 bg-cyan-700 flex justify-center h-full'>
      <div className='py-5 text-white text-center'>
        <div>
        <img
            src={
              user?.image
                ? `http://localhost:3000/uploads/${user.image}`
                : './image/avatar/avatar.jpg'
            }
          />
          <h1 className='text-lg font-semibold'>
            {user?.name ? user.name : "Guest"}
          </h1>
        </div>
        <div className='flex flex-col gap-4 mt-6'>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/users">Users</Link>
          <Link to="/">Logout</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
