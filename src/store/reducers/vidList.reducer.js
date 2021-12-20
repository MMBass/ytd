const initState = Array.apply(null, Array(12));;

const reducer = (state = initState, action )=>{
    switch (action.type){
        case "setList":
            return state = state.concat(action.payload);
        case "resetList":
            return state = [];
        default:
            return state;
    }
}

export default reducer;