import {useEffect, useState, useRef} from "react";
import { useSelector } from "react-redux";
import "./Player.scss";

import VidDetails from '@components/VidDetails/VidDetails';
import ExampleParagraph from '@components/ExampleParagraph/ExampleParagraph';
import MinimizePlayer from "@components/MinimizePlayer/MinimizePlayer";

function Player(props) {
  const player = useSelector((state) => state.player);
  const video = useSelector((state) => state.video);

  const [fixed, setFixed] = useState('');
  // const [pageOffset, setOffset] = useState(0);
  const playerElement = useRef(null);

  useEffect(() => {
      window.onscroll = () => {
          handleScroll();
      }
  });

  const handleScroll = () => {
      // setOffset(window.pageYOffset)
      if (window.pageYOffset > playerElement.current.offsetTop) {
          setFixed('fixed');
      } else {
          setFixed('');
      }
  }

  const VidoDetails = video.id ? <VidDetails {...video}></VidDetails> : <ExampleParagraph ></ExampleParagraph>;

  const FrameWrapper = function () {
    return (
      <div className="player-outer-wrapper">
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
    <div  ref={playerElement} className={player ? "player "+ fixed : "player fold-player "+ fixed}>
      <MinimizePlayer></MinimizePlayer>
      <FrameWrapper></FrameWrapper>
    </div>

  );
};

export default Player;