class TodosManager {

    constructor() {
        this.todos = [];
    }

    get(todoText) {
        let index = this.todos.indexOf(todoText);
        return index == 0 ? $('.todo-list > li') : $('.todo-list > li:nth-child(' + ++index + ')');
    }

    add(todoText) {
        this.todos.push(todoText);
    }

    edit(oldText, newText) {
        let todoIdx = this.todos.indexOf(oldText);
        this.todos[todoIdx] = newText;
    }

    remove(todoText) {
        this.todos.splice(this.todos.indexOf(todoText), 1);
    }
}

export default new TodosManager;
