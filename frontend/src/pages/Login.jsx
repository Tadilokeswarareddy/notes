import React from 'react'
import Left from '../components/login/left'
import Right from '../components/login/right'
const Login = () => {
  return (
    <div className='grid grid-cols-2 '>
        <div className=''>
            <Left/>

        </div>
        <div className=''>
            <Right/>

        </div>
    </div>
  )
}

export default Login