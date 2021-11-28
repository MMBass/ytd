const playerActionCreators = {
    openPlayer: (bool) =>{
        return  {
            type: "openPlayer",
            payload: bool,
        };
    },
}

export default playerActionCreators;