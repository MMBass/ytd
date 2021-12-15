import React from "react";
import { useSelector } from "react-redux";
import "./Player.scss";

import VidDetails from '@components/VidDetails/VidDetails';
import ExampleParagraph from '@components/ExampleParagraph/ExampleParagraph';
import MinimizePlayer from "@components/MinimizePlayer/MinimizePlayer";

function Player(props) {
  const player = useSelector((state) => state.player);
  const video = useSelector((state) => state.video);

  const VidoDetails = video.id ? <VidDetails {...video}></VidDetails> : <ExampleParagraph ></ExampleParagraph>;

  const FrameWrapper = function () {
    return (
      <div>
        <div className="frame-wrapper">
          { video.id ?
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={props.title || 'video'}
              frameBorder='0'
              allowFullScreen={true}
            ></iframe>
            :
            <iframe
            title="uniqe"
            frameBorder='0'
          ></iframe>
          }

        </div>
        {VidoDetails}
      </div>
    );

  }

  return (
    <div className={player ? "player" : "player fold-player"}>
      <MinimizePlayer></MinimizePlayer>
      {player && <FrameWrapper></FrameWrapper>}
    </div>

  );
};

export default Player;