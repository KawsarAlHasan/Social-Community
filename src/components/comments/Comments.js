import axios from "axios";
import React, { useEffect, useState } from "react";

const Comments = () => {
  const [backendComments, setbackendComments] = useState([]);
  console.log(backendComments);
  useEffect(() => {
    axios.get("https://mmh-server.herokuapp.com/comment").then((res) => {
      setbackendComments(res.data);
    });
  }, []);
  return (
    <div>
      {backendComments.map((backendComment) => {
        <div>
          <p>{backendComment.post}</p>
        </div>;
      })}
    </div>
  );
};

export default Comments;
