import {combineReducers} from "redux";
import playerReducer from "./player.reducer";
import videoReducer from "./video.reducer";

const reducers = combineReducers({
    player: playerReducer,
    video: videoReducer,
});

export default reducers;