import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./Player.scss";

import VidDetails from '@components/VidDetails/VidDetails';
import ExampleParagraph from '@components/ExampleParagraph/ExampleParagraph';
import MinimizePlayer from "@components/MinimizePlayer/MinimizePlayer";

function Player() {
  const player = useSelector((state) => state.player);
  const video = useSelector((state) => state.video);
  const mode = useSelector(state => state.settings.mode);
  const playerElement = useRef(null);
  const listFrame = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      handleScroll();
    }
  },[]);

  const handleScroll = () => {
    if(playerElement.current){
      if (window.innerWidth < 768) {
        if (window.pageYOffset > playerElement.current.offsetTop) {
          // Change the style without re-render
          playerElement.current.style.position = "fixed";
          playerElement.current.style.top = "0";
        } else {
          playerElement.current.style = '';
        }
      }
    }
   
  }

  const Frame = () => {
    if (video.id) {
      if (mode === 'playlist') {
        return <iframe 
        id="list-iframe"
        src={`https://www.youtube.com/embed/videoseries?list=${video.id}`}
        title={video.title || 'playlist'}
        frameborder="0" 
        allowFullScreen={true}
        ref={listFrame}
        ></iframe>
      }
      return <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title || 'video'}
                frameBorder='0'
                allowFullScreen={true}
      ></iframe>
    }
    else {
      return <iframe
              title="uniqe"
              frameBorder='0'
      ></iframe>
    }
  }

  const VidoDetails = video.id ? <VidDetails {...video}></VidDetails> : <ExampleParagraph ></ExampleParagraph>;

  const FrameWrapper = function () {
    return (
      <div className="player-outer-wrapper">
        <div className="frame-wrapper">
          <Frame></Frame>
        </div>
        {VidoDetails}
      </div>
    );
  }

  return (
    <div ref={playerElement} className={player ? "player " : "player fold-player "}>
      <MinimizePlayer title={video.title}></MinimizePlayer>
      <FrameWrapper></FrameWrapper>
    </div>
  );
};

export default Player;