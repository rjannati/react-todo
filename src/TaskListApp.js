import React from "react";
import TaskList from "./TaskList";
import TaskCreator from "./TaskCreator";
import './App.css';

export default class TaskListApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            visibleTasks: [],
            displayCompletedTasks: true, 
        };
        this.onCreateTask = this.onCreateTask.bind(this);
        this.onTaskChecked = this.onTaskChecked.bind(this);
        this.onTaskDelete = this.onTaskDelete.bind(this);
    }

    onCreateTask(taskModel) {
        let tasks = this.state.tasks;
        tasks.push(taskModel);
        this.setState({tasks: tasks});
    }

    onTaskChecked(taskId) {
        let tasks = this.state.tasks;
        let taskToUpdate = tasks.find(v => {return v.id == taskId});
        taskToUpdate.done = !taskToUpdate.done;
        this.setState({tasks: tasks});
    }

    onTaskDelete(taskId) {
        let tasks = this.state.tasks;
        let indexOfTaskToDelete = tasks.map((v) => {return v.id}).indexOf(taskId);
        tasks.splice(indexOfTaskToDelete, 1);
        this.setState({tasks: tasks});
    }

    render() {
        return (
            <div className="task-list-app">
                <TaskList tasks={this.state.tasks} onTaskChecked={this.onTaskChecked} onTaskDelete={this.onTaskDelete}/>
                <TaskCreator onCreateTask={this.onCreateTask}/>
            </div>
        );
    }

}