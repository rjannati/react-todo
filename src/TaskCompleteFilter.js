import React from "react";

const TaskCompleteFilter = (props) =>  {
    return (
        <div className="display-complete">
            <label htmlFor="displayCompletedTasks">
            <input type="checkbox" id="displayCompletedTasks" 
                checked={props.showCompletedTasks}
                onChange={props.onChange} /> Display completed tasks
            </label>
        </div>
    );
}

export default TaskCompleteFilter;