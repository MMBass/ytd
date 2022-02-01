import "./HomePage.scss";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import SearchBar from '../../components/SearchBar/SearchBar';
import DisplayLayout from '../../components/DisplayLayout/DisplayLayout';
import DownBtn from "../../components/DownBtn/DownBtn";
import Modal from "../../components/Modal/Modal";
import ProgressBar from "components/ProgressBar/ProgressBar";
import BlockLayout from "components/BlockLayout/BlockLayout";
import DownFrame from "components/DownFrame/DownFrame";

function HomePage() {
  const video = useSelector((state) => state.video);
  const selected = useSelector((state) => state.selected);
  const modal = useSelector((state) => state.openModal);
  const progressList = useSelector((state) => state.progressList);

  useEffect(() => {
    
  }, [progressList]);

  return (
    <div className="home-page">
      <SearchBar></SearchBar>
      <DisplayLayout></DisplayLayout>
      {video.id && <DownBtn></DownBtn>}
      {modal && <Modal title={selected.title}></Modal>}
      {progressList && <BlockLayout><ProgressBar></ProgressBar></BlockLayout>}
      {progressList && 
        progressList.frame.map((frame)=>{
          return <DownFrame src={frame} key={frame}></DownFrame>
        })
      }
    </div>
  );
};

export default HomePage;