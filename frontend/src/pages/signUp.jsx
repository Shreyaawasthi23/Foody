import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { serverUrl } from '../App';
function signUp() {
    const primaryColor = "#ff4d2d";
    const hoverColor = "#e64323";
    const bgColor = "#fff9f6";
    const borderColor = "#ddd";

    const [showPassword,setShowPassword] = useState(false);
    const [role,setRole] = useState("user")
    const navigate = useNavigate()
    const [fullName,setFullName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [mobile,setMobile] = useState("")  

    const handleSignUp = async ()=>{
      try {
        const result = await axios.post(`${serverUrl}/api/auth/signup`, {
          fullName,email,password, mobile, role
        },{withCredentials:true})
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className='min-h-screen flex items-center justify-center p-4' style={
        {
            background:bgColor
        }
    }>
        <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 border-[1px]`} style={{
            border:` 1px solid ${borderColor}`
        }}>
            <h1 className={`text-3xl font-bold mb-2`} style={{color:primaryColor}}>Foody</h1>
            <p className='text-gray-600 mb-8'>Create your account to get started with delicious food deliveries</p>
             {/* full name */}
             <div className='mb-4'>
                <label htmlFor='fullName' className='block text-gray-700 font-medium mb-1'>Full Name</label>
                <input type='text' className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-orange-500
                 ' placeholder="Enter your Full Name" onChange={(e)=>setFullName(e.target.value)} value={fullName} style={{border:` 1px solid ${borderColor}`}}/>
             </div>
             {/* email */}
             <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 font-medium mb-1'>Email</label>
                <input type='email' className='w-full border rounded-lg px-3 py-2 focus:outline-none 
                 ' placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} value={email} style={{border:` 1px solid ${borderColor}`}}/>
             </div>
               {/* mobile */}
             <div className='mb-4'>
                <label htmlFor='mobile' className='block text-gray-700 font-medium mb-1'>Mobile Number</label>
                <input type='email' className='w-full border rounded-lg px-3 py-2 focus:outline-none 
                 ' placeholder="Enter your Mobile No." style={{border:` 1px solid ${borderColor}`}}
                 onChange={(e)=>setMobile(e.target.value)} value={mobile}/>
             </div>

              {/* password */}
             <div className='mb-4'>
                <label htmlFor='password' className='block text-gray-700 font-medium mb-1'>Password</label>
                <div className='relative'>
                <input type={`${showPassword?"text":"password"}`}  className='w-full border rounded-lg px-3 py-2 focus:outline-none'
                  placeholder="Enter your Email" style={{border:` 1px solid ${borderColor}`}}
                  onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <button className='absolute curser-pointer right-3 top-[14px] text-gray-500' onClick={() => setShowPassword(prev=>!prev)} >{!showPassword?<FaRegEye/>: <FaEyeSlash/>}</button>
                </div>
                
             </div>

              {/* role */}
             <div className='mb-4'>
                <label htmlFor='role' className='block text-gray-700 font-medium mb-1'>Role</label>
                <div className='flex gap-2'>
                {["user","owner","deliveryBoy"].map((r)=>(
                    <button className='flex-1 border rounded-lg px-3 py-2 text-center font-medium transition-colors cursor-pointer'
                    onClick={()=>setRole(r)}
                     style={role == r ? {backgroundColor:primaryColor,color:"white"}: {border:`1px solid ${primaryColor}`, color:primaryColor}}>{r}</button>
                ))}
                </div>
                
             </div>

              <button className={`w-full font-semibold 
              rounded-lg py-2 transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
              onClick={handleSignUp}>Sign Up
              </button>

              <button className='w-full cursor-pointer mt-6 flex items-center justify-center gap-2 border-lg px-4 py-2 transition duration-200 border-gray-400 hover:bg-gray-200'>
                <FcGoogle size={20}/>
                <span>Sign up with Google</span>
              </button>
              <p className='text-center mt-2 cursor-pointer' onClick={()=> navigate("/signin")}> Alreadt have an account ? <span className='text-[#ff4d2d]'>Sign In</span> </p>
        </div>
     
    </div>
  )
}

export default signUp
