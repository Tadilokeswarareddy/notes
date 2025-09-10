import React from 'react'
import Man from '../../assets/man.svg'

const Left = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-12 mt-25 mb-18">
      
      <img 
        src={Man} 
        alt="Man illustration" 
        className="h-60 w-60 object-contain mb-6"
      />

      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Keep life simple
      </h1>

      <p className="text-lg text-gray-600 max-w-md">
        Store all your notes in a simple and intuitive app that helps you enjoy 
        what is most important in life.
      </p>
    </div>
  )
}

export default Left
