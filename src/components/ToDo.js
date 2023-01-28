import React, { useEffect, useRef, useState } from 'react';
import Styles from './ToDo.module.css';

export default function ToDo (props) {
    const [editable, setEditable] = useState(false);
    const [update, setUpdate] = useState(props.value);
    const updateRef = useRef(null);

    useEffect(() => {
        editable && updateRef.current.focus();
    }, [editable]);

    const removeToDo = () => {
        props.removeToDo(props.id);
    }

    const toggleCheck = () => {
        props.toggleCheck(props.id);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!update) return;
        props.updateToDo(props.id, update);
        setEditable(false);
    }

    const handleChange = (e) => {
        setUpdate(e.target.value);
    }

    const toDoForm = editable ?
        (
            <li className={Styles.toDo}>
                <form className={Styles.form} onSubmit={handleSubmit}>
                    <input
                        className={Styles.update}
                        type="text"
                        id={props.id}
                        autoComplete= "off"
                        value={update}
                        ref={updateRef}
                        onChange={handleChange}
                    />
                </form>
                <div className= {Styles.btnWrapper}>
                    <button 
                        className={Styles.save}
                        onClick={handleSubmit}
                    >
                        Save
                    </button>
                    <button 
                        className={Styles.btn}
                        onClick={(e) => setEditable(false)}
                    >
                        Cancel
                    </button>
                </div>
            </li>
        ) :
        (
            <li className={Styles.toDo} id={props.id}>
                <form className={Styles.form}>
                    <input
                        className={Styles.checkBox}
                        type="checkbox"
                        id={props.id}
                        checked={props.checked}
                        onChange={toggleCheck}
                    />
                    <label className={Styles.label} htmlFor={props.id}>{props.value}</label>
                </form>
                <div className= {Styles.btnWrapper}>
                    <button 
                        className={Styles.btn}
                        onClick={() => setEditable(true)}
                    >
                        Edit
                    </button>
                    <button 
                        className={Styles.delete}
                        onClick={removeToDo}
                    >
                        Delete
                    </button>
                </div>
            </li>
        );


    return (
        <>
            {toDoForm}
        </>
    );
}
