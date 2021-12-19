import React from "react";
import { useSelector } from "react-redux";
import "./VideoList.scss"

import VideoItem from "../VideoItem/VideoItem";
import Flex from "@components/Flex/Flex";

function VideoList() {

  let list = useSelector((state) => state.vidList);

  if (list.length < 1) {
    list =  Array.apply(null, Array(12));
  }

  return (
    <div className="vid-list">
      <Flex>
        {list.map((i) =>
          <>{<VideoItem {...i} key={new Date() || i.id}></VideoItem>}</>
        )}
      </Flex>
    </div>
  );
};

export default VideoList;