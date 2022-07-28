import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  const sectionRecent = ['node', 'react', 'mern-stack']
  const sectionGroups = ['react-community', 'programming-hero']
  const sectionHashTags = ['boycot-india', 'careers', 'entrepreneurship']

  return (
    <div className="">
      {/* first part */}
      <div className="card sm:w-10/12 md:w-64 sm:mx-auto bg-base-100 shadow-xl">
        <div className=" h-20 card place-items-center">
          <img
            src="https://tandsgo.com/wp-content/uploads/2020/02/Abstract-blue-and-orange-pattern.jpg"
            alt="no internet"
          />
        </div>
        <div className="divider -mt-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img
                src="https://placeimg.com/192/192/people"
                alt="no internet"
              />
            </div>
          </div>
        </div>
        <div className=" card place-items-center pt-10">
          <Link to="/#" className="font-bold">
            Smriti Mandhana
          </Link>
          <h2 className="text-gray-400 text-sm font-semibold px-3">
            She is best batter in the world
          </h2>
        </div>
        <div className="divider mb-2"></div>
        <div className="">
          <Link
            to="/#"
            className="hover:bg-base-300 flex justify-between text-gray-400 font-semibold px-4 hover:text-black"
          >
            {' '}
            Who viewed your profile <span className="text-primary">86</span>
          </Link>
          <Link
            to="/#"
            className="hover:bg-base-300 flex justify-between text-gray-400 font-semibold px-4 hover:text-black"
          >
            Connections <span className="text-primary">345</span>
          </Link>
        </div>
        <div className="divider -mb-3 mt-2"></div>
        <div className=" hover:bg-base-300">
          <Link to="/#" className="flex items-center font-bold my-4">
            <span className="mx-4 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
              </svg>
            </span>{' '}
            My Items
          </Link>
        </div>
      </div>

      {/* secound part */}
      <div className="sm:hidden md:block card w-64 bg-base-100 shadow-xl mt-3 sticky top-0">
        <div className="mt-2 px-4">
          <Link to="/#" className="hover:text-primary">
            {' '}
            Recent{' '}
          </Link>
          {sectionRecent.map((title, i) => (
            <div key={i}>
              <div className="flex text-gray-400 p-1 hover:bg-base-300 font-semibold hover:text-black">
                <span className="mx-1">#</span>
                <p>{title}</p>
              </div>
            </div>
          ))}
          <Link to="/#" className="hover:text-primary">
            {' '}
            Groups{' '}
          </Link>
          {sectionGroups.map((title, i) => (
            <div key={i}>
              <div className="flex text-gray-400 p-1 hover:bg-base-300 font-semibold hover:text-black">
                <span className="mx-1">#</span>
                <p>{title}</p>
              </div>
            </div>
          ))}
          <p className="flex justify-between mb-1">
            <Link to="/#" className=" hover:text-primary">
              Events
            </Link>

            <label htmlFor="my-modal-6" className="cursor-pointer modal-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
              </svg>
            </label>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Events</h3>
                <p className="py-4">Events comming soon next week 🚀</p>
                <div className="modal-action">
                  <label htmlFor="my-modal-6" className="btn">
                    Yay!
                  </label>
                </div>
              </div>
            </div>
          </p>

          <Link to="/#" className="hover:text-primary">
            {' '}
            Followed Hashtags{' '}
          </Link>
          {sectionHashTags.map((title, i) => (
            <div key={i}>
              <div className="flex text-gray-400 p-1 hover:bg-base-300 font-semibold hover:text-black">
                <span className="mx-1">#</span>
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="divider -mb-3 mt-1"></div>
        <div className=" hover:bg-base-300">
          <Link to="/#" className="flex items-center font-bold my-4">
            <span className="mx-4 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
              </svg>
            </span>{' '}
            Discover more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
