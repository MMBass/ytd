const reducer = (state = true, action )=>{
    switch (action.type){
        case "openPlayer":
            return state = action.payload;
        default:
            return state;
    }
}

export default reducer;