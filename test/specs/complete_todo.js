const assert = require('assert');

const TodosPage = require('../pages/todos.page.js');

const todos = {
    TALK: 'Talk at FENGE 2017',
};

describe('[TS CHECK & CLEAR]', () => {

    it('should be able to add a todo', () => {

        TodosPage.open();

        TodosPage.addTodo(todos.TALK)

        assert.ok(TodosPage.todoList.isVisible());
        assert.ok(TodosPage.getTodo(todos.TALK).isVisible());
    });

    it('should be able to complete a todo', () => {

        TodosPage.completeTodo(todos.TALK);

        assert.ok(TodosPage.todoList.isVisible());
        assert.equal(TodosPage.getTodo(todos.TALK).getAttribute('class'), 'completed');
    });

    it('should be able to clear all completed todos', () => {

        TodosPage.clearCompleted();

        assert.ok(!TodosPage.todoList.isVisible());
    });

    // delay each step for presentation purpose
    afterEach(() => browser.pause(2000));
});
