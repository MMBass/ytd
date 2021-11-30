const name = {
    setName: (bool) =>{
        return  {
            type: "setName",
            payload: bool,
        };
    },
}

export default name;