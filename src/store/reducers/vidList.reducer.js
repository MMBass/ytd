const initState = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
];

const reducer = (state = initState, action )=>{
    switch (action.type){
        case "setList":
            return state = action.payload;
        default:
            return state;
    }
}

export default reducer;