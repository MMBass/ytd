import "./Header.scss";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Flex from '../Flex/Flex';
import Navbar from '../Navbar/Navbar';
import Select from '../Select/Select';
import LoaderLine from '../LoaderLine/LoaderLine';


function Header() {
  const mode = useSelector(state => state.settings.mode);

  function selectChange(str) {
    if (str === 'music')  window.localStorage.setItem('globalFormat','audio');
    window.localStorage.setItem('mode',str); // todo redux middlwere every mode change?
    window.location.reload();
  }

  return (
    <div id="HEADER">
      <LoaderLine></LoaderLine>
      <Flex>
        <NavLink className="h1-link" to="yt-downloader-site/"><h1>YT DOWNLOADER</h1></NavLink>
        <Navbar></Navbar>
        <Select title="Mode" first={mode} options={["music", "playlist", "video"].filter((w)=>{return w !== mode})} handleChange={selectChange}></Select>
      </Flex>
    </div>
  );
}

export default Header;
