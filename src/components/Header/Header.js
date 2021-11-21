import "./Header.scss";

import Flex from '../Flex/Flex';
import Navbar from '../Navbar/Navbar';
import LangSwitch from '../LangSwitch/LangSwitch';

function Header() {
  return (
    <div id="HEADER">
      <Flex>
        <h1>YT DOWNLOADER</h1>
        <Navbar></Navbar>
        <LangSwitch></LangSwitch>
      </Flex>
    </div>
  );
}

export default Header;
