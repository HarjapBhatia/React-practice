import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()   // it will return the same parameter which we'll put in route [user/p1] (p1 = any parameter)
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User