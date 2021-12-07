import { useContext, useEffect, useState } from 'react';
import { AiOutlineDelete, AiTwotoneEdit } from "react-icons/ai";
import { useParams } from 'react-router';
import { WORDS } from '../../consts/words';
import { ToodoContext } from '../../context';
import { deleteListValue, editListValue } from "../../context/reducer/action";

import classes from './style.module.css';

const List = (props) => {
    const { itam, index } = props;

    const { dispatch } = useContext(ToodoContext);
    const [ activeEditIndex, setActiveEditIndex ] = useState(null);
    const [ value, setValue ] = useState('');
    const { data } = useParams();

    useEffect(() => {
        if(value){
            dispatch(editListValue(data, index, value))
        }
    }, [value])

    const deleteList = (index) => {
        dispatch(deleteListValue(data, index))
    }
    const editText = (index) => {
        setActiveEditIndex(() => activeEditIndex !== null ? null : index);
    }
    const changeValue = (event) => {
        const { target:{value} } = event;
        editText(null)
        setValue(value);
    }


    return (
        <div className={classes.list}>
            <input 
                value={value}
                type={WORDS.TYPES_INPUT.TEXT}
                placeholder={itam} 
                onChange={changeValue}
                onClick={() => editText(index)}
                className={`${classes.input} ${classes[index === activeEditIndex ? WORDS.CLASS.ACTIVE: WORDS.CLASS.INPUT]}`} 
            />
            <div className={classes.wrapperEdit} onClick={() => editText(index)}>
                <AiTwotoneEdit />
                <span>{WORDS.EDIT}</span>
            </div>
            <div className={classes.wrapperDelete} onClick={() => deleteList(index)}>
                <AiOutlineDelete />
                <span>{WORDS.DELETE}</span>
            </div>
        </div>
    )
}

export { List };
