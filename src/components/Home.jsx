import React from 'react'

import FeatureCard from './FeatureCard'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-w-screen min-h-screen    bg-black text-white">
     <div className="flex flex-col gap-12">
           <div className="w-30 text-center flex ml-34 ">
            <h1 className='text-7xl  font-extrabold'>Coding Gita</h1>
        </div>
        <div className="">
            <p className='text-xl'>Smart, simple, and reliable attendance for modern classrooms.</p>
        </div>
        <div className=""><Link to={'/login'}><button className=' bg-white text-black rounded-lg h-11  w-20 cursor-pointer '>Login</button></Link>

        </div>
     </div>
     <div className="flex gap-9 mt-20 ">
        <FeatureCard title = "Role-based dashboards" discription = "Admin, Mentor, and Student experiences tailored to their needs."/>
        <FeatureCard title = "Fast and secure access" discription ="Encrypted sessions and streamlined navigation."/>
     </div>
    </div>
    
  )
}
