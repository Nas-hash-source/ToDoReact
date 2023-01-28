import React from 'react';
import ToDo from './ToDo';

const style = {
    padding: 0
}

export default function ToDoList(props) {
    const lists = props.toDoLists.map((toDo) => {
        return (
            <ToDo
                id={toDo.id}
                key={toDo.id}
                value={toDo.task}
                checked={toDo.isComplete}
                removeToDo={props.removeToDo}
                updateToDo={props.updateToDo}
                toggleCheck={props.toggleCheck}
            />
        );
    });

    return (
        <ul style = {style}>
            {lists}
        </ul>
    );
}