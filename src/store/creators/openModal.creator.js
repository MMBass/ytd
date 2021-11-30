const openModal = {
    openModal: (bool) =>{
        return  {
            type: "openModal",
            payload: bool,
        };
    },
}

export default openModal;