// You do not need to change any code in this file
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons'
import "./SearchBar.css";

const SearchBar = (props) => {
  const [searchWord, setSearchWord] = useState("")

  useEffect(() => {
    console.log("hi")
    filterPosts(searchWord)
  }, [searchWord])

  console.log(searchWord)

  const handler = (event) => {
    setSearchWord(event.target.value)
    // filterPosts(searchWord)
  }

  const filterPosts = (word) => {
    const fill = props.data.filter(obj => obj.username.includes(word))
    props.setData(fill)
    // return fill
  }

  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} /> | Instagram
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
          onChange={handler}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
