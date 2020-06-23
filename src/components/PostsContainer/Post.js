// You will add code in this file
import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = (props) => {
  // set up state for the likes

  return (
    <div className="post-border">
      <PostHeader
        username={props.data.username}
        thumbnailUrl={
          props.data.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.data.imageUrl}
        />
      </div>
      <LikeSection likes={props.data}/>
      <CommentSection
        postId={props.data.imageUrl}
        comments={props.data.comments}
      />
    </div>
  );
};

export default Post;
