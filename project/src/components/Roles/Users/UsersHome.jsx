import React from 'react'
import { useSelector } from 'react-redux'

function UsersHome() {
  const {userInfo} = useSelector((state)=>state.auth)
  console.log(userInfo,'1121111111111122222222222221')
  return (
    <div>
      <h1 className='text-6xl italic font-serif' >users home</h1>
    </div>
  )
}

export default UsersHome
