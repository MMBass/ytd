import React from "react";
import "./SearchBar.scss";

import { FaSearch } from 'react-icons/fa';
import Button from '../Button/Button';
import Input from '../Input/Input';

function SearchBar() {

    const handleChange = () => { }
    const handleSubmit = () => { }

    return (
            <form onSubmit={handleSubmit}>
                {/* TODO use the input props */}
                    <Input onChange={handleChange} name='video-search' type="text" placeholder="Search video or playlist ..." ></Input>
                    <Button>
                      <FaSearch></FaSearch>
                    </Button>
            </form>
    );
};

export default SearchBar;