const reducer = (state = false, action )=>{
    switch (action.type){
        case "openModal":
            return state = action.payload;
        default:
            return state;
    }
}

export default reducer;