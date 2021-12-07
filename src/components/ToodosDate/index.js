import { Fragment, useEffect, useMemo, useState } from "react";
import { useContext } from "react";
import { Form, ListsDate } from "..";
import { WORDS } from "../../consts/words";
import { ToodoContext } from "../../context";
import { deleteList } from "../../context/reducer/action";

import classes from './style.module.css';

const ToodosDate = () => {
    const [ showConfirm, setShowConfirm ] = useState(false); 
    const [ listIndex, setListIndex ] = useState(null);

    const { toodos, dispatch } = useContext(ToodoContext);

    useEffect(() => {
        const jsonObject = JSON.stringify(toodos);
        localStorage.setItem(WORDS.STORAGE_TOODOS_NAME, jsonObject);
    }, [toodos]);

    const classNamesToodoContiner = useMemo(() => {
        return showConfirm ? WORDS.CLASS.SHOWCONFIRM : WORDS.CLASS.TOODOCONTINER
    }, [showConfirm]);

    const classNamesConfirm = useMemo(() => {
        return showConfirm ? WORDS.CLASS.NOTSHOWCONFIRM : WORDS.CLASS.CONFIRM
    }, [showConfirm]);

    const closeWindow = () => {
        setShowConfirm(false)
    }
    const removeList = () => {
        dispatch(deleteList(listIndex));
        closeWindow()
    }

    return (
        <Fragment>
            <div className={`${classes.confirm} ${classes[classNamesConfirm]}`}>
                <span className={classes.closeWindow} onClick={closeWindow}>X</span>
                <h2 className={classes.textConfirm}>{WORDS.TEXT_DELETE_WINDOW}</h2>
                <button 
                    type={WORDS.TYPES_BUTTON.BUTTON} 
                    className={classes.confirmButton} 
                    onClick={removeList}
                    children={WORDS.CONFIRM}    
                />
                <button 
                    type={WORDS.TYPES_BUTTON.BUTTON} 
                    className={classes.cancelButton} 
                    onClick={closeWindow}
                    children={WORDS.CANCEL}
                />
            </div>
            
            <div className={`${classes.toodoContiner} ${classes[classNamesToodoContiner]}`}>
                <h1 className={classes.title}>{WORDS.TOODOS}</h1>
                <Form />
                <ListsDate 
                    setShowConfirm={setShowConfirm} 
                    showConfirm={showConfirm} 
                    setListIndex={setListIndex}
                />
            </div>
        </Fragment>
    )
}

export default ToodosDate