import "./MinimizePlayer.scss";

import{ useSelector, useDispatch} from "react-redux";
import{ bindActionCreators} from "redux";

import playerActionCreators from "@store/creators/player.creator.js";

import Button from "components/Button/Button";
import { FaPlayCircle } from 'react-icons/fa';
import { AiOutlineCloseSquare } from 'react-icons/ai';

function MinimizePlayer() {
  const dispatch = useDispatch();
  const { openPlayer } = bindActionCreators(playerActionCreators, dispatch);
  const player = useSelector((state) => state.player);

  return (
    <div id="MINIMIZE_PLAYER">
      <Button>
        {player ?
        <AiOutlineCloseSquare className="react-icons" onClick={()=>openPlayer(false)}></AiOutlineCloseSquare>
        :
        <FaPlayCircle className="react-icons" onClick={()=>openPlayer(true)}></FaPlayCircle>}
      </Button>
    </div>
  );
}

export default MinimizePlayer;
