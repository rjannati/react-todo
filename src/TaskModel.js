import cuid from "cuid";

export default class TaskModel {
    constructor(description) {
        this.description = description;
        this.done = false;
        this.id = cuid();
    }
}