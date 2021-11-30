const loadeLineActionCreators = {
    openLoader: (bool) =>{
        return  {
            type: "openLoader",
            payload: bool,
        };
    },
}

export default loadeLineActionCreators;