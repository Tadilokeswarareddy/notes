import React, { useState } from 'react'
import axios from 'axios'
const Login = () => {
    const [username,SetUserName]=useState('')
    const [password,SetPassword]=useState('')
    const HandleSubmit=async(e)=>{

        e.preventDefault()

        const userData = {username,password}
        console.log(userData)

        try{
            const response = await axios.post('http://127.0.0.1:8000/api/token/',userData)
            localStorage.setItem('accesstoken',response.data.access)
            localStorage.setItem('refreshtoken',response.data.refresh)
            console.log("token saved")



        }catch(error){
            console.log(error)

        }



    }

  return (
    <>
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <form
      onSubmit={HandleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Login
      </h2>


      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Username / Email
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => SetUserName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your username or email"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />
      </div>


      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Login
      </button>
    </form>
  </div>
</>

  )
}

export default Login    