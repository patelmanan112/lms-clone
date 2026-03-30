import React from 'react'
import NavBar from './NavBar'
import { useState } from 'react';
export default function Attendance() {
     const [date, setCurrentDate] = useState(new Date());
  return (
    <div className='bg-neutral-950 w-screen h-screen  m-0 p-0'>
      <NavBar/>
    <div className="bg-neutral-900 w-11/12 mx-auto  rounded-xl border border-neutral-800 mt-10">
     <div className="border-b border-neutral-800 p-1">

          <div className="p-4 text-white text-xl  ">
        <h1 >Overview</h1>
       </div>
     </div>
    <div className="p-3">
        <div className="border border-neutral-800 p-3 ">
    <div className="text-white p-2 border-b border-neutral-800">
        <h1 className='text-xl'>Today's Attendance</h1>
        <h1 className='text-sm text-neutral-400'>Date</h1>
    </div>


 <div className="p-4 flex flex-col gap-2">
     <div className="">
            <div className="bg-black text-white p-5 border border-neutral-800 flex justify-between rounded-xl">
                <div className="">
                    <h1>SU0204- OOPS(C++)</h1>
                    <h1 className='text-sm text-neutral-400'>Marked by: Ankita</h1>
                </div>
                <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs border-emerald-800 bg-emerald-950 text-emerald-300">
    Present
                </div>
            </div>
        </div>
  <div className="">
            <div className="bg-black text-white p-5 border border-neutral-800 flex justify-between rounded-xl">
                <div className="">
                    <h1>SU0205- Maths 2</h1>
                     <h1 className='text-sm text-neutral-400'>Marked by: Ankita</h1>
                </div>
                <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs border-emerald-800 bg-emerald-950 text-emerald-300">
    Present
                </div>
            </div>
        </div>
  <div className="">
            <div className="bg-black text-white p-5 border border-neutral-800 flex justify-between rounded-xl">
                <div className="">
                    <h1>SU0202- Node.JS</h1>
                     <h1 className='text-sm text-neutral-400'>Marked by: Ankita</h1>
                </div>
                <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs border-emerald-800 bg-emerald-950 text-emerald-300">
    Present
                </div>
            </div>
        </div>
  <div className="">
            <div className="bg-black text-white p-5 border border-neutral-800 flex justify-between rounded-xl">
                <div className="">
                    <h1>SU0201- ReactJS</h1>
                     <h1 className='text-sm text-neutral-400'>Marked by: Ankita</h1>
                </div>
                <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs border-emerald-800 bg-emerald-950 text-emerald-300">
    Present
                </div>
            </div>
        </div>
 </div>


        </div>

      
    </div>

    </div>


    </div>
  )
}
