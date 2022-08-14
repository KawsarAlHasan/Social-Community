import React from 'react'
import Footer from '../../components/Footer'
import UserInfo from '../../components/UserInfo'
import UserWidgets from '../../components/UserWidgets'
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";


function UserProfile() {
  return (
    <div className="bg-base-200 mt-5">
       <Link to="/">
          <button
            className="bg-yellow-500 hover:bg-[#f2a70c] hover:shadow-md text-black px-4 py-2 rounded-full flex gap-3 items-center w-44 "
          >
            <BsArrowLeft className="text-xl"></BsArrowLeft> Back to home 
          </button>
        </Link>
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
