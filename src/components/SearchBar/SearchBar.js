import React from "react";
import "./SearchBar.scss";

import { useState } from "react";

import ytApiSearch from "services/ytApiSearch.service";
import { FaSearch } from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';
import Button from '../Button/Button';
import Input from '../Input/Input';

function SearchBar() {
  const [term, setTerm] = useState("");
  const [key, setKey] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "key-input":
        setKey(event.target.value);
        break;
      case "video-search":
        setTerm(event.target.value);
        break;
      default:
        return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    ytApiSearch(term);
  };

  const lsSubmit = (e) => {
    window.localStorage.setItem("API_KEY",key);
  }

  if (!window.localStorage.getItem("API_KEY") || window.localStorage.getItem("API_KEY").length < 6) {
    return (
      <form onSubmit={lsSubmit}>
        {/* TODO use the input props */}
        <Input onChange={handleChange} name='key-input' type="text" placeholder="Enter the api key first" ></Input>
        <Button type="submit">
          <AiOutlineSend></AiOutlineSend>
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO use the input props */}
      <Input onChange={handleChange} name='video-search' type="text" placeholder="Search video or playlist ..." ></Input>
      <Button type="submit">
        <FaSearch></FaSearch>
      </Button>
    </form>
  );
};

export default SearchBar;