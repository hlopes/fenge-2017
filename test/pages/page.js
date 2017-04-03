class Page {

    open(path) {
        browser.url('/' + path);
    }

    pressEnter() {
        browser.keys('\uE007');
    }
}

module.exports = Page;