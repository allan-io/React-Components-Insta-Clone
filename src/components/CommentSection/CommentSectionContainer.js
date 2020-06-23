// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {

  const [comments, setComments] = useState(props.comments)

  // Add state for the comments
  return (
    <div>
      {comments.map((comment, i) => <Comment key={i} comment={comment}/> )}
      <CommentInput comments={comments} setComments={setComments}/>
    </div>
  );
};

export default CommentSection;
