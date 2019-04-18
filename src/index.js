import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TaskListApp from './TaskListApp';


//const tasks = [new TaskModel(`This is a test task.`), new TaskModel('This is another Task'), new TaskModel('This is a third task.')];

//const onChange = (e) => { console.log("onChange triggered.")}

ReactDOM.render(<TaskListApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
