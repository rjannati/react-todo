import React from "react";
import Task from "./Task";

const TaskList = (props) => {
    let taskModels = props.tasks;

    let tasks = taskModels.map( t => {
        return <Task key={t.id} task={t} onTaskChecked={props.onTaskChecked} onTaskDelete={props.onTaskDelete} />
    });
    
    return <div className="task-list-container">{tasks}</div>;
}

export default TaskList;
