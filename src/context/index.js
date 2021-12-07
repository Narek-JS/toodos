import { createContext, useReducer } from "react";
import { WORDS } from "../consts/words";
import { reducer } from "./reducer";


const ToodoContext = createContext(null);

const initialValue = JSON.parse(localStorage.getItem(WORDS.STORAGE_TOODOS_NAME)) || {};

const ProviderToodoContext = ({ children }) => {
    const [ toodos, dispatch ] = useReducer(reducer, initialValue);
    
    return (
        <ToodoContext.Provider value={{toodos, dispatch}}>
            {children}
        </ToodoContext.Provider>
    )
}

export { ProviderToodoContext, ToodoContext };