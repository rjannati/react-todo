import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
    let taskModels = props.tasks;

    let tasks = taskModels.map( t => {
        return <ToDoItem key={t.id} task={t} 
                onTaskChecked={props.onTaskChecked} 
                onTaskDelete={props.onTaskDelete} />
    });
    
    return <div className="todo-list-container">{tasks}</div>;
}

export default ToDoList;
