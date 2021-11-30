const selectedAction = {
    setSelected: (obj) =>{
        return  {
            type: "setSelected",
            payload: obj,
        };
    },
}

export default selectedAction;