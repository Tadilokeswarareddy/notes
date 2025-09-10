import React, { useState } from 'react'
import Logo from '../logo'

const Right = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="flex flex-col items-center justify-center p-8 w-full max-w-md mx-auto mt-20">
      
      <div className="mb-8">
        <Logo />
      </div>

      
      <div className="flex gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded-xl font-semibold transition ${
            isLogin
              ? 'bg-black text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`px-6 py-2 rounded-xl font-semibold transition ${
            !isLogin
              ? 'bg-black text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>

      
      <form className="flex flex-col gap-4 w-full">

        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-black outline-none"
          />
        )}

        <input
          type="text"
          placeholder={isLogin ? 'Username or Email' : 'Email'}
          className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-black outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-black outline-none"
        />

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-400 transition"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  )
}

export default Right
