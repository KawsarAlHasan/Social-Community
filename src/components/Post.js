import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faVideo,
  faCalendarDay,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useForm } from "react-hook-form";

const Post = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageBbKey = "38699dc715ebdd8bc748571a5d704242";
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageBbKey}`;

    axios.post(`${url}`, formData).then((res) => {
      const image = res.data;
      if (image.success) {
        const img = image.data.url;

        const product = {
          name: data.name,
          image: img,
        };
        reset();
        axios.post(`https://mmh-server.herokuapp.com/post`, product);
        console.log(product);
      }
    });
  };
  return (
    <div className="card w-10/12 h-40 bg-base-100 border bottom-1 mx-auto rounded-md mt-16">
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
              <form form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div type="file" className="mr-8 mt-8 w-16">
                    <label className="cursor-pointer text-2xl  hover:bg-zinc-200 duration-200 rounded py-1 text-blue-500">
                      <label
                        for="my-modal-3"
                        class="cursor-pointer text-2xl  hover:bg-zinc-200 duration-200 rounded py-1  text-blue-600"
                      >
                        <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
                      </label>

                      <input
                        type="checkbox"
                        id="my-modal-3"
                        class="modal-toggle"
                      />
                      <div class="modal">
                        <div class="modal-box relative">
                          <label
                            for="my-modal-3"
                            class="btn btn-sm btn-circle absolute right-2 top-2"
                          >
                            ✕
                          </label>
                          <h3 class="text-lg font-bold text-center">
                            Whats on your mind!
                            <textarea
                              className="w-96 mx-auto h-24 border-2"
                              {...register("name")}
                              placeholder="Write something"
                            ></textarea>
                          </h3>
                          <p class="py-4 text-lg mb-5">
                            Attach your image
                            <input
                              {...register("image")}
                              type="file"
                              class="block w-full text-sm text-slate-500
                              file:mr-4 file:py-2 file:px-4
                              file:rounded-full file:border-0
                              file:text-sm file:font-semibold
                              file:bg-violet-50 file:text-violet-700
                              hover:file:bg-violet-100
                            "
                            />
                          </p>

                          <div class="modal-action">
                            <input
                              for="my-modal-3"
                              type="submit"
                              className="btn btn-sm rounded-2xl mt-3 bg-white border-blue-500 text-blue-600 hover:bg-slate-200 hover:border-2 hover:border-blue-500"
                            />
                          </div>
                        </div>
                      </div>

                      <span className="text-sm text-stone-400">Photo</span>
                    </label>
                  </div>
                </div>
              </form>
              <div>
                <div className="mr-8 mt-8 w-16">
                  <label className="cursor-pointer text-2xl  hover:bg-zinc-200 duration-200 rounded py-1  text-lime-500">
                    <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
                    <span className="text-sm text-stone-400">Video</span>
                  </label>
                </div>
              </div>
              <div>
                <div className="mr-8 mt-8 w-16">
                  <label className="cursor-pointer text-2xl  hover:bg-zinc-200 duration-200 rounded py-1 text-orange-400">
                    <FontAwesomeIcon icon={faCalendarDay}></FontAwesomeIcon>
                    <span className="text-sm text-stone-400">Event</span>
                  </label>
                </div>
              </div>
              <div>
                <div className="mr-8 mt-8 w-16">
                  <label className="cursor-pointer text-2xl  hover:bg-zinc-200 duration-200 rounded py-1 text-orange-400">
                    <FontAwesomeIcon icon={faFilePen}></FontAwesomeIcon>
                    <span className="text-sm text-stone-400">Write</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
