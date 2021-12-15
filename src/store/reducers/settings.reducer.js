const initState = {
    mode: "video",
    globalFormat: "", // audio //(TODO save the code quality, not the format)
}

const reducer = (state = initState, action )=>{
    switch (action.type){
        case "setMode":
            return { ...state, mode: action.payload };
        case "setGlobalFormat":
            return { ...state, globalFormat: action.payload };
        default:
            return state;
    }
}

export default reducer;