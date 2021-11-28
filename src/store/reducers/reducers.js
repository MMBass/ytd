import {combineReducers} from "redux";
import playerReducer from "./player.reducer";
import videoReducer from "./video.reducer";
import vidListReducer from "./vidList.reducer";

const reducers = combineReducers({
    player: playerReducer,
    video: videoReducer,
    vidList: vidListReducer,
});

export default reducers;