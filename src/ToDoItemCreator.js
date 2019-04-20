import React from "react";
import ToDoItemModel from "./ToDoItemModel";

export default class ToDoItemCreator extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {description: ''};
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({description: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        var taskModel = new ToDoItemModel(this.state.description);
        this.props.onCreateTask(taskModel);
        this.setState({description: ""});
    }
    
    render() {
        return (
        <form onSubmit={this.onSubmit}>
            <input type="text" value={this.state.description} onChange={this.onChange}/>
            <input type="submit" value="Add New Task" disabled={!!!this.state.description}/>
        </form>
        );
    }
}