import { expect } from 'chai';

import TodosPage from '../pages/todos.page.js';

const todos = {
    TALK: 'Give a talk on Coimbra JUG',
    TALK_EDITED: 'Give a talk on Coimbra JUG Nov/2016'
};

describe('[TC CRUD]', () => {

    it('should be able to add a todo', () => {

        TodosPage.open();

        TodosPage.addTodo(todos.TALK)

        expect(TodosPage.todoList.isVisible()).to.be.true;
        expect(TodosPage.getTodo(todos.TALK).isVisible()).to.be.true;
    });

    it('should be able to edit a todo', () => {

        TodosPage.editTodo(todos.TALK, todos.TALK_EDITED);

        expect(TodosPage.todoList.isVisible()).to.be.true;
        expect(TodosPage.getTodo(todos.TALK_EDITED).isVisible()).to.be.true;
    });

    it('should be able to remove a todo', () => {

        TodosPage.removeTodo(todos.TALK_EDITED)

        expect(TodosPage.todoList.isExisting()).to.be.false;
    });
});