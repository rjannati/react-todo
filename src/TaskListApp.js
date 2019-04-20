import React from "react";
import TaskList from "./TaskList";
import TaskCreator from "./TaskCreator";
import './App.css';
import TaskCompleteFilter from "./TaskCompleteFilter";

export default class TaskListApp extends React.Component {

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
        this.setState({tasks: tasks}, this.updateVisibleTasks);
    }

    onTaskChecked(taskId) {
        let tasks = this.state.tasks;
        let taskToUpdate = tasks.find(v => {return v.id === taskId});
        taskToUpdate.done = !taskToUpdate.done;
        this.setState({tasks: tasks}, this.updateVisibleTasks);
    }

    onTaskDelete(taskId) {
        let tasks = this.state.tasks;
        let indexOfTaskToDelete = tasks.map((v) => {return v.id}).indexOf(taskId);
        tasks.splice(indexOfTaskToDelete, 1);
        this.setState({tasks: tasks}, this.updateVisibleTasks);
    }

    taskCompleteFilter_onChange(e) {
        let checked = e.target.checked;
        this.setState({showCompletedTasks: checked}, this.updateVisibleTasks);

    }

    updateVisibleTasks() {
        var tasks = this.state.showCompletedTasks ? this.state.tasks : this.state.tasks.filter((v) => !v.done);
        this.setState({visibleTasks: tasks});
    }

    render() {
        return (
            <div className="task-list-app">
                <TaskList tasks={this.state.visibleTasks} 
                    onTaskChecked={this.onTaskChecked} 
                    onTaskDelete={this.onTaskDelete} />
                <TaskCreator onCreateTask={this.onCreateTask} />
                <TaskCompleteFilter
                    showCompletedTasks={this.state.showCompletedTasks}
                    onChange={this.taskCompleteFilter_onChange}/>
            </div>
        );
    }

}