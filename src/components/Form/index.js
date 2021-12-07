
import { useContext, useState } from 'react';
import { WORDS } from '../../consts/words';
import { ToodoContext } from '../../context';
import { addNewItem, addNewList } from '../../context/reducer/action';
import classes from './style.module.css';

const Form = () => {
    const [ value, setValue ] = useState('');
    const [ data, setDate ] = useState('');
    const { toodos, dispatch } = useContext(ToodoContext);

    const submit = (event) => {
        event.preventDefault()
        
        if(!toodos[data] && value){
            dispatch(addNewList(data, value))
        }else if (value) {
            dispatch(addNewItem(data, value))
        }

        setValue('');
    }

    const changheValue = (event) => {
        const { target:{value} } = event;
        setValue(value);
    }

    const changeData = (event) => {
        const { target:{value} } = event;
        setDate(value);
    }

    return (
        <form className={classes.form} onSubmit={submit}> 
            <div className={classes.formGroup}>
                <input 
                    className={classes.formInput}
                    type={WORDS.TYPES_INPUT.TEXT}
                    id={WORDS.HTML_FOR.TEXT}
                    placeholder={WORDS.WRITE_TEXT} 
                    required
                    value={value}
                    onChange={changheValue} 
                />
                <label htmlFor={WORDS.HTML_FOR.TEXT} className={classes.formLabel}>{WORDS.WRITE_TEXT}</label>
            </div>
            <div className={classes.formGroup}>
                <input 
                    className={classes.formInput}
                    type={WORDS.TYPES_INPUT.DATE}
                    id={WORDS.HTML_FOR.DATE}
                    required
                    onChange={changeData}
                />
                <label htmlFor={WORDS.HTML_FOR.DATE} className={classes.formLabel}>{WORDS.WRITE_DATA}</label>
            </div>
            <button 
                className={classes.buttonAdd}
                type={WORDS.TYPES_BUTTON.SUBMIT}
                children={WORDS.ADD}
            />
        </form>
    )
}

export { Form }