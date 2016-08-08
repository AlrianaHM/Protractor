exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['biodata.controller.spec.js'],
    capabilities: {
        'browserName': 'firefox'
    }
}