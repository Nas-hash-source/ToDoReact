import React, { useState } from "react";
import InputForm from './components/InputForm';
import FilterList from './components/FilterList';
import ToDoList from './components/ToDoList';
import "./index.css";

export default function App() {
  const [ input, setInput ] = useState("");
  const [ filter, setFilter ] = useState("All");
  const [ toDoLists, settoDoLists ] =  useState([]);
  

  const addToDo = (toDo) => {
    let newToDoLists;
    if (toDoLists.length > 0) {
      newToDoLists = [ ...toDoLists, toDo ];
    } else {
      newToDoLists = [ toDo ];
    }
    settoDoLists(newToDoLists);
  };

  // check and uncheck todo
  const toggleCheck = (id) =>  {
    const newToDoLists = toDoLists.map((item) => {
      if (id === item.id){
        return {...item, isComplete: !item.isComplete};
      } else {
        return item;
      }
    });
    settoDoLists(newToDoLists);
  }

  const updateToDo = (id, updatedToDo) => {
    const updatedToDoLists = toDoLists.map((item) => {
      if (id === item.id){
        return {...item, task: updatedToDo};
      } else {
        return item;
      }
    });
    settoDoLists(updatedToDoLists);
  }

  const removeToDo = (id)  => {
    const remainingToDoLists = toDoLists.filter(item => 
        id !== item.id
    );
    settoDoLists(remainingToDoLists);
  }

  const processFilter = () => {
    if (filter === "All") {
      return toDoLists;
    }

    else if (filter === "Active") {
      return toDoLists.filter(toDo => !toDo.isComplete);
    }

    else {
      return toDoLists.filter(toDo => toDo.isComplete);
    }
  }

  const filteredList = processFilter();

  return (
    <div className="App">
      <h1>To Do App</h1>
      <InputForm 
        input={input} 
        toDoLists={toDoLists}
        setInput={setInput} 
        addToDo={addToDo}
      />
      <FilterList 
        filter={filter} 
        setFilter={setFilter}
      />
      <ToDoList 
        toDoLists={filteredList}
        updateToDo={updateToDo}
        removeToDo={removeToDo}
        toggleCheck={toggleCheck}
      />
    </div>
  );
}
