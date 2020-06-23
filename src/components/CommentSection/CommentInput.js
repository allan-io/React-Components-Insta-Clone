// You do not need to do anything in this file
import React, { useState } from 'react';

const CommentInput = ({ comments, setComments }) => {

  const [newComment, setNewComment] = useState("")
  let hover = ""

  const handler = (event) => {
    setNewComment(event.target.value)
  }
  if (newComment !== "") {
    hover = "darken"
  } else {
    hover = ""
  }
  const submitHandler = (event) => {
    event.preventDefault()

    const obj = {
      username: "allanboston",
      text: newComment
    }

    setComments([...comments, obj])

    setNewComment("")
  }


  // console.log("WTF", props.comments[props.comments.length -1])
  return (
    <form className="comment-form" onSubmit={submitHandler}>
      <input
        className="input"
        type="text"
        value={newComment}
        placeholder="Add comment... "
        onChange={handler}
      />
      <button id={hover} className="submitButton" type="submit">Post</button>
    </form>
  );
};

export default CommentInput;
