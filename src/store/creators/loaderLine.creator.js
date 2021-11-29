const playerActionCreators = {
    openLoader: (bool) =>{
        return  {
            type: "openLoader",
            payload: bool,
        };
    },
}

export default playerActionCreators;