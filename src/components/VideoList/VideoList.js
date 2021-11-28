import React from "react";
import { useSelector } from "react-redux";
import "./VideoList.scss"

import VideoItem from "../VideoItem/VideoItem";
import Flex from "@components/Flex/Flex";

function VideoList() {

  const list = useSelector((state) => state.vidList);

  return (
    <div className="vid-list">
      <Flex>
        {list.map((i) =>
        // key={i.id.videoId}
          <>{<VideoItem {...i} ></VideoItem>}</>
        )}
      </Flex>

    </div>

  );
};

export default VideoList;