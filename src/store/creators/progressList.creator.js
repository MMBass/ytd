const ProgressList = {
    setProgressList: (num) =>{
        return  {
            type: "setProgressList",
            payload: num,
        };
    },
    updateProgressList: (bool) =>{
        return  {
            type: "updateProgressList",
            payload: bool,
        };
    },
    resetProgressList: (bool) =>{
        return  {
            type: "resetProgressList",
            payload: bool,
        };
    },
}

export default ProgressList;