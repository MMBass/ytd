const reducer = (state = false, action )=>{
    switch (action.type){
        case "openLoader":
            return state = action.payload;
        default:
            return state;
    }
}

export default reducer;