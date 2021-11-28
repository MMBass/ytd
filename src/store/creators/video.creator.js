const videoActionCreators = {
    setVideo: (obj) => {
        return {
            type: "setVideo",
            payload: obj,
        }
    }
}

export default videoActionCreators;