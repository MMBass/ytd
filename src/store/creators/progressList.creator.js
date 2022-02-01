const ProgressList = {
    setProgressList: (num) =>{
        return  {
            type: "setProgressList",
            payload: num,
        };
    },
    updateProgressList: (src) =>{
        return  {
            type: "updateProgressList",
            payload: src,
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