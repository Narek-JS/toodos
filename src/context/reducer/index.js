import { ADD_NEW_LIST, ADD_NEW_ITEM, DELETE_LIST, DELETE_LIST_VALUE, EDIT_LIST_VALUE } from "../actionTypes";

const reducer = (state, action) => {
    const { type } = action;
    switch (type) {
        case ADD_NEW_LIST:{
            const { payload: {data, value} } = action;
            return {
                ...state,
                [data]:[value]
            }
        }
        case ADD_NEW_ITEM: {
            const { payload: {data, value} } = action;
            return {
                ...state,
                [data]:[...state[data], value]
            }
        }
        case DELETE_LIST: {
            const { payload : {index} } = action;
            const keys = Object.keys(state);
            delete state[keys[index]];

            return {
                ...state,
            }
        }
        case DELETE_LIST_VALUE :{
            const { payload: {key, index} } = action;
            const newList = state[key].filter((el, i) => i !== index);
            if(newList.length === 0) {
                delete state[key];
                return {
                    ...state
                }
            }else {
                return {
                    ...state,
                    [key]: [...newList]
                }   
            }
        }
        case EDIT_LIST_VALUE :{
            const { payload: {key, index, value} } = action;
            state[key][index] = value;
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}

export { reducer }
