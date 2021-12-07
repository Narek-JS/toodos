import { Link } from "react-router-dom";
import { Fragment, useContext, useMemo } from "react";
import { ToodoContext } from "../../context";
import { AiOutlineDelete } from "react-icons/ai";
import classes from './style.module.css';
import { TO_LISTS } from "../../consts/paths";

const ListsDate = (props) => {
    const { setShowConfirm, showConfirm, setListIndex } = props;
    const { toodos } = useContext(ToodoContext);

    const removeList = (index) => {
        setShowConfirm(() => !showConfirm);
        setListIndex(index);
    }

    return useMemo(() => { 
        const dates = Object.keys(toodos);
        return dates.map((date, index) => (
            <Fragment key={index}>
                <Link className={classes.list} to={TO_LISTS + date}>
                    <span className={classes.date}>{date}({toodos[date].length})</span>
                </Link>
                <AiOutlineDelete className={classes.iconGarbeg} onClick={() => removeList(index)}/>
            </Fragment>
        ))
    }, [toodos]);
}

export { ListsDate };
