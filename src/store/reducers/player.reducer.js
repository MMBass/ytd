const reducer = (state = false, action )=>{
    switch (action.type){
        case "open":
            return state = action.payload;
        default:
            return state = true;
    }
}

export default reducer;