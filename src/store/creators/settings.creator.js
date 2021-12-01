const Settings = {
    setName: (bool) =>{
        return  {
            type: "setName",
            payload: bool,
        };
    },
}

export default Settings;