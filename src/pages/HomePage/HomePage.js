import "./HomePage.scss";
import { useSelector } from "react-redux";

import SearchBar from '../../components/SearchBar/SearchBar';
import DisplayLayout from '../../components/DisplayLayout/DisplayLayout';
import DownBtn from "../../components/DownBtn/DownBtn";
import Modal from "../../components/Modal/Modal";
import ProgressBar from "components/ProgressBar/ProgressBar";
import BlockLayout from "components/BlockLayout/BlockLayout";

function HomePage() {
  const video = useSelector((state) => state.video);
  const selected = useSelector((state) => state.selected);
  const modal = useSelector((state) => state.openModal);
  const progressList = useSelector((state) => state.progressList);
  
        return (
          <div className="home-page">
            <SearchBar></SearchBar>
            <DisplayLayout></DisplayLayout>
            {video.id && <DownBtn></DownBtn>}
            {modal && <Modal title={selected.title}></Modal>}
            {progressList && <BlockLayout><ProgressBar></ProgressBar></BlockLayout>}
          </div>
        );
};

export default HomePage;