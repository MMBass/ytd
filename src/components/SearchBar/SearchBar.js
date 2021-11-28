import React from "react";
import "./SearchBar.scss";

import { useState } from "react";

import ytApiSearch from "services/ytApiSearch.service";
import { FaSearch } from 'react-icons/fa';
import Button from '../Button/Button';
import Input from '../Input/Input';

function SearchBar() {
    const [term, setTerm] = useState("");

    const handleChange = (event) => {
      setTerm(event.target.value);
    }

    const handleSubmit = () => { 
      ytApiSearch(term);
    };

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