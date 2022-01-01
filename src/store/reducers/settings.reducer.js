const initState = {
    mode:  window.localStorage.getItem('mode') || "music" ,
    globalFormat: window.localStorage.getItem('globalFormat'),
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