import { expect } from 'chai';

import TodosPage from '../pages/todos.page.js';

const todos = {
    TALK: 'Give a talk on Coimbra JUG',
};

describe('[TC CHECK & CLEAR]', () => {

    it('should be able to add a todo', () => {

        TodosPage.open();

        TodosPage.addTodo(todos.TALK)

        expect(TodosPage.todoList.isVisible()).to.be.true;
        expect(TodosPage.getTodo(todos.TALK).isVisible()).to.be.true;
    });

    it('should be able to complete a todo', () => {

        TodosPage.completeTodo(todos.TALK);

        expect(TodosPage.todoList.isVisible()).to.be.true;
        expect(TodosPage.getTodo(todos.TALK).getAttribute('class')).to.equal('completed');
    });

    it('should be able to clear all completed todos', () => {

        TodosPage.clearCompleted();

        expect(TodosPage.todoList.isVisible()).to.be.false;
    });
});