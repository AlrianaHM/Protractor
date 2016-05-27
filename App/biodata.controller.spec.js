describe('Protractor biodata', function () {
    it('should have a title', function () {
        browser.get('http://alrianahm.github.io/Protractor/App/biodata.html');
        expect(browser.getTitle()).toEqual('Biodata');
    });
});