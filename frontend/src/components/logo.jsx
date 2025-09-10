import React from 'react'
import Logos from '../assets/Logo.svg'

const Logo = () => {
  return (
    <div className="flex items-center gap-3 p-3  ">

      <div>
        <img className="h-20 w-20 object-contain" src={Logos} alt="Logo" />
      </div>


      <div>
        <h1 className="text-4xl font-bold tracking-wide text-black">
          NOTES
        </h1>
      </div>
    </div>
  )
}

export default Logo
