import React from "react";
import "./Player.scss";

import VidDetails from '../VidDetails/VidDetails';
import ExampleParagraph from '../ExampleParagraph/ExampleParagraph';

const video = null; // TODO redux;

function Player(props) {

  props = {
    // title: "example 1 example",
    // source: "source",
    // views: "30k",
    // duration: "3:20"
  };
  
  if (!video) {
    return (
      <div className="player">
        <div className="frame-wrapper">
          <iframe src=''
            frameBorder='0'
            title='video'
          ></iframe>
        </div>

        {props.title
          ?
          <VidDetails {...props}></VidDetails>
          //TODO props from global state?
          :
          <ExampleParagraph ></ExampleParagraph>
        }

      </div>

    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="player">
      <iframe src={videoSrc} allowFullScreen title="Video player" />
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default Player;