import React from 'react'
import { Link } from 'react-router-dom'
import WidgetsImg from '../assets/images/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png'

function UserWidgets() {
  return (
    <div className=''>
      <div className="card sm:mx-auto md:mx-0 sm:w-5/6 md:w-80 bg-base-100 shadow-xl mb-2 p-2 ">
        <div className="flex justify-between my-2">
          <Link
            to="/#"
            className="hover:bg-base-300  text-gray-400 font-semibold px-4 hover:text-black"
          >
            {' '}
            Edit public profile & URL
          </Link>
          <span className="mt-1 px-4">
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
              <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
            </svg>
          </span>
        </div>

        <div className="divider my-0"></div>
        <div className="flex justify-between my-2">
          <Link
            to="/#"
            className="hover:bg-base-300  text-gray-400 font-semibold pl-4 hover:text-black"
          >
            Add profile in another language
          </Link>
          <span className="mt-1 pr-4">
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
              <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
            </svg>
          </span>
        </div>
      </div>

      <div className="card sm:mx-auto md:mx-0 sm:w-5/6 md:w-80 bg-base-100 shadow-xl mb-2 p-2">
        <img src={WidgetsImg} alt="no internet" />
      </div>

      <div className="card sm:mx-auto md:mx-0 sm:w-5/6 md:w-80 bg-base-100 shadow-xl sticky top-[72px] pb-4">
        <div className="">
          <p className=" mt-3 font-semibold px-4"> People you may know </p>
        </div>
        <div className="mx-3">
          <tr>
            <td>
              <div className="flex items-center space-x-3 mt-2">
                <div className="avatar">
                  <div className="mask rounded-full w-12 h-12">
                    <img
                      src="https://placeimg.com/192/192/people"
                      alt="no internet"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Isha Narang</div>
                  <div className="text-sm opacity-60">
                    Talent Attraction, Acquisition
                  </div>
                  <button className="btn btn-xs btn-active rounded-full btn-ghost">
                    Connect
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center space-x-3 mt-2">
                <div className="avatar">
                  <div className="mask rounded-full w-12 h-12">
                    <img
                      src="https://placeimg.com/192/192/people"
                      alt="no internet"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Alexa</div>
                  <div className="text-sm opacity-60">
                    Talent Attraction, Acquisition
                  </div>
                  <button className="btn btn-xs btn-active rounded-full btn-ghost">
                    Connect
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center space-x-3 mt-2">
                <div className="avatar">
                  <div className="mask rounded-full w-12 h-12">
                    <img
                      src="https://placeimg.com/192/192/people"
                      alt="no internet"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Jenny</div>
                  <div className="text-sm opacity-60">
                    Indian Institute of Technology
                  </div>
                  <button className="btn btn-xs btn-active rounded-full btn-ghost">
                    Connect
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center space-x-3 mt-2">
                <div className="avatar">
                  <div className="mask rounded-full w-12 h-12">
                    <img
                      src="https://placeimg.com/192/192/people"
                      alt="no internet"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Isha Narang</div>
                  <div className="text-sm opacity-60">
                    Indian Institute of Technology
                  </div>
                  <button className="btn btn-xs btn-active rounded-full btn-ghost">
                    Connect
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center space-x-3 mt-2">
                <div className="avatar">
                  <div className="mask rounded-full w-12 h-12">
                    <img
                      src="https://placeimg.com/192/192/people"
                      alt="no internet"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Alexa</div>
                  <div className="text-sm opacity-60">
                    Indian Institute of Technology
                  </div>
                  <button className="btn btn-xs btn-active rounded-full btn-ghost">
                    Connect
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center space-x-3 mt-2">
                <div className="avatar">
                  <div className="mask rounded-full w-12 h-12">
                    <img
                      src="https://placeimg.com/192/192/people"
                      alt="no internet"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Jenny</div>
                  <div className="text-sm opacity-60">
                    Talent Attraction, Acquisition
                  </div>
                  <button className="btn btn-xs btn-active rounded-full btn-ghost">
                    Connect
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </div>
      </div>
    </div>
  )
}

export default UserWidgets
