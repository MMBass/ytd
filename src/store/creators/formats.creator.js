const formatsActionCreators = {
    setFormats: (arr) =>{
        return  {
            type: "setFormats",
            payload: arr,
        };
    },
}

export default formatsActionCreators;