const assert = require('assert');

const todos = {
    TALK: 'Talk at FENGE 2017',
};

describe('[TS CHECK & CLEAR]', () => {

    it('should be able to add a todo', () => {
        
        browser.url('/');

        $('.new-todo').setValue(todos.TALK);

        // press enter
        browser.keys('\uE007');

        assert.ok($('.todo-list').isVisible());
        assert.ok($('.todo-list > li').isVisible());
        assert.equal($('.todo-list > li').getText(), todos.TALK);
    });

    it('should be able to complete a todo', () => {

        $('.todo-list > li').element('.toggle').click();

        assert.ok($('.todo-list').isVisible());
        assert.equal($('.todo-list > li').getAttribute('class'), 'completed');
    });

    it('should be able to clear all completed todos', () => {

        $('button.clear-completed').click();
    });

    // delay each step for presentation purpose
    afterEach(() => browser.pause(2000));
});
