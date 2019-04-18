import React from "react";

const TaskCompletedDisplayFilter = (props) =>  {
    return
    (
        <div className="display-complete">
            <label htmlFor="displayCompletedTasks">
            <input type="checkbox" id="displayCompletedTasks" 
                defaultChecked={props.displayCompletedTasks} 
                onChange={props.onDisplayCompletedTasks} /> Display completed tasks
            </label>
        </div>
    );
}

export default TaskCompletedDisplayFilter;