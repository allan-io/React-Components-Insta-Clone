//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";


const PostsPage = ({ newData }) => {

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {newData.map((post, i) => (
        <Post key={i} data={post}/>
      ))}
    </div>
  );
};

export default PostsPage;
