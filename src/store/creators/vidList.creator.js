const vidListActionCreators = {
    setList: (array) => {
        return {
            type: "setList",
            payload: array,
        }
    },
    resetList: (bool) => {
        return {
            type: "resetList",
            payload: bool,
        }
    }
}

export default vidListActionCreators;