import "./HomePage.scss";
import { useSelector } from "react-redux";

import SearchBar from '../../components/SearchBar/SearchBar';
import DisplayLayout from '../../components/DisplayLayout/DisplayLayout';
import DownBtn from "../../components/DownBtn/DownBtn";
import Modal from "../../components/Modal/Modal";

function HomePage() {
  const video = useSelector((state) => state.video);
  const modal = useSelector((state) => state.openModal);
  
        return (
          <div className="home-page">
            <SearchBar></SearchBar>
            <DisplayLayout></DisplayLayout>
            {video.id && <DownBtn></DownBtn>}
            {modal && <Modal title={video.title}></Modal>}
          </div>
        );
};

export default HomePage;