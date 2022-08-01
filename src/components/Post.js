import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCamera,
  faVideo,
  faCalendarDay,
  faFilePen,
} from '@fortawesome/free-solid-svg-icons'

const Post = () => {
  return (
    <div className="card w-10/12 h-40 bg-base-100 border bottom-1 mx-auto rounded-md">
      <div className="card-body ">
        <div className="avatar">
          <div className="ml-0 w-12 h-12 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-96 rounded-3xl ml-1"
            />
            <div className="flex justify-evenly h-10 w-full">
              <div>
                <div className="mr-8 mt-8 w-16">
                  <label
                    htmlFor="my-modal-6"
                    className="cursor-pointer text-2xl  hover:bg-zinc-200 duration-200 rounded py-1 text-blue-500"
                  >
                    <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
                    <span className="text-sm text-stone-400">Photo</span>
                  </label>
                </div>
                <input
                  type="checkbox"
                  id="my-modal-6"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Your Photo</h3>
                    <p className="py-4">
                      You've been selected htmlFor a chance to get one year of
                      subscription to use Wikipedia htmlFor free!
                    </p>
                    <div className="modal-action">
                      <label htmlFor="my-modal-6" className="btn">
                        Yay!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mr-8 mt-8 w-16">
                  <label
                    htmlFor="my-modal-6"
                    className="cursor-pointer text-2xl  hover:bg-zinc-200 duration-200 rounded py-1  text-lime-500"
                  >
                    <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
                    <span className="text-sm text-stone-400">Video</span>
                  </label>
                </div>
                <input
                  type="checkbox"
                  id="my-modal-6"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Your Photo</h3>
                    <p className="py-4">
                      You've been selected htmlFor a chance to get one year of
                      subscription to use Wikipedia htmlFor free!
                    </p>
                    <div className="modal-action">
                      <label htmlFor="my-modal-6" className="btn">
                        Yay!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mr-8 mt-8 w-16">
                  <label
                    htmlFor="my-modal-6"
                    className="cursor-pointer text-2xl  hover:bg-zinc-200 duration-200 rounded py-1 text-orange-400"
                  >
                    <FontAwesomeIcon icon={faCalendarDay}></FontAwesomeIcon>
                    <span className="text-sm text-stone-400">Event</span>
                  </label>
                </div>
                <input
                  type="checkbox"
                  id="my-modal-6"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Your Photo</h3>
                    <p className="py-4">
                      You've been selected htmlFor a chance to get one year of
                      subscription to use Wikipedia htmlFor free!
                    </p>
                    <div className="modal-action">
                      <label htmlFor="my-modal-6" className="btn">
                        Yay!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mr-8 mt-8 w-16">
                  <label
                    htmlFor="my-modal-6"
                    className="cursor-pointer text-2xl  hover:bg-zinc-200 duration-200 rounded py-1 text-orange-400"
                  >
                    <FontAwesomeIcon icon={faFilePen}></FontAwesomeIcon>
                    <span className="text-sm text-stone-400">Write</span>
                  </label>
                </div>
                <input
                  type="checkbox"
                  id="my-modal-6"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Your Photo</h3>
                    <p className="py-4">
                      A quick brown fox jumps over the lazy dog.
                    </p>
                    <div className="modal-action">
                      <label htmlFor="my-modal-6" className="btn">
                        Cancel
                      </label>
                      <label htmlFor="my-modal-6" className="btn">
                        Done
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
