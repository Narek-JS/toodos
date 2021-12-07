import { ADD_NEW_LIST, ADD_NEW_ITEM, DELETE_LIST, DELETE_LIST_VALUE, EDIT_LIST_VALUE } from "../actionTypes"

export const addNewList = (data, value) => {
    return {
        type:ADD_NEW_LIST,
        payload: {
            data:data,
            value:value
        }
    }
}
export const addNewItem = (data, value) => {
    return {
        type:ADD_NEW_ITEM,
        payload: {
            data:data,
            value:value
        }
    }
}
export const deleteList = (index) => {
    return { 
        type:DELETE_LIST,
        payload: {
            index:index
        }
    }
}

export const deleteListValue = (key, index) => {
    return { 
        type:DELETE_LIST_VALUE,
        payload: {
            key:key,
            index:index
        }
    }
}

export const editListValue = (key, index, value) => {
    return {
        type:EDIT_LIST_VALUE,
        payload: {
            key:key,
            index:index,
            value: value
        }
    }
}