import React from "react";
import "./SearchBar.scss";

import { useState } from "react";
import { useSelector } from "react-redux";
import { saveHistory } from "@services/history.service";

import ytSingleSearch from "services/ytSingleSearch.service";
import ytListSearch from "services/ytListSearch.service";
import getListFiles from "@services/getListFiles.service";
import { FaSearch } from 'react-icons/fa';
import { AiOutlineSend } from 'react-icons/ai';
import { ImDownload2 } from 'react-icons/im';
import Button from '../Button/Button';
import Input from '../Input/Input';

function SearchBar() {
  const [term, setTerm] = useState("");
  const [listIdTerm, setlistIdTerm] = useState("");
  const [key, setKey] = useState("");
  const mode = useSelector(state => state.settings.mode);

  const handleChange = (event) => {
    let str = event.target.value;
    switch (event.target.name) {
      case "key-input":
        setKey(str);
        break;
      case "video-search":
        setTerm(extractId(str));
        break;
      case "list-id":
        setlistIdTerm(extractId(str));
        break;
      default:
        return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(term.length > 1){
      if (mode === 'playlist') ytListSearch(term);
      else ytSingleSearch(term);
      saveHistory("SEARCH_HISTORY",term);
    }
  };

  const handleListIdSubmit = (e) => {
    e.preventDefault();
    if(listIdTerm.length > 5){
      if (mode === 'playlist') getListFiles(listIdTerm);
    }
  };

  const lsSubmit = () => {
    window.localStorage.setItem("API_KEY", key);
    window.location.reload();
  }

  const extractId = (str) => {
    if (str.indexOf("youtu.be/") >= 0) {
      const v_i = str.indexOf(".be/");
      return str.slice(v_i + 4, v_i + 4 + 11);
    }

    if (str.indexOf("youtube.com") >= 0) {
      if(str.indexOf("list=") >= 0){
        const v_i = str.indexOf("list=");
        return str.slice(v_i + 5, Infinity);
      }
      if(str.indexOf("v=") >= 0){
        const v_i = str.indexOf("v=");
        return str.slice(v_i + 2, v_i + 2 + 11);
      }
    }
    
    return str;
  }

  if (! window.localStorage.getItem("API_KEY") || window.localStorage.getItem("API_KEY").length < 6) {
    return (
      <form className="search-form" onSubmit={lsSubmit}>
        <Input onChange={handleChange} name='key-input' type="text" placeholder="Enter the api key first" ></Input>
        <Button type="submit">
          <AiOutlineSend></AiOutlineSend>
        </Button>
      </form>
    );
  }

  if (mode === 'playlist') {
    return (
      <>
        <form className="search-form" onSubmit={handleSubmit}>
        <Input onChange={handleChange} name='video-search' type="text" placeholder="Search playlist name..." ></Input>
        <Button type="submit">
          <FaSearch></FaSearch>
        </Button>
      </form>
      <form className="search-form" onSubmit={handleListIdSubmit}>
        <Input onChange={handleChange} name='list-id' type="text" placeholder="past playlist ID for Direct download" ></Input>
        <Button type="submit">
          <ImDownload2></ImDownload2>
        </Button>
      </form>
      </>
    );
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <Input onChange={handleChange} name='video-search' type="text" placeholder="Search text / video id / link..." ></Input>
      <Button type="submit">
        <FaSearch></FaSearch>
      </Button>
    </form>
  );

};

export default SearchBar;