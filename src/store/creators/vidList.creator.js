const vidListActionCreators = {
    setList: (array) => {
        return {
            type: "setList",
            payload: array,
        }
    }
}

export default vidListActionCreators;