import { faComment, faHeart, faPaperPlane, faPlus, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import nahidimg from '../../Asset/images/NahidVai.jpg'

const Card = () => {
  return (
    <div>
      <div className="card w-10/12 h-auto mt-6 bg-base-100 border bottom-1 mx-auto rounded-md">
        <div className='flex mx-3 my-3'>
          <div className='avatar'>
            <div className="ml-0 w-12 h-12 rounded-full">
              <img src={nahidimg} alt='rondom-img' />
            </div>
          </div>
          <div className='flex justify-between'>
            <div>
              <h4 className='ml-2 font-semibold tooltip tooltip-left hover:text-blue-600 hover:underline cursor-pointer' data-tip="Nahid Ahmmed ">Nahid Ahmmed </h4>
              <p className='text-zinc-400 px-2'>Junior web developer</p>
            </div>
            <div>
              <div className='flex text-blue-600 text-xl ml-52 space-x-1 hover:bg-blue-200 rounded-md mb-0 duration-300'>
                <div>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <div>
                  <p>Follow</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <figure className='w-full'><img src={nahidimg} alt='random-img' /></figure>
          <div className='flex justify-between mt-4'>
            <div className='ml-3 space-x-1 flex'>
              <p className='text-red-500'><FontAwesomeIcon icon={faHeart} /></p><p className='text-blue-600'><FontAwesomeIcon icon={faThumbsUp} /></p><p className='text-zinc-400  hover:underline cursor-pointer'>31</p>
            </div>
            <div>
              <p className='mr-3 text-zinc-400  hover:underline cursor-pointer'>2 Comments</p>
            </div>
          </div>
          <div className="card-body">
            <div className="w-full border-solid border border-zinc-200">
              <div></div>
            </div>

            <div className="card-actions justify-evenly">

              <div className='flex justify-evenly h-10 w-full mb-0'>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </div><div>
                      <p className='ml-1'>Like</p>
                    </div></button>
                </div>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faComment} />
                  </div><div>
                      <p className='ml-1'>Comment</p>
                    </div></button>
                </div>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faShare} />
                  </div><div>
                      <p className='ml-1'>Share</p>
                    </div></button>
                </div>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div><div>
                      <p className='ml-1'>Send</p>
                    </div></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card w-10/12 h-auto mt-6 bg-base-100 border bottom-1 mx-auto rounded-md">
        <div className='flex mx-3 my-3'>
          <div className='avatar'>
            <div className="ml-0 w-12 h-12 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt='random-img'/>
            </div>
          </div>
          <div className='flex justify-between'>
            <div>
              <h4 className='ml-2 font-semibold tooltip tooltip-left hover:text-blue-600 hover:underline cursor-pointer' data-tip="Nahid Ahmmed Likhon">Nahid Ahmmed </h4>
              <p className='text-zinc-400 px-2'>Junior web developer</p>
            </div>
            <div>
              <div className='flex text-blue-600 text-xl ml-52 space-x-1 hover:bg-blue-200 rounded-md mb-0 duration-300'>
                <div>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <div>
                  <p>Follow</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <figure className='w-full'><img src="https://placeimg.com/400/225/arch" alt='random-img' /></figure>
          <div className='flex justify-between mt-4'>
            <div className='ml-3 space-x-1 flex'>
              <p className='text-red-500'><FontAwesomeIcon icon={faHeart} /></p><p className='text-blue-600'><FontAwesomeIcon icon={faThumbsUp} /></p><p className='text-zinc-400  hover:underline cursor-pointer'>31</p>
            </div>
            <div>
              <p className='mr-3 text-zinc-400  hover:underline cursor-pointer'>2 Comments</p>
            </div>
          </div>
          <div className="card-body">
            <div className="w-full border-solid border border-zinc-200">
              <div></div>
            </div>

            <div className="card-actions justify-evenly">

              <div className='flex justify-evenly h-10 w-full mb-0'>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </div><div>
                      <p className='ml-1'>Like</p>
                    </div></button>
                </div>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faComment} />
                  </div><div>
                      <p className='ml-1'>Comment</p>
                    </div></button>
                </div>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faShare} />
                  </div><div>
                      <p className='ml-1'>Share</p>
                    </div></button>
                </div>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div><div>
                      <p className='ml-1'>Send</p>
                    </div></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card w-10/12 h-auto mt-6 bg-base-100 border bottom-1 mx-auto rounded-md">
        <div className='flex mx-3 my-3'>
          <div className='avatar'>
            <div className="ml-0 w-12 h-12 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt='random-img' />
            </div>
          </div>
          <div className='flex justify-between'>
            <div>
              <h4 className='ml-2 font-semibold tooltip tooltip-left hover:text-blue-600 hover:underline cursor-pointer' data-tip="Nahid Ahmmed ">Nahid Ahmmed </h4>
              <p className='text-zinc-400 px-2'>Junior web developer</p>
            </div>
            <div>
              <div className='flex text-blue-600 text-xl ml-52 space-x-1 hover:bg-blue-200 rounded-md mb-0 duration-300'>
                <div>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <div>
                  <p>Follow</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <figure className='w-full'><img src="https://placeimg.com/400/225/arch" alt='random-img' /></figure>
          <div className='flex justify-between mt-4'>
            <div className='ml-3 space-x-1 flex'>
              <p className='text-red-500'><FontAwesomeIcon icon={faHeart} /></p><p className='text-blue-600'><FontAwesomeIcon icon={faThumbsUp} /></p><p className='text-zinc-400  hover:underline cursor-pointer'>31</p>
            </div>
            <div>
              <p className='mr-3 text-zinc-400  hover:underline cursor-pointer'>2 Comments</p>
            </div>
          </div>
          <div className="card-body">
            <div className="w-full border-solid border border-zinc-200">
              <div></div>
            </div>

            <div className="card-actions justify-evenly">

              <div className='flex justify-evenly h-10 w-full mb-0'>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </div><div>
                      <p className='ml-1'>Like</p>
                    </div></button>
                </div>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faComment} />
                  </div><div>
                      <p className='ml-1'>Comment</p>
                    </div></button>
                </div>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faShare} />
                  </div><div>
                      <p className='ml-1'>Share</p>
                    </div></button>
                </div>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div><div>
                      <p className='ml-1'>Send</p>
                    </div></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card w-10/12 h-auto mt-6 bg-base-100 border bottom-1 mx-auto rounded-md">
        <div className='flex mx-3 my-3'>
          <div className='avatar'>
            <div className="ml-0 w-12 h-12 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt='random-img'/>
            </div>
          </div>
          <div className='flex justify-between'>
            <div>
              <h4 className='ml-2 font-semibold tooltip tooltip-left hover:text-blue-600 hover:underline cursor-pointer' data-tip="Nahid Ahmmed Likhon">Nahid Ahmmed </h4>
              <p className='text-zinc-400 px-2'>Junior web developer</p>
            </div>
            <div>
              <div className='flex text-blue-600 text-xl ml-52 space-x-1 hover:bg-blue-200 rounded-md mb-0 duration-300'>
                <div>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <div>
                  <p>Follow</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl">
          <figure className='w-full'><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className='flex justify-between mt-4'>
            <div className='ml-3 space-x-1 flex'>
              <p className='text-red-500'><FontAwesomeIcon icon={faHeart} /></p><p className='text-blue-600'><FontAwesomeIcon icon={faThumbsUp} /></p><p className='text-zinc-400  hover:underline cursor-pointer'>31</p>
            </div>
            <div>
              <p className='mr-3 text-zinc-400  hover:underline cursor-pointer'>2 Comments</p>
            </div>
          </div>
          <div className="card-body">
            <div className="w-full border-solid border border-zinc-200">
              <div></div>
            </div>

            <div className="card-actions justify-evenly">

              <div className='flex justify-evenly h-10 w-full mb-0'>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </div><div>
                      <p className='ml-1'>Like</p>
                    </div></button>
                </div>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faComment} />
                  </div><div>
                      <p className='ml-1'>Comment</p>
                    </div></button>
                </div>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faShare} />
                  </div><div>
                      <p className='ml-1'>Share</p>
                    </div></button>
                </div>
                <div>
                  <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div><div>
                      <p className='ml-1'>Send</p>
                    </div></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card w-10/12 h-auto mt-6 bg-base-100 border bottom-1 mx-auto rounded-md">
      <div className='flex mx-3 my-3'>
        <div className='avatar'>
          <div className="ml-0 w-12 h-12 rounded-full">
            <img src="https://placeimg.com/192/192/people" alt='random-img' />
          </div>
        </div>
        <div className='flex justify-between'>
          <div>
            <h4 className='ml-2 font-semibold tooltip tooltip-left hover:text-blue-600 hover:underline cursor-pointer' data-tip="Nahid Ahmmed ">Nahid Ahmmed </h4>
            <p className='text-zinc-400 px-2'>Junior web developer</p>
          </div>
          <div>
            <div className='flex text-blue-600 text-xl ml-52 space-x-1 hover:bg-blue-200 rounded-md mb-0 duration-300'>
              <div>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div>
                <p>Follow</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl">
        <figure className='w-full'><img src="https://placeimg.com/400/225/arch" alt='random-img' /></figure>
        <div className='flex justify-between mt-4'>
          <div className='ml-3 space-x-1 flex'>
            <p className='text-red-500'><FontAwesomeIcon icon={faHeart} /></p><p className='text-blue-600'><FontAwesomeIcon icon={faThumbsUp} /></p><p className='text-zinc-400  hover:underline cursor-pointer'>31</p>
          </div>
          <div>
            <p className='mr-3 text-zinc-400  hover:underline cursor-pointer'>2 Comments</p>
          </div>
        </div>
        <div className="card-body">
          <div className="w-full border-solid border border-zinc-200">
            <div></div>
          </div>

          <div className="card-actions justify-evenly">

            <div className='flex justify-evenly h-10 w-full mb-0'>
              <div>
                <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                  <FontAwesomeIcon icon={faThumbsUp} />
                </div><div>
                    <p className='ml-1'>Like</p>
                  </div></button>
              </div>
              <div>
                <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                  <FontAwesomeIcon icon={faComment} />
                </div><div>
                    <p className='ml-1'>Comment</p>
                  </div></button>
              </div>
              <div>
                <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                  <FontAwesomeIcon icon={faShare} />
                </div><div>
                    <p className='ml-1'>Share</p>
                  </div></button>
              </div>
              <div>
                <button className='text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200'><div>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div><div>
                    <p className='ml-1'>Send</p>
                  </div></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card;