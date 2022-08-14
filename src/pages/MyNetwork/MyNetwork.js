import {
  faAddressCard,
  faPerson,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MyNetwork = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.get("https://mmh-server.herokuapp.com/post").then((res) => {
      setCard(res.data);
    });
  }, []);

  const deleteCard = (e) => {
    axios.delete(`https://mmh-server.herokuapp.com/post/${e}`).then((res) => {
      const realData = res.data;
      if (realData.deletedCount > 0) {
        const remaining = card.filter((card) => card._id !== realData._id);
        setCard(remaining);
      }
    });
  };

  return (
    <div className="bg-base-200 h-full">
      <div className="grid grid-cols-3 mx-16 gap-5">
        <div className="mt-2 col-span-1">
          <div class="card h-auto w-80 mx-auto bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Manage my network</h2>
              <ul class="menu bg-base-100 w-auto rounded-box gap-0">
                <li>
                  <a>
                    <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
                    Connection
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
                    Contacts<p className="ml-24">39</p>
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
                    People | Follow
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>Groups
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>Events
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>Pages
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
                    Newsletters
                  </a>
                </li>
                <li>
                  <a>
                    <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>Hashtags
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-2 mt-2">
          <div className="col-span-3 flex justify-between border-2 h-12 rounded-md mb-4 bg-white">
            <div className="mt-2 ml-3">
              <p>No pending invitations</p>
            </div>
            <div className="mt-2 mr-3">
              <a href="">Manage</a>
            </div>
          </div>

          <div className="col-span-2 mt-2 grid grid-cols-3 gap-3 bg-white rounded-md">
            <div className="col-span-3 mt-2 flex justify-between">
              <p className="ml-3">
                People in Telecommunications industry are following
              </p>
              <a className="mr-3" href="">
                See all
              </a>
            </div>
            {card.map((card) => (
              <div class="card bg-base-100 shadow-xl">
                <div class="card-body -mr-2 -ml-2">
                  <div className="ml-44">
                    <button
                      onClick={() => {
                        deleteCard(card._id);
                      }}
                      class="btn btn-circle btn-sm z-30 absolute"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div>
                    <div className="h-20 card place-items-center -mt-3">
                      <img
                        src="https://tandsgo.com/wp-content/uploads/2020/02/Abstract-blue-and-orange-pattern.jpg"
                        alt="no internet"
                      />
                    </div>
                    <div className="place-items-start border-0 -mt-14 ml-3">
                      <div className="avatar">
                        <div className="w-16 rounded-full ring ring-white ring-offset-base-100 ring-offset-1">
                          <img
                            src="https://placeimg.com/192/192/people"
                            alt="no internet"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>{card.name}</h3>
                  <p className="text-sm text-zinc-500">
                    Director, Bengal Group of Industries
                  </p>
                  <span className="text-xs text-zinc-500">
                    Talks about #startup, #bangladesh, #leadership,
                    #enterpreneurship, and
                  </span>
                  <a className="btn btn-sm rounded-2xl mt-3 bg-white border-blue-500 text-blue-600 hover:bg-slate-200 hover:border-2 hover:border-blue-500">
                    Follow
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNetwork;
