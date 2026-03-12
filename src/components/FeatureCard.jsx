import React from 'react'
import Login from './Home'
export default function FeatureCard(props) {
  return (
    <div className='flex flex-col text-start p-5 gap-1 border border-white/10 bg-white/5 rounded-xl w-120 '>
      <h3 className='font-semibold'>{props.title}</h3>
      <p>{props.discription}</p>
    </div>
  )
}
