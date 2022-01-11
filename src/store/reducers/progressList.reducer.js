
const reducer = (state = false, action) => {
    switch (action.type) {
        case "setProgressList":
            return state = {
                listLength: action.payload,
                position: 0,
            };
        case "updateProgressList":
            return {
                ...state,
                position: state.position + 1,
                percentage: ((state.position + 1) / state.listLength) * 100
            };
        case "resetProgressList":
            return state = false;
        default:
            return state;
    }
}

export default reducer;