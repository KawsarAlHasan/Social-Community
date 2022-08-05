import React from 'react'

function ChatOnline() {
  return (
    <div className="">
      <div className="ml-2 ">
        <div className="flex items-center space-x-3 mt-3 cursor-pointer hover:bg-base-300">
          <div className="avatar online">
            <div className="mask rounded-full w-12 h-12">
              <img
                src="https://placeimg.com/192/192/people"
                alt="no internet"
              />
            </div>
          </div>
          <div className="font-semibold hidden md:block">Isha Narang</div>
        </div>
        <div className="flex items-center space-x-3 mt-3 cursor-pointer hover:bg-base-300">
          <div className="avatar online">
            <div className="mask rounded-full w-12 h-12">
              <img
                src="https://placeimg.com/192/192/people"
                alt="no internet"
              />
            </div>
          </div>
          <div className="font-semibold hidden md:block">Isha Narang</div>
        </div>
        <div className="flex items-center space-x-3 mt-3 cursor-pointer hover:bg-base-300">
          <div className="avatar offline">
            <div className="mask rounded-full w-12 h-12">
              <img
                src="https://placeimg.com/192/192/people"
                alt="no internet"
              />
            </div>
          </div>
          <div className="font-semibold hidden md:block">Isha Narang</div>
        </div>
      </div>
    </div>
  )
}

export default ChatOnline
