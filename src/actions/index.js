export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY'
export const SAVE_MEMORY = 'SAVE_MEMORY'
export const HANDLE_MEMORY = 'HANDLE_MEMORY'
export const CLEAR_MEMORY = 'CLEAR_MEMORY'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (op) => {
    return({type:CHANGE_OPERATION, payload: op})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const saveMemory = () => {
    return({type:SAVE_MEMORY})
}

export const handleMemory = () => {
    return({type:HANDLE_MEMORY})
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}