const videoActionCreators = {
    setVideo: (string) => {
        return {
            type: "set",
            payload: string,
        }
    }
}

export default videoActionCreators;