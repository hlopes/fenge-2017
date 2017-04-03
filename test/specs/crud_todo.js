const assert = require('assert');

const TodosPage = require('../pages/todos.page.js');

const todos = {
    TALK: 'Talk at FENGE 2017',
    TALK_EDITED: '>>>>>>>>>>> Talking at FENGE 2017'
};

describe('[TS CRUD]', () => {

    it('should be able to add a todo', () => {

        TodosPage.open();

        TodosPage.addTodo(todos.TALK)

        assert.ok(TodosPage.todoList.isVisible());
        assert.ok(TodosPage.getTodo(todos.TALK).isVisible());
    });

    it('should be able to edit a todo', () => {

        TodosPage.editTodo(todos.TALK, todos.TALK_EDITED);

        assert.ok(TodosPage.todoList.isVisible());
        assert.ok(TodosPage.getTodo(todos.TALK_EDITED).isVisible());
    });

    it('should be able to remove a todo', () => {

        TodosPage.removeTodo(todos.TALK_EDITED)

        assert.ok(!TodosPage.todoList.isExisting());
    });

    // delay each step for presentation purpose
    afterEach(() => browser.pause(2000));
});
