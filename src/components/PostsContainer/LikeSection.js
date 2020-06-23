// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons'


const LikeSection = props => {
  console.log(props.likes.comments[1].username)
  const [likes, setLikes] = useState(props.likes.likes)
  const [heartColor, setHeartColor] = useState(faHeart)
  const [turnRed, setTurnRed] = useState("")
  const likeFunc = () => {
    if (turnRed === "") {
      setTurnRed("red")
      setHeartColor(fasHeart)
      setLikes(likes + 1)
    } else {
      setTurnRed("")
      setHeartColor(faHeart)
      setLikes(likes - 1)
    }
  }
  const imgArr = ["https://i.imgur.com/AEjtLyc.jpg", "https://i.imgur.com/lalbFWT.jpg", "https://i.imgur.com/r3G0Iql.png"]
  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div 
          className="like-section-wrapper"
          >
          <FontAwesomeIcon onClick={likeFunc}
          className={turnRed}
          icon={heartColor} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <div className="like-counts">
        <img className="like-img" src={imgArr[Math.floor(Math.random() * 3)]}/>
        <p className="like-number">liked by&nbsp;<b>{props.likes.comments[1].username}</b>&nbsp;and {likes - 1} others</p>
      </div>
    </div>
  )
};

export default LikeSection;
