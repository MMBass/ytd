const reducer = (state = "", action )=>{
    switch (action.type){
        case "set":
            return state = action.payload || state;
        default:
            return state = "";
    }
}

export default reducer;