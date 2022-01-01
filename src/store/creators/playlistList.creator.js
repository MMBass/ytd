const playlistListActionCreators = {
    setList: (arr) =>{
        return  {
            type: "setList",
            payload: arr,
        };
    },
    resetList: (bool) =>{
        return  {
            type: "resetList",
            payload: bool,
        };
    },
}

export default playlistListActionCreators;