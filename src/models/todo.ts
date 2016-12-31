export class Todo {
    Title: String;
    Description: String;
    Completed: Boolean;

    constructor(title?: String, description?: String, completed?: Boolean) {
        this.Title = title || '';
        this.Description = description || '';
        this.Completed = completed || false;
    }
}