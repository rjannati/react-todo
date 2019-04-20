import cuid from "cuid";

export default class ToDoItemModel {
    constructor(description) {
        this.description = description;
        this.done = false;
        this.id = cuid();
    }
}