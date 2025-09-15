import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {
  const [username, SetUserName] = useState('')
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')

  const HandleSubmit = async(e) => {
    e.preventDefault()
    const userdata = {username,email,password}

    try{
      const response = await axios.post('http://127.0.0.1:8000/api/registration/',userdata)
      console.log(response.data)

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
            Register
          </h2>


          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => SetUserName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
            />
          </div>


          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </>
  )
}

export default Register
