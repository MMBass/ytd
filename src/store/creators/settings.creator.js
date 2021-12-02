const Settings = {
    setMode: (str) =>{
        return  {
            type: "setMode",
            payload: str,
        };
    },
    setGlobalFormat: (str) =>{
        return  {
            type: "setGlobalFormat",
            payload: str,
        };
    },
}

export default Settings;