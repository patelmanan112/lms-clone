import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

export default function StudentDashboard() {
  const data = localStorage.getItem("student");
  const user = data ? JSON.parse(data) : null;
  // console.log(user);
  const totalPer = Math.ceil(((user.attendance.bonus + user.attendance.present) / user.attendance.total) * 100)
  const totalPer1 = Math.ceil(((user.attendance.present) / user.attendance.total) * 100)
  return (
    <div className='bg-neutral-950 min-w-screen  m-0 p-0'>
      <NavBar />
      <div className="w-11/12 mx-auto grid grid-cols-3 gap-5 mt-8  ">

        <div className="bg-neutral-900  p-4 rounded-xl border border-neutral-800 ">
          <h2 className='text-xl text-neutral-400'>University</h2>
          <h1 className='text-3xl text-white'>{user.university}</h1>
        </div>
        <div className="bg-neutral-900  p-4 rounded-xl border border-neutral-800 ">
          <h2 className='text-xl text-neutral-400'>UID</h2>
          <h1 className='text-3xl text-white'>{user.uid}</h1>
        </div>
        <div className="bg-neutral-900  p-4 rounded-xl border border-neutral-800 ">
          <h2 className='text-xl text-neutral-400'>Subjects</h2>
          <h1 className='text-3xl text-white'>{user.subjects.length}</h1>
        </div>
      </div>

    <div className="bg-neutral-900 w-11/12 mx-auto mt-8  rounded-xl">
        <div className="bg-neutral-900  mx-auto  p-4  flex rounded-tl-xl rounded-tr-xl justify-between border border-neutral-800 ">
        <div className=" flex  text-center items-center gap-4">
          <div className="">
            < p className='text-white text-lg text-sem font-medium'> {user.attendance.semester} Attendance</p>
          </div>
          <div className="rounded-md border px-2 py-0.5 text-xs bg-blue-600/20 border-blue-600/50 text-blue-400 ">
            <p className='text-sm'>+{user.attendance.bonus} <span className='font-semibold'>Bonus</span></p>
          </div>
          <div className="items-center rounded-md border px-2 py-0.5 text-xs bg-purple-600/20 border-purple-600/50 text-purple-400">
            <p className='text-sm'>{totalPer}%</p></div>
        </div>
        <div className="">
          <p className=' text-neutral-400'>{totalPer1} %</p>
        </div>
      </div>
      <div className=" p-4 rounded-bl-xl rounded-br-xl flex flex-col gap-4 justify-between border border-neutral-800 ">
  <div className="rounded-full h-3 w-full  bg-neutral-800  overflow-hidden">
      <div className="bg-green-500 h-3 rounded-full" style={{width : `${totalPer1}%`}} aria-valuemax={100} aria-valuemin={0} aria-valuenow={88}></div>
      

  </div>
  <div className="flex justify-between">
 <div className="">
     <p className='text-neutral-400 text-sm'>Present {user.attendance.present}/{user.attendance.total} marked sessions</p>
 </div>
 <div className="">
  <p className='text-neutral-400 text-sm'>{user.attendance.startDate}-{user.attendance.endDate}</p>
 </div>
  </div>
      </div>
    </div>

    <div className="grid grid-cols-[1fr_2fr] gap-4 w-11/12 mx-auto mt-8">
    <div className="bg-neutral-900    rounded-xl border border-neutral-800  mt-8">
      <div className="flex items-center p-3 border-b border-neutral-800">
    <div className="">
    <img src={user.image} className='h-15 w-15 rounded-full' alt="" />
    </div>
<div className=" p-1">
  <h1 className='text-xl text-white'>{user.name}</h1>
  <h1 className="text-neutral-400 text-sm">{user.email}</h1>
</div>
      </div>
      <div className="">
      <div className="flex justify-between  p-3">
        <h1 className='text-neutral-400'>Mobile</h1>
        <h1 className='text-white'>{user.mobile}</h1>
      </div>
      <div className="flex justify-between  p-3">
        <h1 className='text-neutral-400'>DOB</h1>
        <h1 className='text-white'>N/A</h1>
      </div>
      <div className="flex justify-between  p-3">
        <h1 className='text-neutral-400'>University</h1>
        <h1 className='text-white'>{user.university}</h1>
      </div>
      </div>
    </div>



    <div className="bg-neutral-900    rounded-xl border border-neutral-800  mt-8 p-3">
    <div className="flex justify-between border-b border-neutral-800 pb-2">
      <h1 className="text-xl text-white">Subjects</h1>
      <h1 className='text-neutral-400'>View attendance</h1>
    </div>

    <div className=" flex flex-wrap gap-4 mt-5 ">
      {user.subjects.map((ele)=>(
        <div className="bg-black text-white p-4 w-68  rounded-xl border border-neutral-800">
          <h1>{ele}</h1>
        </div>
      ))}
    </div>
    </div>
    </div>
    




<div className="bg-neutral-900 w-11/12 mx-auto mt-8  rounded-xl">
  <div className="p-3 border-b border-neutral-800">
    <h1 className='text-xl text-white'>Mentors</h1>
  </div>
  <div className=" p-3">
    <div className="bg-black w-4/12 flex p-4 gap-3 rounded-xl border border-neutral-800 ">
      <div className="w-15 h-15 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-xs font-bold text-white">{user.mentors[0].name[0]}</div>
      <div className="">
        <h1 className='text-white'>{user.mentors[0].name}</h1>
        <h1 className='text-neutral-400'>{user.mentors[0].batch}</h1>
      </div>
    </div>
  </div>
</div>



<div className="bg-neutral-900 w-11/12 mx-auto mt-8  rounded-xl">
  <div className="p-4 flex justify-between border-b border-neutral-800 ">
    <h1 className='text-white text-xl'>Assignments <span className='text-sm text-neutral-400'>(0/0 - 0%)</span></h1>

    <h1 className='text-sm text-neutral-400'>Pending: 0 <u>view all</u> </h1>
  </div>
  <div className="p-3">
    <h1 className='text-sm text-neutral-400'>No pending assignments. Great job!</h1>
  </div>
</div>


<div className="bg-neutral-900 w-11/12 mx-auto mt-8  rounded-xl">
  <div className="p-4 flex justify-between border-b border-neutral-800 ">
    <h1 className='text-white text-xl'>Upcoming Events</h1>

    <h1 className='text-sm text-neutral-400'> 0 shown <u>view all</u> </h1>
  </div>
  <div className="p-3">
    <h1 className='text-sm text-neutral-400'>No upcoming events. </h1>
  </div>
</div>



   <div className="w-11/12 mx-auto grid grid-cols-3 gap-5 mt-8  ">

        <div className="bg-neutral-900  p-4 rounded-xl border border-neutral-800 ">
          <h2 className='text-sm text-neutral-400'>Need help?</h2>
          <h1 className='text-xl text-white'>Contact your mentor</h1>
        </div>
        <div className="bg-neutral-900  p-4 rounded-xl border border-neutral-800 ">
          <h2 className='text-sm text-neutral-400'>Timetable</h2>
          <h1 className='text-xl text-white'>Check classes (coming soon)</h1>
        </div>
        <div className="bg-neutral-900  p-4 rounded-xl border border-neutral-800 ">
          <h2 className='text-sm text-neutral-400'>Chat</h2>
          <h1 className='text-xl text-white'>View Chat Groups</h1>
        </div>
      </div>
    </div>
  )
}
