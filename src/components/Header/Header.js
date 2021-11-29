import "./Header.scss";

import Flex from '../Flex/Flex';
import Navbar from '../Navbar/Navbar';
import LangSwitch from '../LangSwitch/LangSwitch';
import LoaderLine from '../LoaderLine/LoaderLine';

function Header() {
  return (
    <div id="HEADER">
      <LoaderLine></LoaderLine>
      <Flex>
        <h1>YT DOWNLOADER</h1>
        <Navbar></Navbar>
        <LangSwitch></LangSwitch>
      </Flex>
    </div>
  );
}

export default Header;
