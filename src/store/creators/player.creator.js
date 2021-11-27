const playerActionCreators = {
    openPlayer: (bool) =>{
        return  {
            type: "open",
            payload: bool,
        };
    },
}

export default playerActionCreators;