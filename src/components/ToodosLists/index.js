import { useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ToodoContext } from "../../context";
import { WrapperLists } from "..";

import classes from './style.module.css';
import { WORDS } from "../../consts/words";
import { TO_DATAES } from "../../consts/paths";

const ToodoLists = () => {

    const { data } = useParams();
    const { toodos } = useContext(ToodoContext);

    useEffect(() => {
        const jsonObject = JSON.stringify(toodos);
        localStorage.setItem(WORDS.STORAGE_TOODOS_NAME, jsonObject);
    }, [toodos]);

    const title = useMemo(() => `you have ${toodos[data].length} things to do this date ${data}`, [data]);

    return (    
        <div className={classes.ListsContiner}>
            <Link to={TO_DATAES} className={classes.linkToBack}>{WORDS.GO_BACK} &#8592;</Link>
            <h1 className={classes.title} >{title}</h1>
            <WrapperLists />
        </div>
    )
}

export default ToodoLists