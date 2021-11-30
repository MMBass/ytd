const selected = {
    setSelected: (obj) =>{
        return  {
            type: "setSelected",
            payload: obj,
        };
    },
}

export default selected;