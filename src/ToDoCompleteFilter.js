import React from "react";

const ToDoCompleteFilter = (props) =>  {
    return (
        <div className="todo-complete-filter-container">
            <label htmlFor="displayCompletedTasks">
            <input type="checkbox" id="displayCompletedTasks" 
                checked={props.showCompletedTasks}
                onChange={props.onChange} /> Display completed tasks
            </label>
        </div>
    );
}

export default ToDoCompleteFilter;