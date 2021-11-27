import React from "react";
import "./VideoList.scss"

import VideoItem from "../VideoItem/VideoItem";

function VideoList() {

  const data = [
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  //   {
  //   title: "example",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // },
  // {
  //   title: "example 2 gg jskusia sjwhsljbhjhws",
  //   source: "source",
  //   views: "30k",
  //   duration: "3:20",
  //   img:""
  // }
];

  return (
    <div className="vid-list">
      {data.map((i) =>
        <>{<VideoItem {...i} key={i.title}></VideoItem>}</>
      )}
    </div>

  );
};

export default VideoList;