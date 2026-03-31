import React from 'react'
import NavBar from './NavBar'

export default function Chat() {
  return (
    <div className='bg-neutral-950 w-screen h-screen  m-0 p-0'>
        <NavBar/>
<div className="p-7 w-11/12 mx-auto">
            <h1 className='text-white text-4xl font-semibold pb-2'>Chat Groups</h1>
            <h1 className='text-neutral-400 pb-6'>Groups assigned to you and universal groups.</h1>
            <h1 className='text-neutral-400'>No groups assigned to you yet.</h1>
</div>
    </div>
  )
}
