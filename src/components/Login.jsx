import React, { useRef, useState } from 'react'
import { loginDetails } from './auth';
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [role, setRole] = useState('Student');
    const roles = ["Student", "Mentor", "Admin"];
    const uid = useRef();
    const pass = useRef();
    const navigate = useNavigate();
    function checkTheValid(){
        const user = loginDetails(uid.current.value , pass.current.value );
        if(!user){
            alert("Login failed. Please try again. ");
        }
        else{

            navigate("/student")
        }
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
    }
    return (

        <div className="bg-black text-white flex justify-center items-center min-w-screen min-h-screen">
            <div className="w-120 mx-auto  border-2 p-7 border-white/10 rounded-2xl bg-neutral-950/70">

                <div className="">
                    <h2 className='text-4xl text-center'>Welcome Back</h2>
                    <p className=' text-center text-gray-400'>Sign in to your account</p>
                </div>
                <div className='mt-6'>
                    <form onSubmit={handleSubmit} >
                        <h3>Role</h3>
                        <div className="flex gap-7 mb-8 ">
                            {
                                roles.map((element) => (
                                    <button key={element} type='button' onClick={() => setRole(element)} className={`text-1xl border-2 p-2.5 rounded-md w-22 ${role === element
                                            ? "bg-white text-black border-white"
                                            : "bg-transparent text-gray-300 border-gray-700 hover:border-gray-500"
                                        }`}>{element}</button>
                                ))
                            }
                        </div>
                        <label htmlFor="">{role == "Student" ? "University UID" : "Email"}</label> <br />
                        <input type="text" ref={uid} className=' bg-black focus:text-white border-white/10 border-2 w-100 h-9 text-gray-400 p-4 text-lg rounded-md mt-1' placeholder={role == "Student" ? "Enter your University UID" : "name@gmail.com"}  /> <br /> <br />
                        <label htmlFor=""> Password</label> <br />
                        <input type="password" ref={pass} className='bg-black focus:text-white w-100 h-9 border-white/10 border-2 text-gray-400 p-4 text-lg rounded-md mt-1' placeholder='••••••' /> <br />
                        <button type='submit' onClick={()=>{checkTheValid()}} className='bg-white  w-100 h-9 mt-6 text-black rounded-md'>Sign in</button>
                    </form>
                    <p className='text-sm text-gray-400 text-center mt-4.5'>Use your role-based credentials. Contact admin if you need help.</p>
                </div>
            </div>

        </div>

    )
}
