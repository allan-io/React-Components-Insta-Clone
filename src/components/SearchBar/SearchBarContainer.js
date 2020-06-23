// You do not need to change any code in this file
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons'
import "./SearchBar.css";
import dummyData from "../../dummy-data"

const SearchBar = ({ setNewData }) => {
  const [searchWord, setSearchWord] = useState("")

  useEffect(() => {
    filterPosts(searchWord)
  }, [searchWord])

  const handler = (event) => {
    setSearchWord(event.target.value)
  }

  const filterPosts = (word) => {
    const fill = dummyData.filter(obj => obj.username.includes(word))
    setNewData(fill)
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
