import React from "react";
import ToDoList from "./ToDoList";
import ToDoItemCreator from "./ToDoItemCreator";
import './App.css';
import ToDoCompleteFilter from "./ToDoCompleteFilter";

export default class ToDoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            visibleTasks: [],
            showCompletedTasks: true,
        };
        this.onCreateTask = this.onCreateTask.bind(this);
        this.onTaskChecked = this.onTaskChecked.bind(this);
        this.onTaskDelete = this.onTaskDelete.bind(this);
        this.taskCompleteFilter_onChange = this.taskCompleteFilter_onChange.bind(this);
    }

    onCreateTask(taskModel) {
        let tasks = this.state.tasks;
        tasks.push(taskModel);
        let visibleTasks = this.getVisibleTasks();
        this.setState({
            tasks: tasks,
            visibleTasks: visibleTasks
        });
    }

    onTaskChecked(taskId) {
        let tasks = this.state.tasks;
        let taskToUpdate = tasks.find(v => {return v.id === taskId});
        taskToUpdate.done = !taskToUpdate.done;
        let visibleTasks = this.getVisibleTasks();
        this.setState({tasks: tasks, visibleTasks: visibleTasks});
    }

    onTaskDelete(taskId) {
        let tasks = this.state.tasks;
        let indexOfTaskToDelete = tasks.map((v) => {return v.id}).indexOf(taskId);
        tasks.splice(indexOfTaskToDelete, 1);
        let visibleTasks = this.getVisibleTasks();
        this.setState({tasks: tasks, visibleTasks: visibleTasks });
    }

    taskCompleteFilter_onChange(e) {
        let showCompletedTasks = e.target.checked;
        let visibleTasks = this.getVisibleTasks(showCompletedTasks);
        this.setState({showCompletedTasks: showCompletedTasks, visibleTasks: visibleTasks});

    }

    getVisibleTasks(showCompletedTasks) {
        showCompletedTasks = (showCompletedTasks !== undefined) ? showCompletedTasks : this.state.showCompletedTasks;
        return showCompletedTasks ? this.state.tasks : this.state.tasks.filter((v) => !v.done);
    }

    render() {
        return (
            <div className="todod-list-app">
                <ToDoList tasks={this.state.visibleTasks} 
                    onTaskChecked={this.onTaskChecked} 
                    onTaskDelete={this.onTaskDelete} />
                <ToDoItemCreator onCreateTask={this.onCreateTask} />
                <ToDoCompleteFilter
                    showCompletedTasks={this.state.showCompletedTasks}
                    onChange={this.taskCompleteFilter_onChange}/>
            </div>
        );
    }

}