const initState = {
    mode: "video",
    globalFormat: "audio", //(TODO save the code quality, not the format)
}

const reducer = (state = initState, action )=>{
    const newState = state;
    switch (action.type){
        case "setMode":
            newState.mode = action.payload;
            return state = newState;
        case "setGlobalFormat":
            newState.globalFormat = action.payload;
            return state = newState;
        default:
            return state;
    }
}

export default reducer;