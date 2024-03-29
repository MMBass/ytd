import {combineReducers} from "redux";
import playerReducer from "./player.reducer";
import videoReducer from "./video.reducer";
import vidListReducer from "./vidList.reducer";
import loaderLine from "./loaderLine.reducer";
import selected from "./selected.reducer";
import openModal from "./openModal.reducer";
import formats from "./formats.reducer";
import settings from "./settings.reducer";
import progressList from "./progressList.reducer";

const reducers = combineReducers({
    player: playerReducer,
    video: videoReducer,
    vidList: vidListReducer,
    loaderLine: loaderLine,
    selected: selected,
    openModal: openModal,
    formats: formats,
    settings: settings,
    progressList: progressList,
});

export default reducers;