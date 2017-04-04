const assert = require('assert');

const todos = {
    TALK: 'Talk at FENGE 2017',
    TALK_EDITED: '>>>>>>>>>>> Talking at FENGE 2017'
};

describe('[TS CRUD]', () => {

    it('should be able to add a todo', () => {
        
        browser.url('/');

        $('.new-todo').setValue(todos.TALK);

        // press enter
        browser.keys('\uE007');

        assert.ok($('.todo-list').isVisible());
        assert.ok($('.todo-list > li').isVisible());
        assert.equal($('.todo-list > li').getText(), todos.TALK);
    });

    it('should be able to edit a todo', () => {

        $('.todo-list > li').doubleClick();
        $('.todo-list > li').element('.edit').setValue(todos.TALK_EDITED);

        // press enter
        browser.keys('\uE007');

        assert.ok($('.todo-list').isVisible());
        assert.ok($('.todo-list > li').isVisible());
        assert.equal($('.todo-list > li').getText(), todos.TALK_EDITED);
    });

    it('should be able to remove a todo', () => {

        $('.todo-list > li').moveToObject();
        $('.todo-list > li').element('.destroy').click();

        assert.ok(!$('.todo-list').isExisting());
    });

});
