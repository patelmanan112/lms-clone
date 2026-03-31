import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Login from './components/login'
import { Routes , Route} from 'react-router-dom'
import StudentDashboard from './components/StudentDashboard'
import Attendance from './components/Attendance'
import Chat from './components/Chat'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/student' element={<StudentDashboard/>}/>
      <Route path='/student/attendance' element= {<Attendance/>}></Route>
      <Route path='/student/chat-groups' element = {<Chat/>}></Route>
    </Routes>
    {/* <Home /> */}
  
    </>
  )
}

export default App
