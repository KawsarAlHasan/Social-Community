import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/images/icon.png'

function UserInfo() {
  return (
    <div>
      <div className="card w-10/12 sm:mx-auto bg-base-100 shadow-xl">
        <div className=" h-48 card place-items-center">
          <img
            src="https://tandsgo.com/wp-content/uploads/2020/02/Abstract-blue-and-orange-pattern.jpg"
            alt="no internet"
          />
        </div>
        <div className="divider -mt-5">
          <div className="avatar">
            <div className="w-36 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img
                src="https://placeimg.com/192/192/people"
                alt="no internet"
              />
            </div>
          </div>
        </div>
        <Link to="#" className="m-2 justify-items-end grid">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
          </svg>
        </Link>
        <div className="grid grid-cols-12">
          <div className="grid col-span-12 lg:col-span-6">
            <div className=" card pt-8">
              <h2 className="font-bold mx-5 text-xl">Smriti Mandhana</h2>
              <h2 className="text-gray-400 text-sm font-semibold mx-5">
                She is best batter in the world
              </h2>
              <h2 className="text-gray-400 text-sm mx-5">
                Mumbai, India
                <Link to="/" className="link link-primary font-bold p-2">
                  Contact info
                </Link>
              </h2>
            </div>
          </div>

          <div className="grid col-span-12 lg:col-span-6 mt-4">
            <Link to="#" className="flex">
              <img className="w-7 h-7 m-4" src={icon} alt="no internet" />
              <span className="font-bold mt-4 text-sm text-gray-400">
                Indian Institute of Technology Bombay
              </span>
            </Link>
          </div>
        </div>
        <div className="mx-2 my-3">
          <div className="dropdown dropdown-top">
            <label
              tabIndex="0"
              className="btn btn-sm btn-primary rounded-full m-1"
            >
              Open to
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          <label
            htmlFor="my-modal-6"
            className="btn btn-outline btn-sm btn-primary rounded-full modal-button"
          >
            Add profile section
          </label>
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-top dropdown-end">
            <label
              tabIndex="0"
              className="btn rounded-full btn-sm btn-outline m-1"
            >
              More
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card w-10/12 sm:mx-auto bg-base-100 shadow-xl p-4 my-2">
        <h2 className="text-2xl">Analytics</h2>

        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            className="mercado-match mt-1 mr-1"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
          </svg>{' '}
          <span className="text-gray-400">Private to you</span>
        </div>

        <div className="flex mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match mr-1"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
          </svg>{' '}
          <span className="text-gray-400">2 profile views</span>
        </div>
        <Link to="#" className="mt-2 hover:btn-link">
          Discover who's viewed your profile.
        </Link>
      </div>

      <div className="card w-10/12 sm:mx-auto bg-base-100 shadow-xl pt-4 my-2">
        <h2 className="text-2xl px-4">Resources</h2>

        <div className="flex px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            className="mercado-match mt-1 mr-1"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
          </svg>{' '}
          <span className="text-gray-400">Private to you</span>
        </div>

        <div className="flex mt-2 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match mr-1"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M21 12h-1a9 9 0 00-9-9V2a10 10 0 0110 10zM11 5v1a6 6 0 016 6h1a7 7 0 00-7-7zm3 7h1a4 4 0 00-4-4v1a3 3 0 013 3zm-2 0a1 1 0 00-1.82-.54L5.32 6.6a8 8 0 00-.24 8.4 2.33 2.33 0 014.16.68l.88 3.08A8.57 8.57 0 0012 19a8 8 0 004.4-1.32l-4.86-4.86A1 1 0 0012 12zm-5 3a1.32 1.32 0 00-1.27 1L4 22h6l-1.73-6A1.32 1.32 0 007 15z"></path>
          </svg>
          <span className="text-gray-400">Creator mode Off</span>
        </div>
        <Link to="#" className="mt-2 px-4 hover:btn-link">
          Get discovered, showcase content on your profile, and get access to
          creator tools
        </Link>

        <div className="flex mt-2 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match mr-1"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
          </svg>{' '}
          <span className="text-gray-400">My network</span>
        </div>
        <Link to="#" className="px-4 mt-2 hover:btn-link">
          See and manage your connections and interests.
        </Link>
        <div className="divider -mb-3 mt-2"></div>
        <div className="px-6 hover:bg-base-300">
          <Link
            to="/#"
            className="flex items-center font-bold my-4 mx-3 text-gray-400"
          >
            Show all 5 resources{' '}
            <span className="mt-1">
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="mercado-match"
                data-supported-dps="16x16"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <div className="card w-10/12 sm:mx-auto bg-base-100 shadow-xl p-4 my-2">
        <div className="flex justify-between my-2">
          <h2 className="hover:bg-base-300 font-semibold pl-4 hover:text-black">
            About
          </h2>
          <Link to="#" className="mt-1 pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
            </svg>
          </Link>
        </div>
        <p className="text-sm pl-4">
          Smriti Shriniwas Mandhana is an Indian cricketer who plays for the
          Indian women's national team. In June 2018, the Board of Control for
          Cricket in India named her as the Best Women's International
          Cricketer.
        </p>
      </div>

      <div className="card w-10/12 sm:mx-auto bg-base-100 shadow-xl p-4 my-2">
        <div className="flex justify-between my-2">
          <h2 className="hover:bg-base-300 font-semibold pl-4 hover:text-black">
            Education
          </h2>
          <Link to="#" className="mt-1 pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
            </svg>
          </Link>
        </div>
        <Link to="#" className="flex">
          <img className=" m-4" src={icon} alt="no internet" />
          <span className=" mt-2 ">
            Indian Institute of Technology Bombay <br />
            <span className="text-sm text-gray-400">
              Bcs, Computer Science and Engineering <br />
              2018 - 2022
            </span>
          </span>
        </Link>
      </div>

      <div className="card w-10/12 sm:mx-auto bg-base-100 shadow-xl p-4 my-2">
        <div className="flex justify-between my-2">
          <h2 className="hover:bg-base-300 font-semibold pl-4 hover:text-black">
            Courses
          </h2>
          <Link to="#" className="mt-1 pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
            </svg>
          </Link>
        </div>
        <Link to="#" className="flex">
          <img className=" m-4" src={icon} alt="no internet" />
          <span className=" mt-2 ">
            BKSP <br />
            <span className="text-sm text-gray-400">
              Batting (Cricket)
              <br />
              2006 - 2012
            </span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default UserInfo
