import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faShare,
  faPaperPlane,
  faHeart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Comments from "./comments/Comments";

const Card = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("https://mmh-server.herokuapp.com/post").then((res) => {
      setComments(res.data);
    });
  }, []);

  const commentPost = (e) => {
    e.preventDefault();
    const post = e.target.comment.value;
    console.log(post);
    axios.post(`https://mmh-server.herokuapp.com/comment`, { post });
  };

  return (
    <div>
      {comments.map((comment) => (
        <div className="card w-10/12 h-auto mt-6 bg-base-100 border bottom-1 mx-auto rounded-md">
          <div className="flex mx-3 my-3">
            <div className="avatar">
              <div className="ml-0 w-12 h-12 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <h4
                  className="ml-2 mt-3 font-semibold tooltip tooltip-primary hover:text-blue-600 hover:underline cursor-pointer"
                  data-tip="Nahid Ahmmed Likhon"
                >
                  Nahid Ahmmed Likhon
                </h4>
              </div>
              <div>
                <div className="flex text-blue-600 text-xl ml-52 space-x-1 hover:bg-blue-200 hover:cursor-pointer p-1 rounded-md mb-0 duration-300">
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
          <div>
            <p className="ml-3 mb-2 w-96">{comment.name}</p>
          </div>

          <div className="card w-full bg-base-100 shadow-xl rounded-none">
            <figure className="w-full">
              <img className="w-full" src={comment.image} />
            </figure>
            <div className="flex justify-between mt-4">
              <div className="ml-3 space-x-1 flex">
                <p className="text-red-500">
                  <FontAwesomeIcon icon={faHeart} />
                </p>
                <p className="text-blue-600">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </p>
                <p className="text-zinc-400 hover:underline cursor-pointer">
                  31
                </p>
              </div>
              <div>
                <p className="mr-3 text-zinc-400 hover:underline cursor-pointer">
                  2 Comments
                </p>
              </div>
            </div>
            <div className="card-body">
              <div className="w-full border-solid border border-zinc-200">
                <div></div>
              </div>

              <div className="card-actions justify-evenly">
                <div className="flex justify-evenly h-10 w-full mb-0">
                  <div>
                    <button className="text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200">
                      <div>
                        <FontAwesomeIcon icon={faThumbsUp} />
                      </div>
                      <div>
                        <p className="ml-1">Like</p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200">
                      <div>
                        <FontAwesomeIcon icon={faComment} />
                      </div>
                      <div>
                        <p className="ml-1">Comment</p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200">
                      <div>
                        <FontAwesomeIcon icon={faShare} />
                      </div>
                      <div>
                        <p className="ml-1">Share</p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="text-slate-600 inline-flex justify-center hover:bg-zinc-200 p-2 duration-200">
                      <div>
                        <FontAwesomeIcon icon={faPaperPlane} />
                      </div>
                      <div>
                        <p className="ml-1">Send</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <form onSubmit={commentPost}>
                <label>
                  <input
                    name="comment"
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered input-info w-full max-w-xl"
                  />
                </label>
                <input
                  className="ml-1 bg-blue-600 w-20 mt-2 text-white font-bold text-sm px-2 mb-1 rounded-3xl p-1"
                  type="submit"
                  value="POST "
                />
              </form>
            </div>
            <div>
              <p>
                <Comments></Comments>
                hello
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
