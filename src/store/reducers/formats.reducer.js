const reducer = (state = ["720p","mp3", "mp4","360p"], action )=>{
    switch (action.type){
        case "setFormats":
            return state = action.payload;
        default:
            return state;
    }
}

export default reducer;