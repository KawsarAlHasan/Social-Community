import React from "react";
import Card from "./Card";
import Comments from "./Comments";
import Post from "./Post";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

const Home = (props) => {
  return (
    <div className="bg-base-200">
      <div className="grid grid-cols-12">
        <div className="col-span-3 mt-3 grid justify-items-end">
          {" "}
          <Sidebar />{" "}
        </div>
        <div className="col-span-6 mt-3 justify-items-center">
          <Post />
          <Card />
          <Comments></Comments>
        </div>
        <div className="col-span-3 mt-3 grid justify-items-start">
          {" "}
          <Widgets />{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
