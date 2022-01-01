import React from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { FcGogle } from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'

const Login = () => {
  return (
    <div className='flex justify-start items-start items-center flex-col h-screen '>
      <div className="relative w-full h-full">
        <h1>This is login page2</h1>
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  )
}

export default Login
