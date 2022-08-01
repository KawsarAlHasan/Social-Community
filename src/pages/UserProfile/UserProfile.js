import React from 'react'
import Footer from '../../components/Footer'
import UserInfo from '../../components/UserInfo'
import UserWidgets from '../../components/UserWidgets'

function UserProfile() {
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

export default UserProfile
