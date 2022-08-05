import React from 'react'
import ChatOnline from '../../components/messanges/ChatOnline'
import Conversation from '../../components/messanges/Conversation'
import Message from '../../components/messanges/Message'

function Messages() {
  return (
    <div className="bg-base-200">
      <div>
        <div className="grid grid-cols-12 ">
          <div className="grid md:col-span-3 col-span-2 mx-auto w-10/12 mt-3 chatBoxWrapper">
            <input
              type="text"
              placeholder="Type here"
              class="input input-sm w-20 md:w-4/5 max-w-[17rem] rounded-lg fixed top-[72px] z-50"
            />
            <div className="chatBoxTop">
              <div className="mt-10">
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
              </div>
            </div>
          </div>
          <div className="grid md:col-span-6 col-span-10 mt-3">
            <div className="flex flex-col justify-between chatBoxWrapper">
              <div className="chatBoxTop">
                <div className="mb-16">
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message own={true} />
                  <Message />
                </div>
              </div>
              <div className="fixed bottom-3">
                <form>
                  <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered input-info max-w-xs w-[70%]"
                  />
                  <button type="submit" class="btn btn-info p-2 w-1/6 px-10">
                    Button
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="grid md:col-span-3 mt-3 chatBoxWrapper">
            <div className="">
              <ChatOnline />
              <ChatOnline />
              <ChatOnline />
              <ChatOnline />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
