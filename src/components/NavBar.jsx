import React, { useEffect, useState } from 'react'
import { getInitials } from './getInitials'
import { Link } from 'react-router-dom'
export default function NavBar() {

      const [logo, setLogo] = useState("")
      useEffect(() => {
        const data = JSON.parse(localStorage.getItem("student"));
        console.log(data.name);
        const lg = getInitials(data.name)
        setLogo(lg)
      }, [])
  return (
     <div className="bg-neutral-900/80 border border-neutral-800">
      <div className="">

      <div className=" text-white h-16  flex gap-4 items-center   w-11/12 mx-auto p-5">
          <div className='font-semibold h-10  w-10 flex justify-center items-center rounded-full bg-linear-to-br  from-blue-500 to-purple-500'>{logo}</div>
          <div className='font-semibold '>Student</div>
          <Link to={"/student"}><div className="p-2 rounded-lg bg-neutral-800">Dashboard</div></Link>
         <Link to={"/student/attendance"}> <div className="">Attendance</div></Link>
          <div className="">Calendar</div>
          <div className="">Chat</div>
          <div className="">More</div>
        </div>
      </div>
  
      </div>
  )
}
