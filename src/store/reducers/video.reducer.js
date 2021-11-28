const reducer = (state = {}, action )=>{
    switch (action.type){
        case "setVideo":
            return state = action.payload;
        default:
            return state;
    }
}

export default reducer;