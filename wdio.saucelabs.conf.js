const defaults = require('./wdio.conf').config;

exports.config = Object.assign(defaults, {
    specs: [
        './build/specs/complete_todo.js'
    ],
    baseUrl: 'http://todomvc.com/examples/react/#',
    services: ['sauce'],
    logLevel: 'silent',
    user: 'sauce_labs_1',
    key: 'ec412326-a711-40d5-b072-272be4bdd334',
    // host: 'ondemand.saucelabs.com',
    // port: 80,
    capabilities: [{
            browserName: 'chrome',
            version: '53.0',
            platform: 'Windows 7'
        }, {
            browserName: 'MicrosoftEdge',
            version: '14.14393',
            platform: 'Windows 10',
            commandTimeout: 300
        }, {
            browserName: 'Safari',
            version: '9.1',
            platform: 'iOS',
            device: 'iPhone Simulator',
            commandTimeout: 300
        }],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000,
    },
    after: function() {
        console.log('SauceOnDemandSessionID=' + browser.requestHandler.sessionID + 'job-name=Test Suite');
    },
    afterTest: (step) => {},
    screenshotPath: ''
});
