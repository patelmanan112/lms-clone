import React, { useEffect, useState } from 'react'
import { getInitials } from './getInitials'
import { Link } from 'react-router-dom'
import {Camera, Settings , ChevronDown } from 'lucide-react';
export default function NavBar() {

      const [logo, setLogo] = useState("")
      useEffect(() => {
        const data = JSON.parse(localStorage.getItem("student"));
        console.log(data.name);
        const lg = getInitials(data.name)
        setLogo(lg)
      }, [])
  return (
     <div className="bg-neutral-900/80 border border-neutral-800 flex justify-between">
    <div className="w-11/12 flex justify-between items-center mx-auto">
        <div className="">

      <div className=" text-white h-16  flex gap-4 items-center  ">
          <div className='font-semibold h-10  w-10 flex justify-center items-center rounded-full bg-linear-to-br  from-blue-500 to-purple-500'>{logo}</div>
          <div className='font-semibold '>Student</div>
          <Link to={"/student"}><div className="p-2 rounded-lg bg-neutral-800">Dashboard</div></Link>
         <Link to={"/student/attendance"}> <div className="">Attendance</div></Link>
          <div className="">Calendar</div>
          <Link to={'/student/chat-groups'}><div className="">Chat</div></Link>
          <div >
            <button className="flex text-center items-center gap-2">More <ChevronDown size={16} /></button>
            </div>
        </div>
      </div>
      <div className="">
<Settings className='text-white'/>
      </div>
    </div>
  
      </div>
  )
}
