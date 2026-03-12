import React, { useEffect, useState } from 'react'
import { getInitials } from './getInitials'

export default function StudentDashboard() {
  const [logo, setLogo] = useState("")
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("student"));
    console.log(data.name);
    const lg = getInitials(data.name)
    setLogo(lg)
  }, [])
  return (
    <div className='bg-neutral-950 w-screen h-screen m-0 p-0'>
      <div className="bg-neutral-900/80">
        <div className=" text-white h-16 border-2 border-amber-400 w-10/12 mx-auto p-2">
          <div className='font-semibold h-10  w-10 flex justify-center items-center rounded-full bg-linear-to-br  from-blue-500 to-purple-500'>{logo}</div>
        </div>
      </div>
    </div>
  )
}
