import React from 'react'
import Footer from '../Share/Footer'
import UserInfo from './UserInfo'
import UserWidgets from './UserWidgets'

function UserPage() {
  return (
    <div className="bg-base-200">
      <div className="grid grid-cols-12">
        <div className="grid md:col-span-8 col-span-12 mt-3">
          <UserInfo />
        </div>
        <div className="grid md:col-span-4 col-span-12 mt-3">
          <UserWidgets />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default UserPage
