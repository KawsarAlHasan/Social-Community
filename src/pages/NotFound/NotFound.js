import React from 'react'
import img from '../../assets/images/not-found.jpg'

const NotFound = (props) => {
  return (
    <div className="text-center">
      <img className="w-screen" src={img} alt="404" />
    </div>
  )
}

export default NotFound
