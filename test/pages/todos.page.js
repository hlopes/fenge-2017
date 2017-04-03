import Page from './page';
import TodosManager from '../utils/todos.manager';

class TodosPage extends Page {

    constructor() {
        super();
        this.todos = [];
    }

    get newTodo() { return $('.new-todo') }
    get todoList() { return $('.todo-list') }
    get clearCompletedButton() { return $('button.clear-completed') }

    open() {
        super.open('');
    }

    addTodo(todoText) {
        this.newTodo.setValue(todoText);

        this.pressEnter();

        if (this.newTodo.getValue() === '') {
            TodosManager.add(todoText);
        }
    }

    getTodo(todoText) {
        return TodosManager.get(todoText);
    }

    removeTodo(todoText) {
        let todoElement = TodosManager.get(todoText);

        todoElement.moveToObject();
        todoElement.element('.destroy').click();

        TodosManager.remove(todoText);
    }

    editTodo(oldText, newText) {
        let todoElement = TodosManager.get(oldText);

        todoElement.doubleClick();
        todoElement.element('.edit').setValue(newText);

        this.pressEnter();

        TodosManager.edit(oldText, newText)
    }

    completeTodo(todoText) {
        let todoElement = TodosManager.get(todoText);

        todoElement.element('.toggle').click();
    }

    clearCompleted() {
        this.clearCompletedButton.click();
    }
}

export default new TodosPage();