import "./DisplayLayout.scss";

import Player from '../Player/Player';
import VideoList from '../VideoList/VideoList';

function DisplayLayout() {

    return (
        <div className="display-layout">
            <Player></Player>
            <VideoList></VideoList>
        </div>
    );
};

export default DisplayLayout;