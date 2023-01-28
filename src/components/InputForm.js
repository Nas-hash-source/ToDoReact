import React from 'react';
import Styles from './InputForm.module.css';

export default function InputForm(props){
    const handleChange = e => props.setInput(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        // simple unique id by incrementing the last id by 1
        if(!props.input) return;
        let id;
        if (props.toDoLists.length > 0) {
            id = props.toDoLists[props.toDoLists.length - 1].id + 1;
        } else {
            id = 0;
        }
        props.addToDo({task: props.input, id, isComplete: false});
        props.setInput("");
    }

    return (
        <form className={Styles.inputForm}>
            <input
                type="text"
                className={Styles.inputPrimary}
                placeholder="Enter your task..."
                autoComplete= "off"
                autoFocus
                value={props.input}
                onChange={handleChange}
            />
            <button 
                className={Styles.btnPrimary}
                onClick={handleSubmit}
            >
                Add
            </button>
        </form>
    );
}