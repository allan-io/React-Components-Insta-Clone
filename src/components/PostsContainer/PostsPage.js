//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";


const PostsPage = (props) => {

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {props.data.map((post, i) => (
        <Post key={i} data={post}/>
      ))}
    </div>
  );
};

export default PostsPage;
