import React from "react";

const Task = (props) => {
    var id = props.task.id;
    var done = props.task.done;
    var description = props.task.description;
    return (
        <div className="task-container">
            <input type="checkbox" defaultChecked={done} onChange={() => props.onTaskChecked(id)}/>
            <span className={"description" + (done ? ' done' : '')}>{description}</span>
            <button onClick={() => props.onTaskDelete(id)}>Delete</button>
        </div>
    );
}

export default Task;